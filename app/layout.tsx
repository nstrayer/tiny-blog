import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import "./globals.css";

import colors from "tailwindcss/colors";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Boot & Shoe Blog",
  description:
    "A blog about the nuts and bolts of programmings along with the philosophy.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: colors.stone[50] },
    { media: "(prefers-color-scheme: dark)", color: colors.stone[950] },
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
        className={`${font.className} bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-50`}
      >
        <Navbar />
        <div className="min-h-screen max-w-prose mx-auto my-6 md:my-10 px-7 md:px-10">
          {children}
        </div>
      </body>
    </html>
  );
}
