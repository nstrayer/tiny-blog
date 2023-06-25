import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-6 py-2 flex align-baseline">
      <Link className="px-3 py-1 mr-auto hover:underline text-2xl" href="/">
        Boot & Shoe
      </Link>
      <button className="sm:hidden peer focus-within:opacity-0">
        <NavOpenButton />
      </button>
      <ul className="hidden align-baseline flex-wrap flex-col gap-x-4 sm:text-xl peer-focus-within:flex sm:flex sm:flex-row">
        <NavLinks />
      </ul>
    </nav>
  );
}

function NavOpenButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function NavLinks() {
  return (
    <>
      {[
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
    </>
  );
}
