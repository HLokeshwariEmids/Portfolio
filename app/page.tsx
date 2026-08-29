import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredentialStrip from "@/components/CredentialStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import AIArchitecture from "@/components/AIArchitecture";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <CredentialStrip />
          <About />
          <Experience />
          <FeaturedProjects />
          <AIArchitecture />
          <Skills />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
