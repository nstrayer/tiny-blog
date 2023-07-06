import { SocialLinks } from "@/components/SocialLinks";
import markdownStyles from "./markdown-styles.module.css";
import { getAllPosts, getPostBySlug } from "@/lib/api-static";

export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { html, title, date } = await getPostBySlug(slug);

  return (
    <div className="blog-article w-full prose prose-stone dark:prose-invert">
      <h2>{title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose-sm dark:prose-invert md:prose dark:md:prose-invert lg:prose-lg dark:lg:prose-invert"
      />
      <div className="flex items-baseline justify-center gap-4 mt-5 pt-2 border-t">
        <span className="-translate-y-1">Find me here:</span>
        <SocialLinks
          className="flex  gap-4 list-none justify-center h-auto m-0 p-0"
          include_text={false}
        />
      </div>
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
