import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import definedLearning from "@/public/defined-learning.png";
import squadlocker from "@/public/squadlocker.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Kodilla bootcamp",
    location: "Wrocław, PL",
    description:
      "Intensive course in the dimension of 480 hours, including training in the following languages and technologies: HTML5, CSS3, RWD, Bootstrap, Sass, Git, jQuery, AJAX, JavaScript ES6, Node, React, Express, Redux, MongoDB, MERN",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Bielsko-Biała, PL",
    description:
      "As a front-end developer, I worked for over 4 years in one company, but I worked remotely for over 3 years.",
    icon: React.createElement(FaReact),
    date: "2019 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "SquadLocker",
    description:
      "As part of the frontend team, I participated in the creation of a platform that will follow a process that allows users to build their own clothing store.",
    tags: ["React", "ROR"],
    imageUrl: definedLearning,
  },
  {
    title: "Defined Careers",
    description:
      "As part of the front-end team, I was involved in creating an eLearning platform that prepares students for the future by helping them stay engaged in lessons, encouraging critical thinking and collaboration. The application was prepared for three types of users: students, teachers and administrators.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: squadlocker,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Framer Motion",
] as const;
