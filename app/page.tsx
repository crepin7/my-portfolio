import Particles from "./components/Particles";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
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
