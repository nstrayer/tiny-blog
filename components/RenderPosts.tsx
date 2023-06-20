import PostPreview from "@/components/PostPreview";
import { BlogEntry } from "@/lib/api-static";

export function RenderPosts({ posts }: { posts: BlogEntry[] }) {
  return (
    <div className="grid my-8 md:grid-cols-2 grid-cols-1 mx-auto md:gap-16 gap-7">
      {posts.map((post) => (
        <div key={post.title}>
          <PostPreview post={post} />
        </div>
      ))}
    </div>
  );
}
