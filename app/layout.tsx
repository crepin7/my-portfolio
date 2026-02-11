import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "./i18n/LanguageProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crépin AZIAMADJI | Développeur Full Stack & IA",
  description: "Portfolio d'un développeur passionné spécialisé en web, logiciels et intelligence artificielle. Découvrez mes projets et compétences.",
  keywords: ["développeur", "full stack", "IA", "web", "react", "nextjs", "typescript"],
  authors: [{ name: "Crépin AZIAMADJI" }],
  openGraph: {
    title: "Crépin AZIAMADJI | Développeur Full Stack & IA",
    description: "Portfolio d'un développeur passionné spécialisé en web, logiciels et intelligence artificielle.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem("theme");
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;
                  document.documentElement.classList.toggle("dark", shouldUseDark);
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white transition-colors`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
