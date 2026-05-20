# Integrations et paiements Bko Eats

## Modules ajoutes dans l'admin

L'interface admin affiche maintenant les modules a connecter :

| Module | Utilite |
| --- | --- |
| Supabase | Base de donnees, comptes clients/restaurants/livreurs, stockage des infos |
| Stripe | Paiements carte, Apple Pay, Google Pay, commissions |
| GitHub | Sauvegarde du code et retour en arriere |
| Expo | Test sur telephone et preparation Android/iPhone |
| Vercel | Hebergement du site et des tableaux de bord |
| Cloudinary | Photos plats/restaurants optimisees |
| Figma | Maquettes/designs |
| Google Drive | Logos, menus, documents restaurants |
| Render | Serveur/API pour paiements et automatisations |

## Portefeuilles

La repartition est maintenant :

```txt
80% -> portefeuille restaurant
20% -> portefeuille admin Bko Eats
```

Le bouton admin `Reinitialiser portefeuilles` remet les portefeuilles a zero en supprimant les commandes qui servent au calcul. Si l'admin Firebase est connecte, il supprime aussi les commandes Firestore.

## Paiement par carte bancaire

Solution recommandee : Stripe Checkout.

Etapes :

1. Creer un compte Stripe.
2. Activer les moyens de paiement carte, Apple Pay et Google Pay dans Stripe.
3. Creer un petit serveur/API sur Render ou Vercel.
4. Quand le client clique sur `Carte bancaire`, l'app appelle ton API.
5. Ton API cree une session Stripe Checkout.
6. Le client paie sur la page Stripe securisee.
7. Stripe appelle ton webhook.
8. Le webhook cree/confirme la commande dans la base.
9. Le portefeuille est mis a jour avec la repartition 80/20.

## Paiement Orange Money

Solution recommandee : Orange Money Web Payment / M Payment via Orange Developer.

Etapes :

1. Creer un compte Orange Developer.
2. Demander l'acces marchand Orange Money Web Payment pour le Mali.
3. Recuperer les identifiants API marchand.
4. Creer un serveur/API sur Render ou Vercel.
5. Quand le client choisit `Orange Money`, l'app appelle ton API.
6. Ton API cree la demande de paiement Orange Money.
7. Orange confirme le paiement via retour/API.
8. Ton API confirme la commande dans la base.
9. Le portefeuille est mis a jour avec la repartition 80/20.

## Connexion Google

Si Google ne fonctionne pas sur mobile avec le lien `192.168.1.10`, va dans Firebase :

```txt
Authentication > Settings > Authorized domains
```

Ajoute :

```txt
localhost
127.0.0.1
192.168.1.10
bko-eats-web.firebaseapp.com
bko-eats-web.web.app
```

Puis verifie aussi :

```txt
Authentication > Sign-in method > Google > Enabled
```
