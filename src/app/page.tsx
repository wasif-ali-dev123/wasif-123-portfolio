import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { AIArchitecture } from "@/components/AIArchitecture";
import { Consulting } from "@/components/Consulting";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Section";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <AIArchitecture />
        <Divider />
        <Consulting />
        <Divider />
        <Skills />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
