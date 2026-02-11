"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageProvider";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "fr" ? "Switch to English" : "Passer en francais"}
      className="h-10 px-3 rounded-full border border-zinc-300/80 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-100 text-xs font-semibold tracking-wide backdrop-blur-md transition-colors"
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
    >
      {language === "fr" ? "FR" : "EN"}
    </motion.button>
  );
}
