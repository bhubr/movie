# Movie App

Cette app peut servir de base pour partir de fichiers HTML statiques, et arriver à une app JS.

Le propos de l'application est de référencer un certain nombre de films. Il y a plusieurs
rôles d'utilisateurs :
* les simples visiteurs, qui peuvent consulter les fiches des films
* les utilisateurs enregistrés, qui peuvent :
    * ajouter un film non référencé
    * laisser une appréciation (note + commentaire) sur un film référencé
* les administrateurs, qui peuvent gérer le site (suspendre un utilisateur ayant un comportement déplacé)

On va procéder par étapes, mais comme c'est un exemple pour illustrer le modèle de données, le **code**,
la gestion des branches Git et la structure de l'application, on n'a pas créé un backlog complet avant de démarrer.

## Etapes (à compléter)

### 1. Créer une maquette statique

On a travaillé depuis une branche `step01-static-html`. On y a ajouté 4 fichiers HTML:
l'index, une page "à propos", et deux pages de films.

Si vous voulez revenir à cette étape, vous pouvez faire `git checkout step01`.
Cela utilise le système de tags de Git, qui permet tout simplement de mettre un tag sur un commit,
pour l'identifier plus facilement.

### 2. Créer une application JS **back-end** (serveur Node.js)
### 3. Créer une application JS **front-end** (client)
