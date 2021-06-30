class Show {
    constructor(title, numberOfSeasons, episodesPerSeason) {
      this.title = title;
      this.numberOfSeasons = numberOfSeasons;
      this.episodesPerSeason = episodesPerSeason;
  }
}

const tau = new Show('The Story of Tau', 5, 12);
const meldrum = new Show('The Hero of Old Meldrum', 3, 6);
const clara = new Show('The Bugs of Isla Clara', 6, 15);

const shows = [tau, meldrum, clara];

// Modify the following code
// ======================


const generateComponent = (show) => {

  const titleText = show.title;
  const seasonsText = show.numberOfSeasons + ' seasons';
  const episodesText = show.numberOfEpisodes + ' episodes per season';

  return {
    titleText, seasonsText, episodesText
  };
}

const tauComponent = generateComponent(tau);
const meldrumComponent = generateComponent(meldrum);
const claraComponent = generateComponent(clara);

const shows = [tauComponent, meldrumComponent, claraComponent];

// ===================================

const tauTitleText = tau.title;
const tauSeasonsText = tau.numberOfSeasons + ' seasons';
const tauEpisodesText = tau.episodesPerSeason + ' episodes per season';

const tauComponent = {
  titleText: tauTitleText,
  seasonsText: tauSeasonsText,
  episodesText: tauEpisodesText
};

const meldrumTitleText = meldrum.title;
const meldrumSeasonsText = meldrum.numberOfSeasons + ' seasons';
const meldrumEpisodesText = meldrum.episodesPerSeason + ' episodes per season';

const meldrumComponent = {
  titleText: meldrumTitleText,
  seasonsText: meldrumSeasonsText,
  episodesText: meldrumEpisodesText
};

const claraTitleText = clara.title;
const claraSeasonsText = clara.numberOfSeasons + ' seasons';
const claraEpisodesText = clara.episodesPerSeason + ' episodes per season';
const claraComponent = {
  titleText: claraTitleText,
  seasonsText: claraSeasonsText,
  episodesText: claraEpisodesText
};

const showComponents = [tauComponent, meldrumComponent, claraComponent];



// const generateComponent = (show) => {
//   const titleText = show.title;
//   const seasonsText = show.numberOfSeasons + ' seasons';
//   const episodesText = show.episodesPerSeason + ' episodes per season';
//   return {
//     titleText,
//     seasonsText,
//     episodesText
//   };
// }

// const tauComponent = generateComponent(tau);
// const meldrumComponent = generateComponent(meldrum);
// const claraComponent = generateComponent(clara);


// const showComponents = [tauComponent, meldrumComponent, claraComponent];

// ======================
// Modify the code above

const body = document.querySelector('body');

const updateShows = () => {
  for (let show of showComponents) {
    const showPane = document.createElement('div');
    showPane.classList.add('series-frame');
    const showHeading = document.createElement('h2');
    showHeading.innerText = show.titleText;
    const showDetails = document.createElement('p');
    const seasons = document.createElement('p');
    seasons.innerText = show.seasonsText;
    const episodes = document.createElement('p');
    episodes.innerText = show.episodesText;
    showDetails.append(seasons);
    showDetails.append(episodes);
    showPane.append(showHeading);
    showPane.append(showDetails);
    body.append(showPane);
  }
};

updateShows();

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

// les arrays
// ==============================================
let episodes = [];
episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);
episodes.pop();
let numberOfEpisodes = episodes.length;
// ================================================
const body = document.querySelector('body');

document.querySelector('#episodes').innerText = numberOfEpisodes;

for(let episode of episodes) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episode.firstEpisode}`;
}

const printStringStats = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  const wordCount = wordArray.length;
  let letterCount = 0;
  for (let word of wordArray) {
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    letterCount += word.length;
  }

  const averageWordLength = parseInt((letterCount / wordCount).toFixed(2));
  const stringStats = {
    wordCount : wordCount;
    letterCount : letterCount;
    averageWordLength : averageWordLength
  };

  console.log(stringStats);
}

// Voyons maintenant cette refactorisation

const getWordCount = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  return wordArray.length;
}

const getLetterCount = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  let totalLetters = 0;
  for (let word of wordArray) {
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    totalLetters += word.length;
  }

  return totalLetters;
}

const getAverageWordLength = (stringToTest) => {
  return parseFloat((getLetterCount(stringToTest) / wordCount(stringToTest)).toFixed(2));
}

const printStringStats = (stringToTest) => {
  console.log({
    wordCount : getWordCount(stringToTest);
    letterCount : getLetterCount(stringToTest);
    averageWordLength : getAverageWordLength(stringToTest);
  });
}

// Reprendre l'exemple précédent en utilisant des commentaires

const getWordCount = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  return wordArray.length;
}

const getLetterCount = (stringToTest) => {
  const wordArray = stringToTest.split(' ');
  let totalLetters = 0;
  for (let word of wordArray) {
    // retirer la ponctuation pour ne compter que les lettres
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    totalLetters += word.length;
  }
  return totalLetters;
}

/*
** Renvoie la longueur moyenne des mots
** Arrondie à deux chiffres après la virgule
*/
const getAverageWordLength = (stringToTest) => {
  return parseFloat(getWordCount(stringToTest) / getLetterCount(stringToTest).toFixed(2));
}

const stringStats = (stringToTest) => {
  console.log({
    wordCount : getWordCount(stringToTest),
    letterCount : getLetterCount(stringToTest),
    averageWordLength : getAverageWordLength(stringToTest)
  });
}

// simplifier mon code

let personne1 = "Jean";
let personne2 = "Paul";
let personne3 = "Ringo";

const saluer = (prenom) => {
  // On met la première lettre en majuscule, on salut la personne et on donne le nombre de lettre dans son prenom

  const monPrenom = prenom.toUpperCase() + prenom.substr(1);
  const longueurPrenom = monPrenom.length;
  console.log(`Bonjour ${monPrenom}, ton prenom contient ${longueurPrenom} lettres`);
}

// On salue les trois personnes
saluer(personne1);
saluer(personne2);
saluer(personne3);