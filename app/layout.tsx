import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "./i18n/LanguageProvider";
import SEO from "./components/SEO";
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
  title: {
    default: "Crépin AZIAMADJI | Développeur Full Stack & IA",
    template: "%s | Crépin AZIAMADJI",
  },
  description: "Portfolio d'un développeur passionné spécialisé en web, logiciels et intelligence artificielle. Découvrez mes projets et compétences en React, Next.js, Python, et IA.",
  keywords: ["développeur", "full stack", "IA", "web", "react", "nextjs", "typescript", "python", "Flutter", "machine learning"],
  authors: [{ name: "Crépin AZIAMADJI" }],
  creator: "Crépin AZIAMADJI",
  publisher: "Crépin AZIAMADJI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: "https://crepin.dev",
    siteName: "Crépin AZIAMADJI",
    title: "Crépin AZIAMADJI | Développeur Full Stack & IA",
    description: "Portfolio d'un développeur passionné spécialisé en web, logiciels et intelligence artificielle.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Crépin AZIAMADJI - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crépin AZIAMADJI | Développeur Full Stack & IA",
    description: "Portfolio d'un développeur passionné spécialisé en web, logiciels et intelligence artificielle.",
    images: ["/og-image.svg"],
    creator: "@crepinote",
  },
  verification: {
    google: "google-site-verification-code",
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Crépin AZIAMADJI",
              url: "https://crepin.dev",
              jobTitle: "Développeur Full Stack & IA",
              description: "Développeur passionné spécialisé en web, logiciels et intelligence artificielle",
              sameAs: [
                "https://github.com/crepin7",
                "https://linkedin.com/in/crépin-aziamadji-8a1b722b0",
                "https://x.com/crepinote"
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "Machine Learning",
                "Flutter"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white transition-colors`}
      >
        <LanguageProvider>
          <SEO />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
