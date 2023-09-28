import { useTranslations } from 'next-intl';

import { Project } from '@/components/Project';
import { projectsData } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';

export const Projects = () => {
  const t = useTranslations('Projects');

  return (
    <section>
      <SectionHeading>{t('heading')}</SectionHeading>
      <div className='flex flex-col gap-3 sm:gap-8'>
        {projectsData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
