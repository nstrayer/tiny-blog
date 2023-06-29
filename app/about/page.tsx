import Image from "next/image";

function AuthorImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      width={250}
      height={250 * (5 / 4)}
      alt={alt}
      className="rounded-md flex-initial max-w-full min-w-0 my-0"
    />
  );
}

export default function About() {
  return (
    <div className="min-h-screen max-w-prose prose dark:prose-invert lg:prose-xl">
      <p>
        Hi I&apos;m Nick. I write{" "}
        <a href="https://posit.co/">open-source software</a> for a living from a
        shed in my Michigan backyard.
      </p>

      <div className="flex justify-around gap-3">
        <AuthorImage
          src="/with-cat.jpeg"
          alt="Picture of the author with his cat in the garden"
        />
        <AuthorImage
          src="/in-shed.jpeg"
          alt="Picture of the author in his shed"
        />
      </div>

      <p>
        In my professional existance I primarily write in Typescript, Python,
        and R. In my personal projects I also dabble in Swift, Go, and Rust.
      </p>

      <p>
        The purpose of this blog is to be be an outlet for the little tips and
        tricks I pick up in my career. While I primarily blog for my benefit, I
        hope that the stuff I write may be of some value to you the reader!
      </p>

      <p>
        I have a PhD in Biostatistics from Vanderbilt University where my
        reseach focused on network analysis and visualization of large
        electronic health records datasets. If that area of my work is more
        interesting to you, I recomend checking out my other blog I run with {}
        <a href="https://www.lucymcgowan.com/">
          Lucy D&apos;Agostino McGowan:
        </a>{" "}
        <a href="https://livefreeordichotomize.com/">LiveFreeOrDichotomize.</a>
      </p>

      <p>Happy coding!</p>
    </div>
  );
}
