import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="mx-auto">
        <ul className="flex space-x-6 text-lg justify-end">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="https://github.com/nstrayer/tiny-blog">
              Github
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
