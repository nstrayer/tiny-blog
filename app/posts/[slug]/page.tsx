import markdownStyles from "./markdown-styles.module.css";
import { getAllPosts, getPostBySlug } from "@/lib/api-static";

export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { html, title, date } = await getPostBySlug(slug);

  return (
    <div className="w-full ">
      <p className="text-2xl">{title}</p>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={markdownStyles["markdown"]}
      />
    </div>
  );
}

// This function can statically allow nextjs to find all the posts that you
// have made, and statically generate them
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Set the title of the page to be the post title, note that we no longer use
// e.g. next/head in app dir, and this can be async just like the server
// component
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { title } = await getPostBySlug(slug);
  return {
    title,
  };
}
