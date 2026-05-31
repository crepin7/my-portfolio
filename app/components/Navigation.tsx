"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../i18n/LanguageProvider";

const navItemHrefs = ["#hero", "#about", "#projects", "#contact"];

const copy = {
  fr: {
    navItems: ["Accueil", "A propos", "Projets", "Contact"],
    brand: "<CA />",
  },
  en: {
    navItems: ["Home", "About", "Projects", "Contact"],
    brand: "<CA />",
  },
};

export default function Navigation() {
  const { language } = useLanguage();
  const t = copy[language];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 bg-background/90 backdrop-blur-md border-b border-border" : "py-5"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            className="font-mono text-sm font-semibold text-foreground hover:text-accent transition-colors"
          >
            {t.brand}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItemHrefs.map((href, i) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                className="text-xs font-mono text-muted uppercase tracking-widest hover:text-accent transition-colors link-underline"
              >
                <span className="text-accent mr-1 text-[10px]">{i + 1}.</span>
                {t.navItems[i]}
              </a>
            ))}
            <div className="h-4 w-px bg-border" />
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItemHrefs.map((href, i) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                className="font-mono text-lg text-muted hover:text-accent transition-colors"
              >
                <span className="text-accent mr-2 text-sm">{i + 1}.</span>
                {t.navItems[i]}
              </a>
            ))}
            <div className="flex items-center gap-4 mt-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
