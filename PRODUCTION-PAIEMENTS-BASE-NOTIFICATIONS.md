# Bko Eats - production paiements, base et notifications

## Ce qui est maintenant en place dans le code

- Paiement carte par Stripe Checkout.
- Webhook Stripe avec verification de signature.
- Commande officielle creee uniquement apres `checkout.session.completed` avec `payment_status = paid`.
- Commandes separees par restaurant dans `orders`.
- Portefeuilles restaurants/admin mis a jour par le serveur.
- Notifications Firestore creees pour nouvelle commande et paiement confirme.
- Statuts restaurant securises via `/api/order-status`, avec notification client a chaque changement important.
- Regles Firestore strictes pour clients, restaurants et admin.
- Orange Money ne cree plus de commande tant que l'API Orange Money n'est pas configuree.
- Script de verification production : `verifier-bko-eats.cmd`.
- Script de remplissage Firebase : `seed-firestore-bko-eats.cmd`.

## Variables Vercel obligatoires

Dans Vercel > Project > Settings > Environment Variables :

```text
APP_URL=https://bko-eats-1.vercel.app
STRIPE_SECRET_KEY=sk_live_ou_sk_test
STRIPE_CURRENCY=xof
STRIPE_WEBHOOK_SECRET=whsec_...
FIREBASE_SERVICE_ACCOUNT_JSON={...}
```

Tu peux utiliser `sk_test` pour tester et `sk_live` seulement quand Stripe est totalement verifie.

## Firebase Admin

`FIREBASE_SERVICE_ACCOUNT_JSON` doit venir de Firebase :

1. Firebase Console
2. Project settings
3. Service accounts
4. Generate new private key
5. Copier le contenu JSON complet dans Vercel comme variable sensible

Ne mets jamais cette cle dans GitHub, dans `app.js`, ni dans le navigateur.

## Webhook Stripe

Dans Stripe Dashboard :

```text
Endpoint URL:
https://bko-eats-1.vercel.app/api/stripe-webhook

Event:
checkout.session.completed
```

Copie ensuite le `whsec_...` dans `STRIPE_WEBHOOK_SECRET` sur Vercel.

## Regles Firestore

Le fichier a deployer dans Firebase est :

```text
firestore.rules
```

Important :
- les clients ne peuvent pas creer une commande payee eux-memes ;
- les restaurants lisent seulement leurs commandes ;
- les clients lisent seulement leurs commandes ;
- l'admin lit tout ;
- `checkoutSessions` reste invisible cote client.

## Orange Money

Le fichier `/api/orange-create-payment.js` bloque volontairement les commandes Orange Money pour le moment.

Pour l'activer, il faudra les cles officielles Orange Money marchand :

```text
ORANGE_CLIENT_ID
ORANGE_CLIENT_SECRET
ORANGE_MERCHANT_KEY ou ORANGE_MERCHANT_ID
ORANGE_API_BASE_URL
ORANGE_TOKEN_URL
ORANGE_COUNTRY=ML
ORANGE_CURRENCY=XOF
```

Et les URLs :

```text
SUCCESS_URL=https://bko-eats-1.vercel.app/index.html?payment=orange-success
CANCEL_URL=https://bko-eats-1.vercel.app/index.html?payment=orange-cancel
NOTIFY_URL=https://bko-eats-1.vercel.app/api/orange-webhook
```

## Test complet a faire

1. Ajouter les variables Vercel.
2. Redeployer Vercel.
3. Configurer le webhook Stripe.
4. Lancer `verifier-bko-eats.cmd` apres le deploiement.
5. Faire une commande carte en mode test.
6. Verifier dans Firestore :
   - `checkoutSessions`
   - `orders`
   - `notifications`
   - `wallets`
   - `walletLedgers`
7. Ouvrir l'espace restaurant et verifier que la nouvelle commande apparait.
8. Changer le statut restaurant et verifier que le client recoit le suivi.
