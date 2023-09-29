'use client';

import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

import { links } from '@/lib/data';
import { type Languages } from '@/types';

export const Header = () => {
  const t = useTranslations('Navigation');
  const locale: Languages = useLocale() as Languages;

  return (
    <header className='z-[999] relative' data-testid='header'>
      <motion.div
        className={cx(
          'fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-slate-50 border-opacity-40 bg-neutral-900 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-lg',
          {
            ['sm:w-[38rem]']: locale === 'pl',
          }
        )}
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}></motion.div>
      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-300 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className='h-3/4 flex items-center justify-center'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              <Link
                data-testid='link'
                href={link.hash}
                className={cx(
                  'flex w-full items-center justify-center px-3 sm:px-0 py-3 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tl from-startGradient from-1% via-middleGradient via-52% to-endGradient to-100%',
                  {
                    ['px-3']: locale === 'en',
                  }
                )}>
                {t(link.name)}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
