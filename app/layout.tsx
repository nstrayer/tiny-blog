import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { gradient_dark, gradient_light } from "../tailwind.config.js";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Boot & Shoe Blog",
  description:
    "A blog about the nuts and bolts of programmings along with the philosophy.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff7da" },
    { media: "(prefers-color-scheme: dark)", color: "#190061" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-stone-50 dark:bg-stone-900 dark:text-stone-50`}
      >
        <Navbar />
        <div className="min-h-screen max-w-prose mx-auto my-6 md:my-10 px-7 md:px-10">
          {children}
        </div>
      </body>
    </html>
  );
}
