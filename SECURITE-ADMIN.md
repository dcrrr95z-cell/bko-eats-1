# Securiser l'admin Bko Eats

L'interface admin n'utilise plus de mot de passe ecrit dans le code. Elle passe par Firebase Authentication et verifie le role `admin` dans Firestore.

## 1. Creer ton compte admin

Dans Firebase Console :

1. Va dans Authentication.
2. Cree un utilisateur avec ton email et un mot de passe fort.
3. Copie le `uid` de cet utilisateur.

## 2. Ajouter le role admin

Dans Firestore Database, cree ou modifie :

```txt
users/{TON_UID}
```

Avec ces champs :

```json
{
  "uid": "TON_UID",
  "email": "ton-email-admin@example.com",
  "name": "Admin Bko Eats",
  "role": "admin",
  "restaurantId": ""
}
```

## 3. Publier les regles

Copie le contenu de `firestore.rules` dans Firebase Console > Firestore Database > Rules, puis publie.

## 4. Ouvrir l'admin

Lien local :

```txt
http://127.0.0.1:4173/index.html?admin=1&design=38
```

Lien mobile sur le meme Wi-Fi :

```txt
http://192.168.1.10:4173/index.html?admin=1&design=38
```

Connecte-toi avec l'email et le mot de passe du compte Firebase admin.
