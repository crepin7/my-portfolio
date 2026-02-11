"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 82 },
      { name: "Redis", level: 78 },
    ],
  },
  {
    name: "IA & Data",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "OpenAI API", level: 88 },
      { name: "LangChain", level: 85 },
      { name: "Pandas/NumPy", level: 82 },
    ],
  },
  {
    name: "DevOps & Outils",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 78 },
      { name: "AWS", level: 82 },
      { name: "CI/CD", level: 85 },
      { name: "Git/GitHub", level: 95 },
    ],
  },
];

const technologies = [
  "JavaScript", "TypeScript", "Python", "Go", "Rust",
  "React", "Next.js", "Vue.js", "Node.js", "Express",
  "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis",
  "Docker", "Kubernetes", "AWS", "GCP", "Vercel",
  "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Pandas",
  "Git", "GitHub", "GitLab", "Figma", "Linux",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-20 sm:py-28 bg-black">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Compétences
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ma stack technique
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Un ensemble de technologies modernes que j'utilise pour construire des applications 
            performantes et évolutives.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-zinc-300">{skill.name}</span>
                      <span className="text-xs text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            Technologies & Outils
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.02 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(139, 92, 246, 0.2)",
                  borderColor: "rgba(139, 92, 246, 0.5)"
                }}
                className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm 
                         hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Apprentissage continu
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
            La technologie évolue constamment et j'apprends chaque jour. 
            Actuellement, je me concentre sur :
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["WebAssembly", "Edge Computing", "Vector Databases", "Multi-Agent Systems"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 
                         text-violet-300 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
