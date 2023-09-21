"use client";

import cx from "classnames";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

import { links } from "@/lib/data";

export const Header = async () => {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[35rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={cx(
                  "flex w-full items-center justify-center px-3 sm:px-0 py-3 hover:text-gray-950 transition",
                  {
                    ["px-3"]: locale === "en",
                  }
                )}
              >
                {t(link.name)}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
