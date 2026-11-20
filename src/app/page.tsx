import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { Education } from '@/components/sections/education';
import { Skills } from '@/components/sections/skills';
import { Internship } from '@/components/sections/internship';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Internship />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
