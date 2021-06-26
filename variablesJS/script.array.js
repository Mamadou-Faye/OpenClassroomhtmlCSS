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