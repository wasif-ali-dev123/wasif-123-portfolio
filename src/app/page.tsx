import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { AtAGlance } from "@/components/AtAGlance";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Engineering } from "@/components/Engineering";
import { Ownership } from "@/components/Ownership";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { Faq } from "@/components/Faq";
import { MobileCta } from "@/components/MobileCta";
import { HashScroll } from "@/components/HashScroll";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

/**
 * Same section order as the original portfolio (About, Experience, Work,
 * Engineering, Consulting, Skills, Education, Contact), with the results
 * strip after the hero and the working promises and services before Contact.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Proof />
        <AtAGlance />
        <About />
        <Experience />
        <Work />
        <Engineering />
        <Ownership />
        <Skills />
        <Education />
        <Trust />
        <Services />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
      <HashScroll />
    </>
  );
}
