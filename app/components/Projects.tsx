"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

type CategoryKey = "all" | "web" | "mobile" | "tools";

const categories: { key: CategoryKey; label: { fr: string; en: string } }[] = [
  { key: "all", label: { fr: "Tous", en: "All" } },
  { key: "web", label: { fr: "Web", en: "Web" } },
  { key: "mobile", label: { fr: "Mobile", en: "Mobile" } },
  { key: "tools", label: { fr: "Outils", en: "Tools" } },
];

const copy = {
  fr: {
    sectionLabel: "projets",
    title: "Quelques projets",
    intro: "Une selection de projets personnels et academiques. La plupart sont des experimentations ou des prototypes.",
    viewSource: "Code source",
    liveDemo: "Demo",
    viewPlus: "Voir plus sur GitHub",
  },
  en: {
    sectionLabel: "projects",
    title: "Selected work",
    intro: "A selection of personal and academic projects. Most are experiments or prototypes.",
    viewSource: "Source code",
    liveDemo: "Live demo",
    viewPlus: "See more on GitHub",
  },
};

export const projects = [
  {
    name: "HotelApp",
    description: {
      fr: "Application web de gestion hoteliere. Reservation, chambres, clients et facturation.",
      en: "Hotel management web application. Booking, rooms, clients and billing.",
    },
    tags: ["Web", "Full Stack"],
    category: "web",
    github: "https://github.com/crepin7/HotelApp",
    demo: "https://hotel-app-tau-self.vercel.app/",
  },
  {
    name: "BarApp",
    description: {
      fr: "Application mobile Flutter pour la gestion d'un bar. Stock, commandes et historique.",
      en: "Flutter mobile app for bar management. Inventory, orders and history.",
    },
    tags: ["Flutter", "Mobile", "Dart"],
    category: "mobile",
    github: "https://github.com/crepin7/BarApp",
  },
  {
    name: "admin-site",
    description: {
      fr: "Interface d'administration avec gestion des utilisateurs, tableaux de bord et CRUD.",
      en: "Admin interface with user management, dashboards and CRUD.",
    },
    tags: ["React", "Admin", "Dashboard"],
    category: "web",
    github: "https://github.com/crepin7/admin-site",
  },
  {
    name: "booking_api",
    description: {
      fr: "API de reservation. Gestion des creneaux, utilisateurs et confirmations par email.",
      en: "Booking API. Slot management, users and email confirmations.",
    },
    tags: ["API", "Node.js", "Express"],
    category: "web",
    github: "https://github.com/crepin7/booking_api",
  },
  {
    name: "pdf-generator-api",
    description: {
      fr: "API de generation de PDF a partir de templates HTML. Microservice leger et rapide.",
      en: "PDF generation API from HTML templates. Lightweight and fast microservice.",
    },
    tags: ["API", "Python", "PDF"],
    category: "tools",
    github: "https://github.com/crepin7/pdf-generator-api",
  },
  {
    name: "telegram-greet",
    description: {
      fr: "Bot Telegram deploye sur Appwrite (serverless). Commandes /ping, /help, /echo.",
      en: "Telegram bot deployed on Appwrite (serverless). Commands /ping, /help, /echo.",
    },
    tags: ["Telegram", "Bot", "Serverless"],
    category: "tools",
    github: "https://github.com/crepin7/telegram-greet",
  },
  {
    name: "lenovo-navbar",
    description: {
      fr: "Composant de navigation. Reutilisable, responsive et configurable.",
      en: "Navigation bar component. Reusable, responsive and configurable.",
    },
    tags: ["React", "Component", "UI"],
    category: "tools",
    github: "https://github.com/crepin7/lenovo-navbar",
  },
  {
    name: "Pokemon-Game",
    description: {
      fr: "Jeu Pokemon en navigateur. Combat tour par tour, interface retro et animations.",
      en: "Browser-based Pokemon game. Turn-based combat, retro interface and animations.",
    },
    tags: ["Game", "JavaScript", "Fun"],
    category: "web",
    github: "https://github.com/crepin7/Pokemon-Game",
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const t = copy[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filtered = projects.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-accent text-sm">02.</span>
          <span className="font-mono text-sm text-muted uppercase tracking-widest">{t.sectionLabel}</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted max-w-xl mb-10 text-base"
        >
          {t.intro}
        </motion.p>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 font-mono text-xs rounded-md transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-accent text-background"
                  : "text-muted surface surface-hover"
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group p-5 surface rounded-lg surface-hover flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-muted font-mono text-sm">~/</span>
                  <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                    aria-label={`${t.viewSource}: ${project.name}`}
                  >
                    <Github size={15} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                      aria-label={`${t.liveDemo}: ${project.name}`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                {project.description[language]}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 font-mono text-[10px] text-muted bg-surface-2 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="https://github.com/crepin7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors link-underline"
          >
            <Github size={16} />
            {t.viewPlus}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
