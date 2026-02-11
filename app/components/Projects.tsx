"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

type CategoryKey = "all" | "featured" | "web" | "ai" | "mobile";

const categories: { key: CategoryKey; label: { fr: string; en: string } }[] = [
  { key: "all", label: { fr: "Tous", en: "All" } },
  { key: "featured", label: { fr: "Featured", en: "Featured" } },
  { key: "web", label: { fr: "Web", en: "Web" } },
  { key: "ai", label: { fr: "IA", en: "AI" } },
  { key: "mobile", label: { fr: "Mobile", en: "Mobile" } },
];

const copy = {
  fr: {
    badge: "Portfolio",
    title: "Mes projets",
    intro: "Une selection de projets qui demontrent mon expertise en developpement web, intelligence artificielle et solutions cloud.",
    featuredBadge: "Featured",
    viewMore: "Voir plus sur GitHub",
    projects: [
      {
        id: 1,
        title: "AI Content Generator",
        description:
          "Plateforme de generation de contenu utilisant GPT-4 et DALL-E pour creer des articles, images et code automatiquement.",
        tags: ["Next.js", "OpenAI", "TypeScript", "Prisma"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 2,
        title: "E-Commerce Analytics",
        description:
          "Dashboard d'analytics en temps reel pour e-commerce avec visualisations de donnees et predictions de ventes.",
        tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 3,
        title: "Task Management AI",
        description:
          "Application de gestion de taches avec agent IA qui priorise et suggere des optimisations de workflow.",
        tags: ["Node.js", "LangChain", "MongoDB", "Vue.js"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 4,
        title: "DevOps Automation",
        description:
          "Outil d'automatisation CI/CD avec interface visuelle pour configurer des pipelines de deploiement.",
        tags: ["Go", "Docker", "Kubernetes", "React"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: false,
      },
      {
        id: 5,
        title: "Real-time Chat",
        description:
          "Application de messagerie temps reel avec WebSocket, chiffrement end-to-end et support de fichiers.",
        tags: ["Socket.io", "Express", "Redis", "React Native"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: false,
      },
      {
        id: 6,
        title: "Code Review AI",
        description:
          "Assistant de code review utilisant l'IA pour detecter les bugs, suggerer des ameliorations et verifier la qualite.",
        tags: ["Python", "GitHub API", "FastAPI", "React"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: false,
      },
    ],
  },
  en: {
    badge: "Portfolio",
    title: "My projects",
    intro: "A selection of projects that demonstrate my expertise in web development, artificial intelligence, and cloud solutions.",
    featuredBadge: "Featured",
    viewMore: "See more on GitHub",
    projects: [
      {
        id: 1,
        title: "AI Content Generator",
        description:
          "Content generation platform using GPT-4 and DALL-E to create articles, images, and code automatically.",
        tags: ["Next.js", "OpenAI", "TypeScript", "Prisma"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 2,
        title: "E-Commerce Analytics",
        description:
          "Real-time e-commerce analytics dashboard with data visualizations and sales forecasting.",
        tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 3,
        title: "Task Management AI",
        description:
          "Task management app with an AI agent that prioritizes tasks and suggests workflow optimizations.",
        tags: ["Node.js", "LangChain", "MongoDB", "Vue.js"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 4,
        title: "DevOps Automation",
        description:
          "CI/CD automation tool with a visual interface to configure deployment pipelines.",
        tags: ["Go", "Docker", "Kubernetes", "React"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: false,
      },
      {
        id: 5,
        title: "Real-time Chat",
        description:
          "Real-time messaging app with WebSocket, end-to-end encryption, and file support.",
        tags: ["Socket.io", "Express", "Redis", "React Native"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: false,
      },
      {
        id: 6,
        title: "Code Review AI",
        description:
          "AI-powered code review assistant that detects bugs, suggests improvements, and checks quality.",
        tags: ["Python", "GitHub API", "FastAPI", "React"],
        github: "https://github.com/crepin7",
        demo: "https://demo.com",
        featured: false,
      },
    ],
  },
};

export default function Projects() {
  const { language } = useLanguage();
  const t = copy[language];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredProjects = t.projects.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return project.featured;
    if (activeCategory === "web") return project.tags.includes("React") || project.tags.includes("Next.js") || project.tags.includes("Vue.js");
    if (activeCategory === "ai") return project.tags.includes("OpenAI") || project.tags.includes("TensorFlow") || project.tags.includes("LangChain");
    if (activeCategory === "mobile") return project.tags.includes("React Native");
    return true;
  });

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass text-sm text-violet-400 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            {t.badge}
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">{t.title}</h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">{t.intro}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
                  : "glass text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label[language]}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              <div className="relative h-48 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-zinc-500 dark:text-zinc-700 group-hover:text-violet-500/30 transition-colors duration-300">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/45 via-zinc-900/10 dark:from-black/80 dark:via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs">
                    {t.featuredBadge}
                  </div>
                )}

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-100/85 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center text-zinc-900 dark:text-white hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-100/85 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center text-zinc-900 dark:text-white hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-400 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-violet-400" size={24} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/crepin7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-zinc-900 dark:text-white hover:bg-zinc-900/10 dark:hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            {t.viewMore}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
