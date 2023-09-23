"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import authorImage from "@/public/marcin_cholewka.jpeg";

export const Intro = () => {
  const t = useTranslations("Intro");

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              alt="Author portrait"
              className="h-24 w-24 rounded-full border-[0.35rem] border-gray-200 object-cover shadow-xl"
              priority={true}
              quality="95"
              src={authorImage}
            />
          </motion.div>
          <motion.span
            className="text-3xl absolute top-0 left-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t.rich("text", {
          important: (chunks) => <b>{chunks}</b>,

          underline: (chunks) => <span className="underline">{chunks}</span>,
        })}
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          {t("contactMe")}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          {t("downloadCV")}
          <HiDownload className="group-hover:translate-y-1 transition opacity-60" />
        </a>
        <a
          href="https://www.linkedin.com/in/marcin-cholewka-15b72615a/"
          target="__blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/MarcinCholewka"
          target="__blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.3rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
