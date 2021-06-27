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