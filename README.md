# Portfolio — Crepin AZIAMADJI

> Portfolio personnel. Theme sombre, typographie soignée, animations discretes.

[https://crepin-aziamadji.vercel.app](https://crepin-aziamadji.vercel.app)

---

## Apercu

Site one-page presentant mon profil d'ingenieur logiciel : parcours, projets et contact. Bilingue francais/anglais, entierement responsive, compile en statique via Next.js 16.

## Stack

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 16 — App Router, SSG |
| UI | React 19, Tailwind CSS v4 |
| Animations | Framer Motion |
| Langage | TypeScript strict |
| Icenes | Lucide React |
| Deploiement | Vercel |

## Structure

```
app/
├── api/contact/route.ts    # Endpoint email (Resend)
├── components/
│   ├── About.tsx           # Parcours + stats + stack
│   ├── Contact.tsx         # Formulaire + infos
│   ├── Footer.tsx          # Liens sociaux + copyright
│   ├── Hero.tsx            # Terminal-style intro
│   ├── LanguageToggle.tsx  # FR/EN switch
│   ├── Navigation.tsx      # Header fixe + mobile menu
│   └── Projects.tsx        # Grille de projets filtables
├── i18n/
│   └── LanguageProvider.tsx  # Contexte FR/EN + localStorage
├── globals.css             # Thème dark, variables, utilitaires
├── layout.tsx              # Root layout + metadata SEO
└── page.tsx                # Assemblage des sections
```

## Installation

```bash
gh repo clone crepin7/my-portfolio
cd my-portfolio
npm install
npm run dev
```

Application sur [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de developpement |
| `npm run build` | Build production |
| `npm run start` | Serveur production |
| `npm run lint` | Verification ESLint |

## Deploiement

Connecter le repo a Vercel suffit. Le build est `next build`, le output est automatiquement detecte. Aucune variable d'environnement requise pour le frontend. Le formulaire de contact utilise Resend (`RESEND_API_KEY`, `CONTACT_TO_EMAIL` en option).

---

**Crepin AZIAMADJI** — ingenieur logiciel

- GitHub : [@crepin7](https://github.com/crepin7)
- LinkedIn : [crepin-aziamadji](https://www.linkedin.com/in/cr%C3%A9pin-aziamadji-8a1b722b0/)
