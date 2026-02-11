"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alex@example.com",
    href: "mailto:alex@example.com",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Paris, France",
    href: null,
  },
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 via-black to-black" />
      
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
            Contact
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Travaillons ensemble
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter. 
            Je suis toujours ouvert aux nouvelles opportunités et collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Envoi en cours...
                  </>
                ) : isSubmitted ? (
                  <>
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass rounded-2xl p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <item.icon className="text-violet-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-violet-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Réseaux sociaux
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-medium">Disponible</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Je suis actuellement disponible pour des projets freelance et des collaborations. 
                N'hésitez pas à me contacter pour discuter de vos idées.
              </p>
            </motion.div>

            {/* Quick Response */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="rounded-2xl p-6 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20"
            >
              <p className="text-zinc-300 text-sm">
                <span className="text-white font-medium">Réponse rapide garantie</span> - 
                Je réponds généralement sous 24 heures aux emails et messages.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
