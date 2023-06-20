import { BlogEntry } from "@/lib/api-static";
import { format } from "date-fns";
import Link from "next/link";

export default function PostPreview({ post }: { post: BlogEntry }) {
  return (
    <div className="w-full mx-auto group">
      <Link href={`/posts/${post.slug}`} className="no-underline">
        <div className="mt-4 space-y-2">
          <p className="font-semibold text-xl group-hover:underline">
            {post.title}
          </p>
          <time className="text-slate-400" dateTime={post.date.toISOString()}>
            {format(post.date, "LLLL d, yyyy")}
          </time>
        </div>
      </Link>
    </div>
  );
}
