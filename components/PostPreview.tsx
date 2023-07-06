import { BlogEntry } from "@/lib/api-static";
import { format } from "date-fns";
import Link from "next/link";

export default function PostPreview({ post }: { post: BlogEntry }) {
  return (
    <div className="w-full mx-auto group">
      <Link href={`/posts/${post.slug}`} className="no-underline">
        <div className="mt-4">
          <p className="font-semibold text-xl group-hover:underline">
            {post.title}
          </p>
          <p className="text-sm mt-2 mb-3 italic opacity-80">
            {post.description}
          </p>

          <time className="opacity-70" dateTime={post.date.toISOString()}>
            {format(post.date, "LLLL d, yyyy")}
          </time>
        </div>
      </Link>
    </div>
  );
}
