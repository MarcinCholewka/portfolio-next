"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { SectionHeading } from "@/components/SectionHeading";

export const About = () => {
  const t = useTranslations("About");

  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>{t("heading")}</SectionHeading>
      <p className="mb-3 ">{t("mainInfo")}</p>
      <p>{t("hobby")}</p>
    </motion.section>
  );
};
