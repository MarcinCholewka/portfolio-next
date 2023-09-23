'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const SectionDivider = () => {
  return (
    <motion.div
      className='bg-violet-300 my-16 h-16 w-1 rounded-full hidden sm:block'
      data-testid='section-divider'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}></motion.div>
  );
};
