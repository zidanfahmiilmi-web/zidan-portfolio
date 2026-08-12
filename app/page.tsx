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
    <main className="relative min-h-screen text-white">
      {/* Background kosmik */}
      <CosmicBackground />

      {/* Navbar bergaya glass */}
      <Navbar />

      {/* Bungkus setiap section dengan animasi scroll + glassmorphism */}
      <AnimatedSection>
        <section className="glass-card p-8">
          <Hero />
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="glass-card p-8">
          <About />
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="glass-card p-8">
          <Experience />
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="glass-card p-8">
          <Skills />
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="glass-card p-8">
          <Projects />
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="glass-card p-8">
          <Contact />
        </section>
      </AnimatedSection>

      {/* Footer bergaya glass */}
      <Footer />
    </main>
  );
}
