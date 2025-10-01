"use client";

import CVHeader from '@/components/CVHeader';
import CVHero from '@/components/CVHero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import CVFooter from '@/components/CVFooter';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <CVHeader />
      <CVHero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <CVFooter />
    </main>
  );
}
