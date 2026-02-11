"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Content Generator",
    description: "Plateforme de génération de contenu utilisant GPT-4 et DALL-E pour créer des articles, images et code automatiquement.",
    image: "/project1.jpg",
    tags: ["Next.js", "OpenAI", "TypeScript", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Analytics",
    description: "Dashboard d'analytics en temps réel pour e-commerce avec visualisations de données et prédictions de ventes.",
    image: "/project2.jpg",
    tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management AI",
    description: "Application de gestion de tâches avec agent IA qui priorise et suggère des optimisations de workflow.",
    image: "/project3.jpg",
    tags: ["Node.js", "LangChain", "MongoDB", "Vue.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 4,
    title: "DevOps Automation",
    description: "Outil d'automatisation CI/CD avec interface visuelle pour configurer des pipelines de déploiement.",
    image: "/project4.jpg",
    tags: ["Go", "Docker", "Kubernetes", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 5,
    title: "Real-time Chat",
    description: "Application de messagerie temps réel avec WebSocket, chiffrement end-to-end et support de fichiers.",
    image: "/project5.jpg",
    tags: ["Socket.io", "Express", "Redis", "React Native"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 6,
    title: "Code Review AI",
    description: "Assistant de code review utilisant l'IA pour détecter les bugs, suggérer des améliorations et vérifier la qualité.",
    image: "/project6.jpg",
    tags: ["Python", "GitHub API", "FastAPI", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
];

const categories = ["Tous", "Featured", "Web", "IA", "Mobile"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "Tous") return true;
    if (activeCategory === "Featured") return project.featured;
    if (activeCategory === "Web") return project.tags.includes("React") || project.tags.includes("Next.js") || project.tags.includes("Vue.js");
    if (activeCategory === "IA") return project.tags.includes("OpenAI") || project.tags.includes("TensorFlow") || project.tags.includes("LangChain");
    if (activeCategory === "Mobile") return project.tags.includes("React Native");
    return true;
  });

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Portfolio
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Mes projets
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Une sélection de projets qui démontrent mon expertise en développement web, 
            intelligence artificielle et solutions cloud.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "glass text-zinc-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
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
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-zinc-700 group-hover:text-violet-500/30 transition-colors duration-300">
                    {project.title.charAt(0)}
                  </span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs">
                    Featured
                  </div>
                )}
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-violet-400" size={24} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-white hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Voir plus sur GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
