"use client";

import CVHeader from '@/components/CVHeader';
import CVHero from '@/components/CVHero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import CVFooter from '@/components/CVFooter';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <div className="animated-bg-overlay fixed inset-0 pointer-events-none z-0" />
      <div className="relative z-10">
        <CVHeader />
        <section id="hero" className="pt-14 sm:pt-16 md:pt-0">
          <CVHero />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        {/* <section id="education">
          <Education />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
        <CVFooter />
      </div>
    </main>
  );
}
