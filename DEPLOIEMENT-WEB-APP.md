# Mettre Bko Eats en vrai site HTTPS puis en application

## 1. Site web HTTPS avec Vercel

### A. Sauvegarder le code sur GitHub

1. Cree un compte GitHub si besoin.
2. Cree un nouveau repository, par exemple `bko-eats`.
3. Envoie tous les fichiers du projet dans ce repository.

### B. Deployer sur Vercel

1. Va sur https://vercel.com.
2. Connecte-toi avec GitHub.
3. Clique sur `Add New...` puis `Project`.
4. Choisis le repository `bko-eats`.
5. Framework Preset : `Other`.
6. Build Command : laisse vide.
7. Output Directory : laisse vide.
8. Clique sur `Deploy`.

Vercel donnera automatiquement un lien HTTPS du type :

```text
https://bko-eats.vercel.app
```

### C. Ajouter le domaine dans Firebase

Pour que Google Login fonctionne sur le vrai site :

1. Firebase Console.
2. Authentication.
3. Settings.
4. Authorized domains.
5. Ajoute ton domaine Vercel, par exemple :

```text
bko-eats.vercel.app
```

Si tu achetes un vrai domaine, ajoute aussi ce domaine, par exemple :

```text
bko-eats.com
www.bko-eats.com
```

## 2. Ajouter un vrai nom de domaine

Dans Vercel :

1. Ouvre ton projet Bko Eats.
2. Settings.
3. Domains.
4. Ajoute ton domaine.
5. Suis les instructions DNS donnees par Vercel.

Quand le DNS est valide, Vercel active HTTPS automatiquement.

## 3. Application mobile rapide : PWA installable

Ton projet contient deja `manifest.json` et `sw.js`, donc il peut etre installe comme une application web.

Sur Android :

1. Ouvre le site HTTPS dans Chrome.
2. Menu avec les trois points.
3. `Ajouter a l'ecran d'accueil`.

Sur iPhone :

1. Ouvre le site HTTPS dans Safari.
2. Bouton partager.
3. `Sur l'ecran d'accueil`.

Avantage : rapide, pas besoin de Play Store/App Store.

## 4. Vraie application Play Store / App Store avec Expo

Pour une vraie application native :

1. Creer un projet Expo.
2. Reprendre l'interface Bko Eats dedans.
3. Garder Firebase pour les comptes, commandes, restaurants, admin.
4. Construire l'app avec EAS Build.
5. Publier sur Google Play Console et Apple Developer.

Commandes principales :

```bash
npm install -g eas-cli
eas login
npx eas-cli@latest init
npx eas-cli@latest build -p android --profile production
npx eas-cli@latest build -p ios --profile production
```

Pour publier :

```bash
npx eas-cli@latest submit -p android
npx eas-cli@latest submit -p ios
```

## 5. Ce qu'il faut avant les paiements reels

Avant Orange Money ou carte bancaire en production :

1. Site HTTPS public.
2. Backend securise sur Vercel ou Render.
3. Variables secretes dans Vercel/Render, jamais dans `app.js`.
4. Firebase rules publiees.
5. Callback paiement qui confirme la commande cote serveur.
6. Repartition automatique 80% restaurant / 20% admin apres paiement confirme.
