import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      <h2 className="text-3xl">Tiny-Blog</h2>
      <section>
        <h2 className="text-lg">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="my-3">
              {title}
              <br />
              {id}
              <br />
              {String(date)}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
