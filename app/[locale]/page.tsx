import { About } from '@/components/About';
import { Intro } from '@/components/Intro';
import { Projects } from '@/components/Projects';
import { SectionDivider } from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-5 gap-20 sm:gap-0'>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
    </main>
  );
}
