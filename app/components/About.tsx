"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, Globe, Terminal, Cpu } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const featureIcons = [Code2, Database, Brain, Globe, Terminal, Cpu];

const copy = {
  fr: {
    badge: "A propos de moi",
    title: "Developpeur passionne par l'innovation",
    intro:
      "Je suis un developpeur polyvalent oriente web, mobile, logiciels et intelligence artificielle, avec une pratique quotidienne des outils modernes de developpement.",
    journeyTitle: "Mon parcours",
    journeyParagraphs: [
      "Je travaille principalement sous Linux (Ubuntu) et j'utilise Git et GitHub de maniere avancee (gestion de branches, organisations, visibilite des projets, collaboration).",
      "Je developpe et maintiens des projets personnels et collectifs, souvent heberges au sein d'organisations GitHub, avec une attention particuliere a la structure, a la proprete du code et a la documentation.",
      "Je m'interesse activement a l'intelligence artificielle, notamment aux agents IA, a l'automatisation et a l'utilisation de l'IA pour generer des contenus techniques, ameliorer la productivite des developpeurs, et concevoir des outils intelligents utiles au quotidien.",
    ],
    goalsTitle: "Objectifs",
    goalsText:
      "Mon objectif est de construire des projets utiles, evolutifs et bien structures, tout en developpant une identite technique forte a travers mes organisations et mon portfolio.",
    stats: [
      { number: "3+", label: "Annees d'experience" },
      { number: "27", label: "Projets realises" },
      { number: "7", label: "Technologies favorites" },
    ],
    features: [
      {
        title: "Developpement Web",
        description: "Applications React/Next.js modernes avec TypeScript, performances optimisees et SEO.",
      },
      {
        title: "Backend & APIs",
        description: "APIs RESTful et GraphQL avec Node.js, Python, bases de donnees SQL/NoSQL.",
      },
      {
        title: "Intelligence Artificielle",
        description: "Integration de modeles ML, agents IA, NLP et computer vision.",
      },
      {
        title: "DevOps & Cloud",
        description: "Deploiement CI/CD, Docker, Kubernetes, AWS/GCP/Azure.",
      },
      {
        title: "Developpement Mobile",
        description: "Conception d'applications mobiles performantes avec Flutter.",
      },
      {
        title: "Architecture",
        description: "Conception d'architectures scalables, microservices, clean code.",
      },
    ],
  },
  en: {
    badge: "About me",
    title: "A developer passionate about innovation",
    intro:
      "I am a versatile developer focused on web, mobile, software, and artificial intelligence, with daily practice of modern development tools.",
    journeyTitle: "My journey",
    journeyParagraphs: [
      "I mainly work on Linux (Ubuntu) and I use Git and GitHub at an advanced level (branch management, organizations, project visibility, collaboration).",
      "I build and maintain personal and collaborative projects, often hosted inside GitHub organizations, with close attention to structure, code quality, and documentation.",
      "I am deeply interested in artificial intelligence, especially AI agents, automation, and using AI to generate technical content, improve developer productivity, and design useful intelligent tools.",
    ],
    goalsTitle: "Goals",
    goalsText:
      "My goal is to build useful, scalable, and well-structured projects while developing a strong technical identity through my organizations and portfolio.",
    stats: [
      { number: "3+", label: "Years of experience" },
      { number: "27", label: "Completed projects" },
      { number: "7", label: "Favorite technologies" },
    ],
    features: [
      {
        title: "Web Development",
        description: "Modern React/Next.js applications with TypeScript, optimized performance, and SEO.",
      },
      {
        title: "Backend & APIs",
        description: "RESTful and GraphQL APIs with Node.js, Python, SQL/NoSQL databases.",
      },
      {
        title: "Artificial Intelligence",
        description: "ML model integration, AI agents, NLP, and computer vision.",
      },
      {
        title: "DevOps & Cloud",
        description: "CI/CD deployment, Docker, Kubernetes, AWS/GCP/Azure.",
      },
      {
        title: "Mobile Development",
        description: "Building high-performance mobile applications with Flutter.",
      },
      {
        title: "Architecture",
        description: "Scalable architecture design, microservices, and clean code.",
      },
    ],
  },
};

export default function About() {
  const { language } = useLanguage();
  const t = copy[language];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">{t.intro}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">{t.journeyTitle}</h3>
              <div className="space-y-4 text-zinc-700 dark:text-zinc-400 leading-relaxed">
                {t.journeyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">{t.goalsTitle}</h3>
              <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">{t.goalsText}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {t.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((feature, index) => {
            const Icon = featureIcons[index];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glass rounded-2xl p-6 transition-all duration-300 hover:bg-zinc-900/10 dark:hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
