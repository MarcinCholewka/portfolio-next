import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import React from 'react';

import definedLearning from '@/public/defined-learning.png';
import squadlocker from '@/public/squadlocker.png';

export const links = [
  {
    name: 'home',
    hash: '#home',
  },
  {
    name: 'about',
    hash: '#about',
  },
  {
    name: 'projects',
    hash: '#projects',
  },
  {
    name: 'skills',
    hash: '#skills',
  },
  {
    name: 'experience',
    hash: '#experience',
  },
  {
    name: 'contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Kodilla bootcamp',
    location: 'Wrocław, PL',
    description:
      'Intensive course in the dimension of 480 hours, including training in the following languages and technologies: HTML5, CSS3, RWD, Bootstrap, Sass, Git, jQuery, AJAX, JavaScript ES6, Node, React, Express, Redux, MongoDB, MERN',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Bielsko-Biała, PL',
    description:
      'As a front-end developer, I worked for over 4 years in one company, but I worked remotely for over 3 years.',
    icon: React.createElement(FaReact),
    date: '2019 - 2023',
  },
] as const;

export const projectsData = [
  {
    id: '1',
    title: 'SquadLocker',
    description:
      'As part of the frontend team in Selleo, I participated in the creation of a platform that will follow a process that allows users to build their own clothing store.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'ROR'],
    imageUrl: squadlocker,
    projectUrl: 'https://selleo.com/portfolio/custom-ecommerce',
  },
  {
    id: '2',
    title: 'Defined Careers',
    description:
      'As part of the front-end team in Selleo, I was involved in creating an e-learning platform dedicated to students and teachers to bring real-world experience into the classroom',
    tags: ['HTML', 'CSS', 'React', 'TypeScript', 'GraphQL', 'Tailwind', 'Redux', 'ROR'],
    imageUrl: definedLearning,
    projectUrl: 'https://selleo.com/portfolio/online-learning-platform',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'Framer Motion',
] as const;
