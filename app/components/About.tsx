"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

const copy = {
  fr: {
    sectionLabel: "a propos",
    title: "parcours",
    paragraphs: [
      "Ingenieur logiciel de formation, je travaille principalement sous Linux (Ubuntu) et j'utilise Git et GitHub de maniere avancee — gestion de branches, organisations, collaboration.",
      "Je developpe et maintiens des projets personnels et collectifs, souvent heberges au sein d'organisations GitHub. J'attache une attention particuliere a la structure du code, a la documentation et a la reproductibilite des environnements.",
      "Je m'interesse activement a l'intelligence artificielle : agents IA, automatisation, generation de contenus techniques, amelioration de la productivite des developpeurs.",
    ],
    stackLabel: "stack principale",
    focusLabel: "centres d'interet",
    focusItems: [
      "Agents IA & automatisation",
      "Architecture scalable",
      "Developpement full stack",
      "Outils developpeur",
    ],
    stats: [
      { number: "29+", label: "repos GitHub" },
      { number: "6", label: "repos publics" },
      { number: "1", label: "agent personnel (OWL)" },
    ],
  },
  en: {
    sectionLabel: "about",
    title: "background",
    paragraphs: [
      "Trained as a software engineer, I primarily work on Linux (Ubuntu) and use Git and GitHub at an advanced level — branch management, organizations, collaboration.",
      "I build and maintain personal and collaborative projects, often hosted inside GitHub organizations. I pay close attention to code structure, documentation, and environment reproducibility.",
      "I have a strong interest in artificial intelligence: AI agents, automation, technical content generation, improving developer productivity.",
    ],
    stackLabel: "core stack",
    focusLabel: "focus areas",
    focusItems: [
      "AI agents & automation",
      "Scalable architecture",
      "Full stack development",
      "Developer tooling",
    ],
    stats: [
      { number: "29+", label: "GitHub repos" },
      { number: "6", label: "public repos" },
      { number: "1", label: "personal agent (OWL)" },
    ],
  },
};

const stack = ["TypeScript", "React", "Next.js", "Python", "FastAPI", "PostgreSQL", "Linux", "Git"];

export default function About() {
  const { language } = useLanguage();
  const t = copy[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-accent text-sm">01.</span>
          <span className="font-mono text-sm text-muted uppercase tracking-widest">{t.sectionLabel}</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: text */}
          <div className="lg:col-span-3 space-y-5">
            {t.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="text-muted leading-relaxed text-base"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Right: stats + focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Stats */}
            <div className="space-y-3">
              {t.stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-foreground">{stat.number}</span>
                  <span className="text-sm text-muted font-mono">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Focus areas */}
            <div>
              <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4">{t.focusLabel}</h4>
              <ul className="space-y-2">
                {t.focusItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <span className="text-accent text-xs">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-6">{t.stackLabel}</h4>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 font-mono text-xs text-muted surface rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
