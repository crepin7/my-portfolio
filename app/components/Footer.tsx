"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/crepin7" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/" },
  { name: "Email", icon: Mail, href: "mailto:aziamadjicrepin@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between">
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
        <p className="text-xs font-mono text-muted-2">
          &copy; {new Date().getFullYear()} Crepin AZIAMADJI
        </p>
      </div>
    </footer>
  );
}
