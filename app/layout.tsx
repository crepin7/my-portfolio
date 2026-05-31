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
  title: "Crepin AZIAMADJI — Software Engineer",
  description: "Ingenieur logiciel. Linux, automatisation, IA,_FULL stack. Portfolio de Crepin AZIAMADJI.",
  keywords: ["developpeur", "ingenieur logiciel", "linux", "full stack", "typescript", "python", "automatisation", "IA"],
  authors: [{ name: "Crepin AZIAMADJI" }],
  openGraph: {
    title: "Crepin AZIAMADJI — Software Engineer",
    description: "Ingenieur logiciel. Linux, automatisation, IA, full stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
