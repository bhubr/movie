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
<<<<<<< HEAD
=======

On a créé une branche `step-02-backend-app-dev` depuis `dev`. On va créer un serveur
Node.js avec Express.

Pour commencer déjà à structurer le projet, on crée un sous-répertoire `back` pour
séparer le code backend du reste.

Ensuite on se place dans ce répertoire `back`, et on va y initialiser le `package.json`
du projet, qui contient notamment les dépendances de l'application Node.js, en lançant
`npm init`, et en répondant aux questions qu'il pose (entrée pour choix par défaut) :

    wilder@wilder-ThinkPad-T420:~/Dev/movie-app/back$ npm init
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help json` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install <pkg>` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    package name: (back) movie-app-backend
    version: (1.0.0) 0.0.1
    description: Express.js backend for a JS movie application
    entry point: (server.js)
    test command:
    git repository: https://github.com/bhubr/movie.git
    keywords:
    author: WCS Toulouse
    license: (ISC)
    About to write to /home/wilder/Dev/movie-app/back/package.json:

    {
      "name": "movie-app-backend",
      "version": "0.0.1",
      "description": "A movie application, based on an Express.js server and a JS SPA",
      "main": "server.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server.js"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/bhubr/movie.git"
      },
      "author": "WCS Toulouse",
      "license": "ISC",
      "bugs": {
        "url": "https://github.com/bhubr/movie/issues"
      },
      "homepage": "https://github.com/bhubr/movie#readme"
    }


    Is this ok? (yes)

Ensuite, on peut installer Express, et `package.json` sera mis à jour automatiquement
pour indiquer que notre application serveur dépend du module `express`.

    npm install express

On crée ensuite l'application Node.js, qui essentiellement sert de serveur de fichiers
statiques (aucune route n'est définie dans l'application Express).

On lance le serveur en restant dans le répertoire racine du dépôt (`movie`), en lançant :

    node back/server

Puis on peut accéder à l'application via http://localhost:4000.


>>>>>>> dev
### 3. Créer une application JS **front-end** (client)
