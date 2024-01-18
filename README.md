# Kebab Express

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com)

## Fonctionnalités

-Création d'une application pour un kebabiste

### Pré-requis

Ce qu'il est requis pour commencer avec le projet...

- Téléchargez Node.js depuis le site officiel.
- Installez Node.js. npm sera installé automatiquement avec lui.
- Vérifiez l'installation en exécutant node -v et npm -v dans votre terminal.

### Installation et Démarrage
Clone le projet dans un termainal de commande :

Executez la commande: ``git clone https://github.com/BastienCouder/kebabier-partiel.git``

Dans le dossier créé précédemment ->

Client : 
Executez la commande: ``cd client``
Crée un fichier .env à la racine du dossier et ajouter:   ``REACT_APP_API_URL=http://localhost:5000``
Executez la commande: ``npm i`` ``npm run dev``

Executez la commande: 

Ouvrez un autre terminal ->

Serveur :
Executez les commande: ``cd server``
Crée un fichier .env à la racine du dossier et ajouter:  
``
PORT=5000
MONGO_URI=mongodb+srv://kebabiste:5PvoSioN6s9s79RA@cluster0.kig3gl0.mongodb.net/
CLIENT_URL=http://localhost:3000
``
Executez la commande: ``npm i`` ``npm run dev``

Utilisé l'application ->

## Fabriqué avec

* [tailwind.css](tailwindcss.com) - Framework CSS (front-end)
* [ReactJs](https://fr.legacy.reactjs.org/)  - Librairie Javascript (front-end)
* [Nodejs](https://nodejs.org/en/docs) - Langage Javascript (back-end)
* [MongoDB](https://www.mongodb.com/fr-fr) - Base de données (NoSQL)

## Auteurs
Listez le(s) auteur(s) du projet ici !
* **Bastien Couder** _alias_ [@BastienCouder](https://github.com/BastienCOuder)
