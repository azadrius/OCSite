
# OC One‑Page Next.js

Site vitrine Next.js (pages router) avec Tailwind CSS, carrousel, SEO basique et **formulaire de contact fonctionnel** (envoi via `/api/contact` + anti‑spam).

## Démarrer en local

```bash
npm install
npm run dev
# -> http://localhost:3000
```

## Déploiement (Vercel recommandé)

1. Pousser ce dossier sur GitHub.
2. Créer un projet sur https://vercel.com et importer le repo.
3. Ajouter les variables d’environnement (Project Settings > Environment Variables) :

- `SMTP_HOST`
- `SMTP_PORT` (ex. 587)
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO` (adresse de réception)

4. Déployer.

## Personnalisation

- Remplacer `/public/logo.svg` par votre logo.
- Éditer `pages/index.js` → objet `DATA` pour textes, offres, gestions, etc.
- Les composants UI minimalistes se trouvent dans `components/ui` (Card, Button).
