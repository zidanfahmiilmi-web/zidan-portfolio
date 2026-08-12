import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Komponen interaktif tambahan
import CosmicBackground from "@/components/CosmicBackground";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background kosmik */}
      <CosmicBackground />

      {/* Navbar bergaya glass */}
      <Navbar />

      {/* Bungkus setiap section dengan animasi scroll */}
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <Experience />
      </AnimatedSection>

      <AnimatedSection>
        <Skills />
      </AnimatedSection>

      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>

      {/* Footer bergaya glass */}
      <Footer />
    </main>
  );
}
