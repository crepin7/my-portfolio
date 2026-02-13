# Portfolio — Crépin Aziamadji

Portfolio personnel développé avec **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4** et **Framer Motion**.

## Aperçu

Ce projet présente mon profil de développeur Full Stack orienté web et intelligence artificielle, avec une interface moderne, animée et responsive.

### Fonctionnalités

- Interface **bilingue** : français / anglais.
- **Mode clair / sombre** avec persistance en local.
- Navigation fluide par sections (scroll smooth).
- Sections dédiées : Hero, À propos, Compétences, Projets, Contact.
- Animations UI avec Framer Motion.
- Design responsive (mobile, tablette, desktop).

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **UI** : React 19, Tailwind CSS v4
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Langage** : TypeScript
- **Linting** : ESLint

## Structure du projet

```txt
app/
  components/
    About.tsx
    Contact.tsx
    Footer.tsx
    Hero.tsx
    LanguageToggle.tsx
    Navigation.tsx
    Particles.tsx
    Projects.tsx
    Skills.tsx
    ThemeToggle.tsx
  i18n/
    LanguageProvider.tsx
  globals.css
  layout.tsx
  page.tsx
```

## Installation

### Prérequis

- Node.js 20+
- npm (ou yarn / pnpm / bun)

### Étapes

```bash
git clone <url-du-repo>
cd my-portfolio
npm install
```

## Lancer le projet

```bash
npm run dev
```

Application disponible sur : [http://localhost:3000](http://localhost:3000)

## Scripts utiles

```bash
npm run dev     # Démarrage en développement
npm run build   # Build de production
npm run start   # Lancement du build
npm run lint    # Vérification ESLint
```

## Déploiement

Le projet est prêt à être déployé sur **Vercel** (recommandé), mais fonctionne aussi sur toute plateforme compatible Node.js.

## Auteur

**Crépin AZIAMADJI**

- GitHub : [@crepin7](https://github.com/crepin7)
- LinkedIn : [Crépin Aziamadji](https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/)
- X : [@crepinote](https://x.com/crepinote)
