// Create constants here
// =====================================
const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

// =====================================

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

calculateButton.addEventListener('click', () => {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;
  
  hours.innerText = `${calcHours} hours`;
  minutes.innerText = `${calcMinutes} minutes`;
  seconds.innerText = `${calcSeconds} seconds`;
});

// exemple de string d'interpolation

// const myName = "Faye";

// const salutation = `Bienvenue sur mon site ${myName}`;

// alert(salutation);

// Application serie episode
// Create variables here
// =========================================
let episodeTitle = 'amour vrai';
let episodeDuration = 50;
let hasBeenWatched = true;


// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`


// Section class
// Create a class here
// =====================================
class episode {
  
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new episode('la force de l\'amour', 45, true);

let secondEpisode = new episode('l\'esclavage', 50, false);

let thirdEpisode = new episode('le secret de amour', 35, true);


// =====================================

document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

// ========================================
let episodes = [];
episodes.push(firstEpisode);
episodes.push(secondEpisode);
episodes.push(thirdEpisode);
episodes.push(thirdEpisode);
episodes.pop();

let numberOfEpisodes = episodes.length;

// =========================================
const body = document.querySelector('body');

document.querySelector('#episodes').innerText = numberOfEpisodes;

for(let episode of episodes) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episode.title}
${episode.duration} minutes
${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}


// Les conditions en JavaScript

//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'age
const ageInput = document.getElementById("age");
//On défini la variage age qu'on utilisera et un variable définissant l'age de la majorité
let age;
let ageMajorite = 18;


//Cette fonction affichera le message de validation
function valider(){
  espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
}

//Cette fonction affichera un message d'erreur
function refuser(){
  alert("Cette espace est interdit aux personnes mineurs");
}



function onConfirm(){
  
  //On récupère la saisie de l'age et on transforme le texte en nombre entier
  age = parseInt(ageInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if(isNaN(age)){
    alert("Ceci n'est pas un nombre");
    return;
  }

  //====Code à rédiger ici======
  
 if(age < ageMajorite){
    refuser();
  }else{
    valider()
  }
  
  //=======/Code à rédiger ici======
  
  
  //On vide le champ de saisie
  ageInput.value = "";
}

//PATIE DEUX

//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'age
const ageInput = document.getElementById("age");
//On pointe sur l'élément de la checkbox de contrôle parental
const parentalInput = document.getElementById("parental");
//On défini la variage age qu'on utilisera et un variable définissant l'age de la majorité
let age;
let isControlParentalActive;
let ageMajorite = 18;


//Cette fonction affichera le message de validation
function valider(){
  espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
}

//Cette fonction affichera un message d'erreur
function refuser(){
  alert("Cette espace est interdit aux personnes mineurs");
}



function onConfirm(){
  
  //On récupère la saisie de l'age et on transforme le texte en nombre entier
  age = parseInt(ageInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if(isNaN(age)){
    alert("Ceci n'est pas un nombre");
    return;
  }
  //On récupère la valeur du checkbox de contrôle parentale. "true" si coché ou "false" si décoché
  isControlParentalActive = parentalInput.checked;

   //====Code à rédiger ici======
  if(age < ageMajorite && isControlParentalActive) {
    refuser();
  }else {
    valider();
  }
  
  //=======/Code à rédiger ici======
  
  
  //On vide le champ de saisie
  ageInput.value = "";
}



//On écoute l'action de click sur le bouton et on appelle la fonction onConfirm
bouton.addEventListener('click', onConfirm);


// Les boucles JavaScript
class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let episodes = [
  new Episode('Dark Beginnings', 45, true),
  new Episode('The Mystery Continues', 45, false),
  new Episode('An Unexpected Climax', 60, false)
];

// Add logic here
// ======================

for (let episode of episodes) {
  episode.hasBeenWatched = false;
}

// ======================

const body = document.querySelector('body');

for(let episode of episodes) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episode.title}
${episode.duration} minutes
${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}

// Les fonctions javaScript
// Modify the code here
// ======================

const calculateAverageRating = (ratings) => {

  if(ratings.length === 0) {
    return 0;
  }
  
  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }
  
  return sum / ratings.length;

}

// ======================

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector('#tau-score').innerText = tauAverage.toFixed(1) + ' stars';
  document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' stars';
  document.querySelector('#clara-score').innerText = `${calculateAverageRating([]) === 0 ? 'No ratings' : calculateAverageRating([]) + ' stars'}`
}


// Les methodes d'instances

// Modify the code here
// ======================

class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }
  
  
}

// ======================

const tau = new Show('The Story of Tau', 5);
const colin = new Show('The Hero of Old Meldrum', 3);
const clara = new Show('The Bugs of Isla Clara', 6);

const shows = [tau, colin, clara];

const body = document.querySelector('body');
const refresh = document.querySelector('#refresh');

refresh.addEventListener('click', () => {
  removeShows();
  addRandomRatings();
  updateShows();
})

const updateShows = () => {
  for (let show of shows) {
    const showPane = document.createElement('div');
    showPane.classList.add('series-frame');
    const showHeading = document.createElement('h2');
    showHeading.innerText = show.title;
    const showDetails = document.createElement('p');
    const seasons = document.createElement('p');
    seasons.innerText = show.numberOfSeasons + ' seasons';
    const ratings = document.createElement('p');
    ratings.innerText = show.averageRating > 0 ? show.ratings.length + ' ratings\n' + show.averageRating.toFixed(1) + ' stars' : 'No ratings yet';
    showDetails.append(seasons);
    showDetails.append(ratings);
    showPane.append(showHeading);
    showPane.append(showDetails);
    body.append(showPane);
  }
};

const removeShows = () => {
  const children = [];
  for (let childNode of body.childNodes) {
    children.push(childNode);
  }
  for (let child of children) {
    if (child.tagName == 'DIV') {
      body.removeChild(child);
    }
  }
}

const addRandomRatings = () => {
  for (let show of shows) {
    if (Math.random() >= 0.2) {
      const numberOfRatings = Math.floor(Math.random() * 4 + 1);
      for (let i = 0; i < numberOfRatings; i++) {
        const rating = Math.floor(Math.random() * 5 + 1);
        show.addRating(rating);
      }
    }
  }
}

updateShows();