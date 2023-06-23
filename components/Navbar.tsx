import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-6 py-2">
      <ul className="flex justify-end align-baseline flex-wrap gap-x-4 sm:text-xl">
        {[
          ["/", "Home"],
          ["/all", "All Posts"],
          ["/about", "About"],
          ["https:://github.com/nstrayer/tiny-blog", "Github ↗"],
        ].map(([href, text]) => {
          return (
            <li
              key={text}
              className="rounded-pill px-3 py-1 hover:shadow-md hover:bg-orange-600 hover:text-white"
            >
              <Link href={href}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
