import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { Work } from "@/components/Work";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Proof />
        <Work />
        <Trust />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
