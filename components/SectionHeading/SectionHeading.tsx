import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const SectionHeading = ({ children }: Props) => {
  return (
    <h2 className='text-3xl text-slate-200 text-center font-medium capitalize mb-8'>{children}</h2>
  );
};
