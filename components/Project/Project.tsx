'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { projectsData } from '@/lib/data';
import Link from 'next/link';

type Props = (typeof projectsData)[number];

export const Project = ({ title, description, tags, imageUrl, projectUrl }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className='group'>
      <section className='bg-neutral-900 max-w-[42rem] border border-slate-50 border-opacity-40 hover:border-opacity-100 overflow-hidden group-odd:sm:pr-8 relative sm:h-[20rem] group-even:pl-8 transition cursor-pointer rounded-lg'>
        <Link href={projectUrl} target='__blank'>
          <div className='p-4 sm:p-6 sm:pr-0 sm:max-w-[50%] flex flex-col h-full group-even:ml-[19rem]'>
            <h3 className='text-2xl font-semibold text-slate-200'>{title}</h3>
            <p className='mt-2 leading-relaxed text-slate-300 group-odd:max-w-[35%] group-odd:sm:max-w-full'>
              {description}
            </p>
            <ul className='flex flex-wrap mt-4 gap-1 sm:mt-auto'>
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className='bg-neutral-950 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full'>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            className='absolute top-8 -right-[13rem] w-[33rem] rounded-t-lg shadow-2xl 
        group-even:right-[initial] group-even:-left-[13rem] group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-105
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
        transition'
            src={imageUrl}
            alt={title}
            quality={95}
          />
        </Link>
      </section>
    </motion.div>
  );
};
