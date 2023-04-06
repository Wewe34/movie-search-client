# MovieXpress

This application allows you to search for movies using the OMDB API. 

## Features

All Users
* Movie search results displayed by type of film (movie, series, episode).
* View details of a film selection such as Imdb rating, plot, actors, genres and more.
* Recently viewed history
* Clear recently viewed history
* Search validation 
  * Input more than 3 characters to search.
  * No results found. 

Signed In Users

* Google sign-in and sign-out
* Add movie to Favorites and Watchlist. 
* Remove movie from Favorites and Watchlist.
* Download PDF file of Favorites list and Watch list.

Other

* Storage of users in Mongo DB with google credientials.
* Express/Node.js api routes to add and remove Favorites and Watchlist from user document.
* Browser SessionStorage to persist user signed in upon browser refresh.
* Redux for user, recently viewed history, favorites list and watchlist state.

## Technologies

React ·
Redux ·
Axios ·
TypeScript ·
Material UI ·
Node.js ·
Express ·
MongoDB 

## Getting Started

There are two repositories (client and server) to be run concurrently.

1. `git clone https://github.com/Wewe34/movie-search-client.git`

2. Request an API Key from OMDB website, [https://omdbapi.com/], you will need this to plug into your .env file.

3. Create an .env file and add the following:
    *  REACT_APP_APIKEY={yourApiKeyHere}
    
4. `npm install`

5. Run `npm start`

6. `git clone https://github.com/Wewe34/movie-search-server.git`

7. Create an .env file  and add the following:
    * MONGO_USERNAME=cassiebribricodes
    * MONGO_PASSWORD=
    * MONGO_DATABASE=movie_search
    * MONGO_CLUSTER=@cluster34.ljzpkl2.mongodb.net/
    * NODE_ENV=DEV
    
8. `npm install`

9. Start another instance and Run `npm start` 


