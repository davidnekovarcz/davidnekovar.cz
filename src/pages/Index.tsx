import CVHeader from "@/components/CVHeader";
import CVHero from "@/components/CVHero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import CVFooter from "@/components/CVFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <CVHeader />
      <section id="hero">
        <CVHero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <CVFooter />
    </main>
  );
};

export default Index;
