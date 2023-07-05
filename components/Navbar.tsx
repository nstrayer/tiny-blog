import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-6 py-2 md:py-6 flex align-baseline shadow-md shadow-stone-200 bg-fixed dark:border-b-2 dark:border-slate-700 dark:shadow-none">
      <Link className="py-1 mr-auto hover:underline text-2xl" href="/">
        Boot & Shoe
      </Link>
      <div className="sm:hidden pt-1.5">
        <CollapsingMenu />
      </div>
      <ul className="hidden sm:flex align-baseline gap-x-4 text-xl">
        <NavLinks />
      </ul>
    </nav>
  );
}

function CollapsingMenu() {
  return (
    <>
      <input type="checkbox" id="nav-toggle" className="peer hidden" />
      <label
        htmlFor="nav-toggle"
        className="peer-checked:hidden flex justify-end"
      >
        <NavOpenButton />
      </label>
      <label
        htmlFor="nav-toggle"
        className="hidden peer-checked:flex justify-end"
      >
        <NavButtonClose />
      </label>
      <ul className="align-baseline flex-wrap flex-col gap-x-4 target:flex sm:flex sm:flex-row h-0 overflow-hidden peer-checked:h-fit">
        <NavLinks />
      </ul>
    </>
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

function NavButtonClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

const links: [link: string, title: string, is_external?: boolean][] = [
  // ["/all", "All Posts"],
  ["/about", "About"],
  ["https://github.com/nstrayer/tiny-blog", "Github ↗", true],
];

function NavLinks() {
  return (
    <>
      {links.map(([href, text, is_external]) => {
        return (
          <li
            key={text}
            className="rounded-pill px-3 py-1 hover:shadow-md hover:bg-orange-600 hover:text-white"
          >
            {is_external ? (
              <a href={href} target={"_blank"} rel={"noreferrer"}>
                {text}
              </a>
            ) : (
              <Link href={href}>{text}</Link>
            )}
          </li>
        );
      })}
    </>
  );
}
