# Building and Launching the App

## Initial Setup:

This file describes how to build and launch the app. 

Start by opening two shells; one for running the backend and the other for the frontend.

## Frontend Setup:

Navigate to the frontend directory: ./Project_Anki/Frontend.

Install dependencies: npm install.

Launch the frontend: Execute ng serve.

Access the app: Navigate to http://localhost:4200/. The app will auto-reload on source file changes.

## Backend Setup:

Go to the backend directory: ./Project_Anki/Backend.

Install backend dependencies: npm install.

Start the backend server: Execute node ./server.js.

# Mise en Place d'une Base de Données PostgreSQL


## Étapes de Configuration et de Gestion de la Base de Données PostgreSQL

Ouverture de PGAdmin
PGAdmin est l'interface graphique principale pour la gestion de bases de données PostgreSQL.
Pour démarrer, ouvrez PGAdmin depuis votre ordinateur.

## Vérification de la Connexion à la Base de Données

En cas d'erreur de connexion à la base de données, le problème peut être dû à un service PostgreSQL non démarré.
Le message "le temps de connexion est trop long" indique souvent que le service n'est pas actif.

## Démarrage du Service PostgreSQL

Appuyez sur la touche Windows et tapez Services pour ouvrir l'application Services.
Faites défiler la liste jusqu'à trouver un service nommé semblable à postgresql.
Cliquez sur ce service, puis sélectionnez Démarrer pour activer le service PostgreSQL.

## Contrôle via PowerShell

Il est à noter que la gestion de ce service ne se fait pas idéalement via PowerShell.

## Création et Peuplement de Tables

Une fois la connexion établie avec PGAdmin, vous pouvez procéder à la création des tables user, lecon, et flashcard en utilisant les scripts SQL fournis.
Assurez-vous de suivre les bonnes pratiques de sécurité, notamment en ce qui concerne le stockage des mots de passe.


-- Création de la table 'user'

CREATE TABLE user (

    id_user SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,  -- Stockez les mots de passe sous forme de hash
    date_creation TIMESTAMP NOT NULL,
    last_login TIMESTAMP
);

-- Création de la table 'lecon'

CREATE TABLE lecon (

    id_lecon SERIAL PRIMARY KEY,
    name_lecon VARCHAR(100) NOT NULL,
    nbr_flashcard INT NOT NULL,
    id_user INT,
    date_creation TIMESTAMP NOT NULL,
    difficulty_level VARCHAR(50),
    FOREIGN KEY (id_user) REFERENCES user (id_user)
);

-- Création de la table 'flashcard'

CREATE TABLE flashcard (

    id_flashcard SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    reponse TEXT NOT NULL,
    id_lecon INT,
    image_url VARCHAR(255),
    difficulty_level VARCHAR(50),
    FOREIGN KEY (id_lecon) REFERENCES lecon (id_lecon)
);


## Insertion de Données

Insérez des données de démonstration dans chaque table pour tester leur fonctionnement.
Ces données sont essentielles pour valider la structure et l'intégrité de votre base de données.


-- Insertion de données dans 'user'

INSERT INTO user (username, password, date_creation, last_login) VALUES 

('User1', 'hashed_password1', '2023-01-01 12:00:00', '2023-01-10 15:00:00'),

('User2', 'hashed_password2', '2023-01-05 08:30:00', NULL);



-- Insertion de données dans 'lecon'

INSERT INTO lecon (name_lecon, nbr_flashcard, id_user, date_creation, difficulty_level) VALUES 

('Leçon Français', 10, 1, '2023-01-10 09:00:00', 'débutant'),

('Leçon Maths', 15, 2, '2023-01-12 10:00:00', 'intermédiaire');



-- Insertion de données dans 'flashcard'

INSERT INTO flashcard (question, reponse, id_lecon, image_url, difficulty_level) VALUES 

('Quelle est la capitale de la France ?', 'Paris', 1, NULL, 'facile'),

('Combien font 2 + 2 ?', '4', 2, NULL, 'facile');

