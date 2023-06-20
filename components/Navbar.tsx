import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="px-6 py-2">
        <ul className="flex text-lg justify-end align-baseline space-x-9">
          <li className="mr-auto text-2xl decoration-wavy">
            <NavLink href="/">Tiny-Blog</NavLink>
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
    </div>
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
