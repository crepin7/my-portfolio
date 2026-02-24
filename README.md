# Portfolio — Crépin Aziamadji

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
</p>

---

Portfolio personnel développé avec **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4** et **Framer Motion**.

## 🚀 Aperçu

Ce projet présente mon profil de développeur Full Stack orienté web et intelligence artificielle, avec une interface moderne, animée et responsive.

![Portfolio Preview](https://crepin.dev/og-image.svg)

### ✨ Fonctionnalités

- ✅ Interface **bilingue** : français / anglais
- ✅ **Mode clair / sombre** avec persistance en local
- ✅ Navigation fluide par sections (scroll smooth)
- ✅ Sections dédiées : Hero, À propos, Compétences, Projets, Contact
- ✅ Animations UI avec Framer Motion
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ PWA (Progressive Web App)

## 🛠 Stack technique

| Catégorie | Technologies |
|-----------|--------------|
| **Frontend** | React 19, Next.js 16, TypeScript, Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icônes** | Lucide React |
| **SEO** | Metadata, Sitemap, Robots.txt, JSON-LD |
| **PWA** | Manifest, Service Worker |

## 📁 Structure du projet

```
my-portfolio/
├── app/
│   ├── components/
│   │   ├── About.tsx          # Section À propos
│   │   ├── Contact.tsx        # Formulaire de contact
│   │   ├── Footer.tsx         # Pied de page
│   │   ├── Hero.tsx           # Section Hero
│   │   ├── LanguageToggle.tsx # Basculeur de langue
│   │   ├── Navigation.tsx     # Navigation
│   │   ├── Particles.tsx      # Particules en arrière-plan
│   │   ├── Projects.tsx       # Projets
│   │   ├── Skills.tsx         # Compétences
│   │   ├── ThemeToggle.tsx    # Basculeur thème
│   │   └── SEO.tsx            # Optimisation SEO
│   ├── i18n/
│   │   └── LanguageProvider.tsx # Gestion i18n
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # API contact
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🚦 Installation

### Prérequis

- **Node.js** 20+
- **npm** (ou yarn / pnpm / bun)

### Étapes

```bash
# Cloner le dépôt
git clone https://github.com/crepin7/my-portfolio.git
cd my-portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

L'application est disponible sur : [http://localhost:3000](http://localhost:3000)

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarrer en mode développement |
| `npm run build` | Build de production |
| `npm run start` | Lancer le build de production |
| `npm run lint` | Vérification ESLint |

## 🌐 Déploiement

Le projet est prêt à être déployé sur **[Vercel](https://vercel.com)** (recommandé) — déploiement automatique depuis GitHub.

```bash
# Build de production
npm run build

# Prévisualiser le build
npm run start
```

### Déploiement manuel

```bash
# Build
npm run build

# Démarrer le serveur
npm run start
```

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env.local` si nécessaire :

```env
# Analytics (optionnel)
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# URL du site
NEXT_PUBLIC_SITE_URL=https://crepin.dev
```

## 📱 PWA

Ce portfolio est une PWA installable :

- Ajout à l'écran d'accueil
- Mode hors ligne (avec service worker)
- Thème cohérent avec le site

## SEO

Optimisations SEO incluses :

- ✅ Metadata complète (OpenGraph, Twitter Cards)
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ Données structurées JSON-LD (Schema.org Person)
- ✅ Images optimisées
- ✅ URLs canoniques

## 📄 Licence

Ce projet est privé — tous droits réservés.

---

## 👤 Auteur

<p align="center">
  <strong>Crépin AZIAMADJI</strong><br>
  Développeur Full Stack & IA
</p>

<p align="center">
  <a href="https://github.com/crepin7">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://linkedin.com/in/crépin-aziamadji-8a1b722b0">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://x.com/crepinote">
    <img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X">
  </a>
</p>

---

<p align="center">
  ⭐️ Star ce projet si tu l'aimes !
</p>
