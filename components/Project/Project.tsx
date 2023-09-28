'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { projectsData } from '@/lib/data';

type Props = (typeof projectsData)[number];

export const Project = ({ id, title, description, tags, imageUrl }: Props) => {
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
      <section className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden group-odd:sm:pr-8 relative sm:h-[20rem] group-even:pl-8 hover:bg-gray-200 transition cursor-pointer rounded-lg'>
        <div className='p-4 sm:p-6 sm:max-w-[50%] flex flex-col h-full group-even:ml-[19rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                key={index}
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'>
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
      </section>
    </motion.div>
  );
};
