"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/crepin7" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/" },
  { name: "Email", icon: Mail, href: "mailto:aziamadjicrepin@gmail.com" },
];

const copy = {
  fr: {
    sectionLabel: "contact",
    title: "Ecrivez-moi",
    intro: "Un projet, une question, une opportunite ? Je reponds generalement sous 24h.",
    labels: { name: "Nom", email: "Email", message: "Message" },
    placeholders: { name: "Votre nom", email: "votre@email.com", message: "Votre message..." },
    submit: "Envoyer",
    sending: "Envoi...",
    sent: "Envoye !",
    contactEmail: "Email",
    emailValue: "aziamadjicrepin@gmail.com",
  },
  en: {
    sectionLabel: "contact",
    title: "Get in touch",
    intro: "A project, a question, an opportunity? I usually reply within 24h.",
    labels: { name: "Name", email: "Email", message: "Message" },
    placeholders: { name: "Your name", email: "your@email.com", message: "Your message..." },
    submit: "Send",
    sending: "Sending...",
    sent: "Sent!",
    contactEmail: "Email",
    emailValue: "aziamadjicrepin@gmail.com",
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const t = copy[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setSubmitError(language === "fr" ? "Remplissez tous les champs." : "Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Request failed.");
      }

      form.reset();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Unknown error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-accent text-sm">03.</span>
          <span className="font-mono text-sm text-muted uppercase tracking-widest">{t.sectionLabel}</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted max-w-lg mb-12 text-base"
        >
          {t.intro}
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                    {t.labels.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted-2 focus:outline-none focus:border-accent transition-colors text-sm"
                    placeholder={t.placeholders.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                    {t.labels.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted-2 focus:outline-none focus:border-accent transition-colors text-sm"
                    placeholder={t.placeholders.email}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                  {t.labels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted-2 focus:outline-none focus:border-accent transition-colors resize-none text-sm"
                  placeholder={t.placeholders.message}
                />
              </div>

              {submitError && <p className="text-sm text-error font-mono">{submitError}</p>}

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`flex items-center gap-2 px-6 py-3 font-mono text-sm rounded-lg transition-all duration-200 ${
                  isSubmitted
                    ? "bg-success text-background"
                    : "bg-accent text-background hover:brightness-110"
                } disabled:opacity-60`}
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin" size={16} /> {t.sending}</>
                ) : isSubmitted ? (
                  t.sent
                ) : (
                  <><Send size={16} /> {t.submit}</>
                )}
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Direct email */}
            <div className="p-5 surface rounded-lg">
              <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-3">{t.contactEmail}</h4>
              <a
                href={`mailto:${t.emailValue}`}
                className="text-sm font-mono text-foreground hover:text-accent transition-colors break-all"
              >
                {t.emailValue}
              </a>
            </div>

            {/* Social links */}
            <div className="p-5 surface rounded-lg">
              <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Social</h4>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-mono text-muted hover:text-accent transition-colors"
                  >
                    <link.icon size={16} />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 p-4 bg-accent-glow rounded-lg border border-accent/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-xs font-mono text-muted">
                {language === "fr" ? "Actuellement disponible" : "Currently available"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
