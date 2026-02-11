"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/crepin7" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/" },
  { name: "X", icon: Twitter, href: "https://x.com/crepinote" },
  { name: "Email", icon: Mail, href: "mailto:aziamadjicrepin@gmail.com" },
];

const copy = {
  fr: {
    brandText:
      "Developpeur Full Stack passionne par la creation d'experiences web exceptionnelles et l'intelligence artificielle. Toujours a la recherche de nouveaux defis et collaborations.",
    sections: [
      {
        title: "Navigation",
        links: [
          { name: "Accueil", href: "#hero" },
          { name: "A propos", href: "#about" },
          { name: "Competences", href: "#skills" },
          { name: "Projets", href: "#projects" },
          { name: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Ressources",
        links: [
          { name: "GitHub", href: "https://github.com/crepin7" },
          { name: "LinkedIn", href: "https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/" },
          { name: "X", href: "https://x.com/crepinote" },
          { name: "CV", href: "/cv.pdf" },
        ],
      },
    ],
    madeWith: "Fait avec",
    coffee: "et beaucoup de cafe",
    backToTop: "Retour en haut",
  },
  en: {
    brandText:
      "Full Stack Developer passionate about building exceptional web experiences and artificial intelligence solutions. Always looking for new challenges and collaborations.",
    sections: [
      {
        title: "Navigation",
        links: [
          { name: "Home", href: "#hero" },
          { name: "About", href: "#about" },
          { name: "Skills", href: "#skills" },
          { name: "Projects", href: "#projects" },
          { name: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "GitHub", href: "https://github.com/crepin7" },
          { name: "LinkedIn", href: "https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/" },
          { name: "X", href: "https://x.com/crepinote" },
          { name: "Resume", href: "/cv.pdf" },
        ],
      },
    ],
    madeWith: "Made with",
    coffee: "and lots of coffee",
    backToTop: "Back to top",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = copy[language];

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
    <footer className="relative bg-zinc-50 dark:bg-black border-t border-zinc-300 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              {"<Crepin />"}
            </motion.a>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md mb-6 leading-relaxed">{t.brandText}</p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-900/10 dark:hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {t.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-zinc-900 dark:text-white font-semibold mb-4">{section.title}</h3>
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
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
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

      <div className="border-t border-zinc-300 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 dark:text-zinc-500 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Crepin AZIAMADJI. {t.madeWith}
              <Heart size={14} className="text-red-500 fill-red-500" />
              {t.coffee}
            </p>

            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
              whileHover={{ y: -2 }}
            >
              {t.backToTop}
              <motion.span className="inline-block" animate={{ y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowUp size={16} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="text-[20vw] font-bold text-zinc-300/70 dark:text-zinc-900/30 whitespace-nowrap leading-none select-none">
          CREPIN AZIAMADJI
        </div>
      </div>
    </footer>
  );
}
