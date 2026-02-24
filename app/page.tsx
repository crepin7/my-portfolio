import Particles from "./components/Particles";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crépin AZIAMADJI | Développeur Full Stack & IA",
  description: "Développeur passionné spécialisé en web, Next.js, React, Python et intelligence artificielle. Découvrez mes projets et compétences.",
  keywords: ["développeur full stack", "développeur IA", "React", "Next.js", "Python", "Flutter", "machine learning", "crépin aziamadji"],
  openGraph: {
    title: "Crépin AZIAMADJI | Développeur Full Stack & IA",
    description: "Développeur passionné spécialisé en web, Next.js, React, Python et intelligence artificielle.",
    url: "https://crepin.dev/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white overflow-x-hidden">
      {/* Background Particles */}
      <Particles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
