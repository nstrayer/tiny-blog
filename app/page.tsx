import Link from "next/link";
import PostPreview from "@/components/PostPreview";
import { getAllPosts } from "@/lib/api-static";

const NUM_RECENT_POSTS = 10;

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, NUM_RECENT_POSTS);
  return (
    <main>
      <section>
        <p className="text-3xl mb-6">Recent Posts</p>
        <div className="grid my-8 md:grid-cols-2 grid-cols-1 mx-auto md:gap-16 gap-7">
          {recentPosts.map((post) => (
            <div key={post.title}>
              <PostPreview post={post} />
            </div>
          ))}
        </div>
        <div className="h-16"></div>
        <Link
          href="/all"
          className="text-3xl hover:text-gray-300 hover:underline"
        >
          Read More{" ➡ "}
        </Link>
      </section>
    </main>
  );
}
