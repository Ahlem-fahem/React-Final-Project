# React-Final-Project

****

## C'est notre projet final de matière Programmation fonctionnelle :
###### Réalisé par 
- [Lamya Rayess](https://github.com/lamya-rey)
- [Ahlem Fahem](https://github.com/Ahlem-fahem) 


****

## C'est quoi le projet :

Notre projet s'agit d'une bibliothèque en ligne, ou l'utilisateur peut créer un compte pour devenir un membre et comme des fonctionnalités il peut ajouter, empreinter des livre en ligne.
Cet utilisateur peut-être un enfant, un adolescent ou un adule ( 3 Cathégories ).

****

#### Concept :
* Les utilisateurs sont categorises par leur age Enfant < 13, 13 < Ado < 18, 18 < Adulte
* Un utilisateur ne peut emprunter que 3 livres maximum
* Un enfant ne peut pas emprunter un livre "ado" ou "adulte"
* Un ado ne peut pas enprunter un livre "adulte"

****

#### Fonctionnement du projet:

Dans le terminal de projet run:

$ yarn start

après sur le navigateur accéder au :

URL: http://localhost:3000

En principe aprés lancer la commande le project s'ouvre automatiquement dans le navigateur 

****

#### Les Interfaces Utilisateur réalisées :

* Page Inscription : http://localhost:3000 
* Page Authentification : http://localhost:3000/login
* Page d'accueil : http://localhost:3000/home : contient la liste des livres et à partir de la quel on peut accèder à la page livre et la page ajouter livre.
* Page ajouter un livre : http://localhost:3000/add : là on peut ajouter un livre en remplissant le forum et puis cliquer sur la bouton "Add book"
* Page livre : http://localhost:3000/book : à partir de la quel on peut emprunter le livre concerné et faire une commentaire pour donner son avis si besoin.
* Page 404
****

#### Travail Réalisé:
* le design de différentes pages
* Page 404 
* Typescript
* Routing
* Si je clique sur Actualiser, je rester sur la même page
* Loading states
* Hook avec Book list et register
* Quand je valide l'inscription un popup s'affiche qui contient les données de l'utilisateur quand je clique sur ok page d'accueil s'affiche.
