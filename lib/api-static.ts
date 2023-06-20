import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeShiki from "@leafac/rehype-shiki";
import * as shiki from "shiki";
import { parseISO } from "date-fns";
import { notFound } from "next/navigation";

// memoize/cache the creation of the markdown parser, this sped up the
// building of the blog from ~60s->~10s
let p: ReturnType<typeof getParserPre> | undefined;

async function getParserPre() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeShiki, {
      highlighter: await shiki.getHighlighter({ theme: "poimandres" }),
    })
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      content: (arg) => ({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + arg.properties?.id,
          style: "margin-right: 10px",
        },
        children: [{ type: "text", value: "#" }],
      }),
    });
}

function getParser() {
  if (!p) {
    p = getParserPre().catch((e) => {
      p = undefined;
      throw e;
    });
  }
  return p;
}

export async function getPostBySlug(slug: string) {
  const realId = slug.replace(/\.md$/, "");
  const fullPath = join("posts", `${realId}.md`);

  const postData = matter(await fs.promises.readFile(fullPath, "utf8"));

  if (!postData) {
    return notFound();
  }

  const { data, content } = postData;

  const parser = await getParser();
  const html = await parser.process(content);
  const date = parseISO(data.date);

  return {
    ...data,
    title: data.title,
    slug: realId,
    date,
    html: html.value.toString(),
  };
}

export type BlogEntry = Awaited<ReturnType<typeof getPostBySlug>>;

export async function getAllPosts() {
  const posts = await Promise.all(
    fs.readdirSync("posts").map((id) => getPostBySlug(id))
  );
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
