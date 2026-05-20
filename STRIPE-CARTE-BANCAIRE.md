# Paiement par carte bancaire avec Stripe

## Ce qui est en place

L'application Bko Eats peut maintenant lancer un paiement par carte via Stripe Checkout.

Flux :

1. Le client choisit `Carte bancaire`.
2. L'application cree une session Stripe via `/api/stripe-create-checkout`.
3. Le client paie sur la page securisee Stripe.
4. Stripe renvoie vers Bko Eats avec `session_id`.
5. L'application verifie le paiement via `/api/stripe-session`.
6. Si `payment_status` vaut `paid`, la commande est creee et envoyee au restaurant.

## Variables a mettre dans Vercel

Dans :

```text
Vercel > bko-eats-1 > Settings > Environment Variables
```

Ajouter :

```text
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_CURRENCY=xof
APP_URL=https://bko-eats-1.vercel.app
```

Optionnel :

```text
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## Webhook Stripe

Dans Stripe Dashboard :

```text
Developers > Webhooks > Add endpoint
```

Endpoint :

```text
https://bko-eats-1.vercel.app/api/stripe-webhook
```

Evenement minimum :

```text
checkout.session.completed
```

Copier ensuite le `Signing secret` dans Vercel :

```text
STRIPE_WEBHOOK_SECRET
```

## Important avant production

Cette integration est correcte pour sandbox/test.

Avant paiement reel, il faut que le backend recalcule le total depuis une base de donnees serveur, pas seulement depuis les donnees envoyees par le navigateur. Cela evite qu'un client modifie le prix dans son navigateur.

Pour le lancement public :

1. Utiliser Stripe en mode live.
2. Mettre les cles live dans Vercel.
3. Configurer le webhook live.
4. Tester une vraie carte.
5. Garder Orange Money pour les clients Maliens.
