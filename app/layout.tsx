import { Inter } from "next/font/google";
import cx from "classnames";

import { Header } from "@/components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marcin Cholewka",
  description: "I'm a frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(inter.className, "relative text-gray-950 h-[5000px] pt-24 sm:pt-32")}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
