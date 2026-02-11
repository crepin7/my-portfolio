"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Accueil", href: "#hero" },
      { name: "À propos", href: "#about" },
      { name: "Compétences", href: "#skills" },
      { name: "Projets", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { name: "GitHub", href: "https://github.com" },
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "Twitter", href: "https://twitter.com" },
      { name: "CV", href: "/cv.pdf" },
    ],
  },
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Email", icon: Mail, href: "mailto:alex@example.com" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-black border-t border-zinc-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="inline-block text-2xl font-bold gradient-text mb-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {'<Crépin />'}
            </motion.a>
            <p className="text-zinc-400 max-w-md mb-6 leading-relaxed">
              Développeur Full Stack passionné par la création d'expériences web 
              exceptionnelles et l'intelligence artificielle. Toujours à la recherche 
              de nouveaux défis et collaborations.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Crépin AZIAMADJI. Fait avec
              <Heart size={14} className="text-red-500 fill-red-500" />
              et beaucoup de café
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
              whileHover={{ y: -2 }}
            >
              Retour en haut
              <motion.span
                className="inline-block"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp size={16} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="text-[20vw] font-bold text-zinc-900/30 whitespace-nowrap leading-none select-none">
          CRÉPIN AZIAMADJI
        </div>
      </div>
    </footer>
  );
}
