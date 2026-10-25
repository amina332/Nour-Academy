# Nour Academy — Portail d'inscription aux cours de soutien

## 1. Présentation du projet

**Nour Academy** est un réseau de trois centres de soutien scolaire et de langues situés à Nador :

- Nador Centre
- Hay Al Matar
- Selouane

Ce projet consiste à développer un portail web permettant aux parents de consulter les cours disponibles, de choisir les cours adaptés au niveau de leur enfant et d'envoyer un dossier d'inscription complet.

L'application est réalisée côté navigateur, sans serveur ni base de données, dans le cadre de la Partie 1 du projet.

## 2. Objectifs du projet

- Faciliter la recherche des cours de soutien scolaire et de langues.
- Permettre aux parents de filtrer les cours par matière et par niveau.
- Composer une sélection de cours et calculer le montant mensuel.
- Valider les informations saisies grâce à des expressions régulières (Regex).
- Bloquer l'envoi si le formulaire est incomplet ou invalide.
- Afficher un récapitulatif confirmant l'inscription.
- Réduire le taux de dossiers incomplets à moins de 15 %.

## 3. Fonctionnalités

### US1 — Consulter le catalogue

- Affichage dynamique d'au moins 12 cours à partir d'un tableau JavaScript.
- Présentation du titre, de la matière, du niveau, du créneau, du prix et des places restantes.
- Affichage du prix au format `350 MAD / mois`.
- Affichage du statut « Complet » lorsque le nombre de places restantes est égal à zéro.
- Désactivation du bouton d'ajout pour les cours complets.

### US2 — Filtrer les cours

- Filtrage par niveau scolaire.
- Filtrage par matière.
- Combinaison des deux filtres sans rechargement de la page.
- Affichage du nombre de résultats.
- Message informatif lorsqu'aucun cours ne correspond aux critères.

### US3 — Composer sa sélection

- Ajouter des cours à la sélection.
- Retirer les cours sélectionnés.
- Empêcher l'ajout en double d'un même cours.
- Afficher les cours choisis.
- Calculer le total mensuel en MAD.
- Gérer les boutons des cartes avec un seul écouteur d'événements placé sur le conteneur.

### US4 — Valider le formulaire

Le formulaire contient les champs suivants :

- Nom du parent.
- Adresse email.
- Numéro de téléphone.
- Prénom de l'élève.
- Niveau scolaire de l'élève.
- Mot de passe.
- Confirmation du mot de passe.
- Consentement.

Les validations comprennent :

- Téléphone marocain au format `06XXXXXXXX`, `07XXXXXXXX`, `+2126XXXXXXXX` ou `+2127XXXXXXXX`.
- Adresse email valide.
- Mot de passe d'au moins 8 caractères, contenant une majuscule, un chiffre et un caractère spécial.
- Confirmation identique au mot de passe.
- Messages d'erreur ou de succès sous chaque champ.
- Bordures visuelles indiquant l'état de validation.

### US5 — Envoyer l'inscription

- Blocage de l'envoi si un champ est invalide.
- Blocage de l'envoi si aucun cours n'est sélectionné.
- Vérification obligatoire du consentement.
- Déplacement du focus vers le premier champ en erreur.
- Affichage d'un récapitulatif contenant les informations de l'élève, les cours choisis, le total mensuel et un numéro de dossier unique.
- Réinitialisation du formulaire et de la sélection après confirmation.

## 4. Technologies utilisées

- **HTML5** : structure des pages.
- **CSS3** : mise en forme.
- **Tailwind CSS** : création d'une interface responsive.
- **JavaScript** : affichage dynamique, filtres, sélection des cours et validation du formulaire.
- **Regex** : contrôle des données saisies.
- **Git et GitHub** : gestion du code source et collaboration.
- **Jira ou GitHub Projects** : organisation et suivi des tâches.
- **GitHub Pages** : déploiement du site web.

## 5. Organisation du projet

Le travail est organisé sur cinq jours, avec une user story principale par jour.

| Jour | User story | Fonctionnalité |
|---|---|---|
| J1 | US1 | Catalogue des cours |
| J2 | US2 | Filtres par matière et niveau |
| J3 | US3 | Sélection et panier de cours |
| J4 | US4 | Validation du formulaire |
| J5 | US5 | Confirmation de l'inscription |

### Gestion des tâches

Le board Jira ou GitHub Projects utilise les colonnes suivantes :

- À faire
- En cours
- En revue
- Terminé

Chaque user story possède ses critères d'acceptation et un ticket associé.

### Convention Git

Les branches suivent le format :

`feature/<clé-jira>-<description>`

Exemple :

`feature/NOUR-3-filtres`

Chaque commit et chaque Pull Request doivent mentionner la clé du ticket Jira correspondant.

Les modifications sont fusionnées dans la branche `main` uniquement après une Pull Request décrivant les changements et les étapes de test.

## 6. Installation et lancement

### Prérequis

- Un navigateur web récent.
- Git.
- Visual Studio Code (recommandé).
- Node.js et npm si Tailwind CSS doit être compilé localement.

### Étapes

1. Cloner le dépôt GitHub :

   ```bash
   git clone URL_DU_DEPOT
   ```

2. Ouvrir le dossier du projet :

   ```bash
   cd Nour-Academy
   ```

3. Ouvrir le dossier dans Visual Studio Code.

4. Lancer `index.html` dans un navigateur, idéalement avec l'extension Live Server.

5. Si le projet utilise Tailwind CSS compilé, installer les dépendances avec `npm install` si un fichier `package.json` est fourni.

## 7. Structure du projet

```text
Nour-Academy/
├── index.html
├── script.js
├── README.md
├── src/
│   ├── input.css
│   ├── output.css
├── images/
│   ├── logo.png
│   └── ...
└── package.json
```

*Remarque : cette structure est indicative. Elle doit être adaptée aux fichiers réellement présents dans le dépôt.*

## 8. Tests et critères de validation

Avant de considérer une fonctionnalité comme terminée, vérifier que :

- Le catalogue affiche au moins 12 cours.
- Les cours complets ne peuvent pas être ajoutés.
- Les filtres par matière et par niveau fonctionnent ensemble.
- Le nombre de résultats est correct.
- Un cours ne peut pas être ajouté deux fois.
- Le total mensuel est recalculé après chaque ajout ou retrait.
- Les champs du formulaire sont validés en temps réel.
- L'inscription est bloquée si les données sont invalides.
- Le consentement et la sélection des cours sont obligatoires.
- Le récapitulatif affiche les informations attendues.
- L'interface fonctionne sur smartphone et ordinateur.

## 9. Déploiement

Le projet est destiné à être publié avec **GitHub Pages**.

Après validation des modifications et fusion dans `main`, le site est déployé depuis la branche configurée dans les paramètres GitHub Pages.

Le lien du site sera ajouté ici :

**Site web :** [Ajouter le lien GitHub Pages]

**Dépôt GitHub :** [Ajouter le lien du dépôt]

## 10. Limites de la Partie 1

- Aucune base de données n'est utilisée.
- Les inscriptions ne sont pas enregistrées sur un serveur.
- Le numéro de dossier est généré côté navigateur.
- Le récapitulatif confirme la saisie dans l'interface, mais ne constitue pas une confirmation serveur.
- Le back-office du secrétariat sera développé dans la Partie 2.

## 11. Auteure et cadre du projet

Projet réalisé dans le cadre du développement web avec **Sahla Digital**, pour répondre aux besoins de Nour Academy.

**Objectif final :** simplifier l'inscription des parents et réduire les dossiers incomplets grâce à un catalogue interactif et à un formulaire validé.
