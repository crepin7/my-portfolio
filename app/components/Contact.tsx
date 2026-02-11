"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, Github, Linkedin, Twitter, Loader2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/crepin7" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/" },
  { name: "X", icon: Twitter, href: "https://x.com/crepinote" },
];

const copy = {
  fr: {
    badge: "Contact",
    title: "Travaillons ensemble",
    intro:
      "Vous avez un projet en tete ? N'hesitez pas a me contacter. Je suis toujours ouvert aux nouvelles opportunites et collaborations.",
    labels: {
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
    },
    placeholders: {
      name: "Votre nom",
      email: "votre@email.com",
      subject: "Sujet de votre message",
      message: "Decrivez votre projet...",
    },
    submitIdle: "Envoyer le message",
    submitLoading: "Envoi en cours...",
    submitDone: "Message envoye !",
    info: [
      { icon: Mail, label: "Email", value: "aziamadjicrepin@gmail.com", href: "mailto:aziamadjicrepin@gmail.com" },
      { icon: Github, label: "GitHub", value: "github.com/crepin7", href: "https://github.com/crepin7" },
      { icon: Linkedin, label: "LinkedIn", value: "crepin-aziamadji", href: "https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/" },
      { icon: Twitter, label: "X", value: "x.com/crepinote", href: "https://x.com/crepinote" },
    ],
    socialsTitle: "Reseaux sociaux",
    availabilityTitle: "Disponible",
    availabilityText:
      "Je suis actuellement disponible pour des projets freelance et des collaborations. N'hesitez pas a me contacter pour discuter de vos idees.",
    quickResponseTitle: "Reponse rapide garantie",
    quickResponseText: "Je reponds generalement sous 24 heures aux emails et messages.",
  },
  en: {
    badge: "Contact",
    title: "Let's work together",
    intro:
      "Do you have a project in mind? Feel free to contact me. I am always open to new opportunities and collaborations.",
    labels: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
    placeholders: {
      name: "Your name",
      email: "your@email.com",
      subject: "Message subject",
      message: "Describe your project...",
    },
    submitIdle: "Send message",
    submitLoading: "Sending...",
    submitDone: "Message sent!",
    info: [
      { icon: Mail, label: "Email", value: "aziamadjicrepin@gmail.com", href: "mailto:aziamadjicrepin@gmail.com" },
      { icon: Github, label: "GitHub", value: "github.com/crepin7", href: "https://github.com/crepin7" },
      { icon: Linkedin, label: "LinkedIn", value: "crepin-aziamadji", href: "https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/" },
      { icon: Twitter, label: "X", value: "x.com/crepinote", href: "https://x.com/crepinote" },
    ],
    socialsTitle: "Social networks",
    availabilityTitle: "Available",
    availabilityText:
      "I am currently available for freelance projects and collaborations. Feel free to contact me to discuss your ideas.",
    quickResponseTitle: "Fast response guaranteed",
    quickResponseText: "I usually reply to emails and messages within 24 hours.",
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const t = copy[language];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      setSubmitError(language === "fr" ? "Veuillez remplir tous les champs." : "Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError(
        language === "fr"
          ? "Configuration EmailJS manquante (service/template/public key)."
          : "Missing EmailJS configuration (service/template/public key).",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            name: payload.name,
            email: payload.email,
            from_name: payload.name,
            from_email: payload.email,
            subject: payload.subject,
            message: payload.message,
            to_email: payload.email,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      e.currentTarget.reset();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch {
      setSubmitError(language === "fr" ? "Echec de l'envoi. Reessaie dans un instant." : "Sending failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-zinc-50 dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-200/50 via-zinc-50 to-zinc-50 dark:from-violet-900/10 dark:via-black dark:to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">{t.intro}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t.labels.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder={t.placeholders.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t.labels.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder={t.placeholders.email}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  {t.labels.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder={t.placeholders.subject}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  {t.labels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder={t.placeholders.message}
                />
              </div>

              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              {submitError ? <p className="text-sm text-red-400">{submitError}</p> : null}

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-700 dark:hover:bg-zinc-200"
                }`}
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    {t.submitLoading}
                  </>
                ) : isSubmitted ? (
                  <>{t.submitDone}</>
                ) : (
                  <>
                    <Send size={20} />
                    {t.submitIdle}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {t.info.map((item, index) => (
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
                    <p className="text-sm text-zinc-600 dark:text-zinc-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-zinc-900 dark:text-white hover:text-violet-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-zinc-900 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">{t.socialsTitle}</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-violet-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-medium">{t.availabilityTitle}</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">{t.availabilityText}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="rounded-2xl p-6 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20"
            >
              <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                <span className="text-zinc-900 dark:text-white font-medium">{t.quickResponseTitle}</span> - {t.quickResponseText}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
