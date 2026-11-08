import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Engineering } from "@/components/Engineering";
import { Ownership } from "@/components/Ownership";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Proof />
        <About />
        <Work />
        <Experience />
        <Engineering />
        <Ownership />
        <Trust />
        <Services />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
