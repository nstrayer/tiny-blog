import { RenderPosts } from "@/components/RenderPosts";
import { getAllPosts } from "@/lib/api-static";

export default async function Post({ params }: { params: { slug: string } }) {
  const posts = await getAllPosts();
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl"> All Posts </h2>
      <RenderPosts posts={posts} />
    </div>
  );
}
