"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, Globe, Terminal, Cpu } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Développement Web",
    description: "Applications React/Next.js modernes avec TypeScript, performances optimisées et SEO.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "APIs RESTful et GraphQL avec Node.js, Python, bases de données SQL/NoSQL.",
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Intégration de modèles ML, agents IA, NLP et computer vision.",
  },
  {
    icon: Globe,
    title: "DevOps & Cloud",
    description: "Déploiement CI/CD, Docker, Kubernetes, AWS/GCP/Azure.",
  },
  {
    icon: Terminal,
    title: "Open Source",
    description: "Contributeur actif, gestion avancée Git/GitHub, code review.",
  },
  {
    icon: Cpu,
    title: "Architecture",
    description: "Conception d'architectures scalables, microservices, clean code.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            À propos de moi
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Développeur passionné par l'innovation
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Je suis un développeur polyvalent orienté web, logiciels et intelligence artificielle, 
            avec une forte culture open-source et une pratique quotidienne des outils modernes de développement.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Mon parcours
              </h3>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Je travaille principalement sous <strong className="text-white">Linux (Ubuntu)</strong> et j'utilise 
                  <strong className="text-white"> Git et GitHub</strong> de manière avancée (gestion de branches, 
                  organisations, visibilité des projets, collaboration).
                </p>
                <p>
                  Je développe et maintiens des projets personnels et collectifs, souvent hébergés au sein 
                  d'<strong className="text-white">organisations GitHub</strong>, avec une attention particulière 
                  à la structure, à la propreté du code et à la documentation.
                </p>
                <p>
                  Je m'intéresse activement à l'<strong className="text-white">intelligence artificielle</strong>, 
                  notamment aux agents IA, à l'automatisation et à l'utilisation de l'IA pour générer des 
                  contenus techniques, améliorer la productivité des développeurs, et concevoir des outils 
                  intelligents utiles au quotidien.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Objectifs
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Mon objectif est de construire des projets <strong className="text-white">utiles, évolutifs et bien structurés</strong>, 
                tout en développant une identité technique forte à travers mes organisations et mon portfolio.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "5+", label: "Années d'expérience" },
              { number: "50+", label: "Projets réalisés" },
              { number: "20+", label: "Contributions Open Source" },
              { number: "15+", label: "Technologies maîtrisées" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass rounded-2xl p-6 transition-all duration-300 hover:bg-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
