import type { Metadata, Viewport } from "next";
import Script from 'next/script';
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
  title: "Crepin AZIAMADJI — Software Engineer",
  description: "Ingenieur logiciel. Linux, automatisation, IA, full stack. Portfolio de Crepin AZIAMADJI.",
  keywords: ["developpeur", "ingenieur logiciel", "linux", "full stack", "typescript", "python", "automatisation", "IA"],
  authors: [{ name: "Crepin AZIAMADJI" }],
  openGraph: {
    title: "Crepin AZIAMADJI — Software Engineer",
    description: "Ingenieur logiciel. Linux, automatisation, IA, full stack.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2200633323957306" />
	<Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2200633323957306"
          crossOrigin="anonymous"
          strategy="afterInteractive"
      />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
