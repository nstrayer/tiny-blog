import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-6 py-2">
      <ul className="flex justify-end align-baseline flex-wrap gap-x-4 sm:text-xl">
        <li className="mr-auto text-xl sm:text-2xl">
          <NavLink href="/">Boot and Shoe</NavLink>
        </li>
        <li>
          <NavLink href="/all">All Posts</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="https://github.com/nstrayer/tiny-blog">
            Github ↗️
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

type NavLink = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLink) => {
  return (
    <Link className="hover:text-gray-300 hover:underline" href={href}>
      {children}
    </Link>
  );
};
