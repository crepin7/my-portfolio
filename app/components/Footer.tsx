"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/crepin7" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/" },
  { name: "Email", icon: Mail, href: "mailto:aziamadjicrepin@gmail.com" },
];

const copy = {
  fr: {
    backToTop: "Retour en haut",
    builtWith: "Concu avec Next.js et Tailwind CSS. Heberge sur Vercel.",
  },
  en: {
    backToTop: "Back to top",
    builtWith: "Built with Next.js and Tailwind CSS. Hosted on Vercel.",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <footer className="relative border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between">
        {/* Social links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={link.name}
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>

        {/* Center: credits */}
        <p className="text-xs font-mono text-muted-2 hidden sm:block">
          {t.builtWith}
        </p>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors"
        >
          {t.backToTop}
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
