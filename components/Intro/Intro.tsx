"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import authorImage from "@/public/marcin_cholewka.jpeg";

export const Intro = () => {
  return (
    <section>
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
    </section>
  );
};