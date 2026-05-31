"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/crepin7" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/" },
  { name: "Email", icon: Mail, href: "mailto:aziamadjicrepin@gmail.com" },
];

const copy = {
  fr: {
    available: "disponible",
    greeting: "salut.",
    name: "crepin aziamadji",
    role: "ingenieur logiciel",
    description:
      "je construis des outils et des applications de la terminal au navigateur. linux au quotidien, git avance, automatisation et IA. chaque projet demarre par un bon Makefile.",
    ctaProjects: "voir les projets",
    ctaContact: "me contacter",
    scroll: "scroll",
  },
  en: {
    available: "available",
    greeting: "hey.",
    name: "crepin aziamadji",
    role: "software engineer",
    description:
      "i build tools and applications from terminal to browser. linux daily driver, advanced git, automation and AI. every project starts with a solid Makefile.",
    ctaProjects: "view projects",
    ctaContact: "get in touch",
    scroll: "scroll",
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-[0.03]" />

      {/* Vertical accent line */}
      <div className="absolute left-8 sm:left-12 md:left-16 top-0 bottom-0 w-px">
        <motion.div
          className="glow-line w-full"
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 md:px-16 w-full pt-32 pb-20">
        {/* Terminal-style prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="font-mono text-sm text-accent">$</span>
          <span className="font-mono text-sm text-muted">whoami</span>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-50"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
          </span>
          <span className="text-xs font-mono text-muted uppercase tracking-widest">
            {t.available}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-accent font-mono text-lg sm:text-xl mb-2"
        >
          {t.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2"
        >
          {t.name}
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-xl sm:text-2xl md:text-3xl text-muted font-light mb-8"
        >
          {t.role}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-12"
        >
          {t.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-start gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group flex items-center gap-2 px-6 py-3 bg-accent text-background font-mono text-sm rounded-lg transition-all duration-200 hover:brightness-110"
          >
            <span>→</span>
            {t.ctaProjects}
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="flex items-center gap-2 px-6 py-3 surface rounded-lg font-mono text-sm text-muted text-foreground surface-hover"
          >
            <span>~</span>
            {t.ctaContact}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-5"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label={social.name}
            >
              <social.icon size={18} />
            </a>
          ))}
          <div className="h-px flex-1 max-w-16 bg-border" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-mono uppercase tracking-widest">{t.scroll}</span>
        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}
