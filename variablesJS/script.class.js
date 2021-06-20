// Create class episode
// ===================================
class Episode {

	constructor(title, duration, hasBeenWatched) {
		this.title = title;
		this.duration = duration;
		this.hasBeenWatched = hasBeenWatched;
	}
}

let firstEpisode = new Episode("L'amour", 45, true);
let secondEpisode = new Episode("Le succès", 60, false);
let thirdEpisode = new Episode("La passion", 15, true);

document.querySelector('#first-episode-info').innerText = `Episode : ${firstEpisode.title}
Duration : ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#second-episode-info').innerText = `Episode : ${secondEpisode.title}
Duration : ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#third-episode-info').innerText = `Episode : ${thirdEpisode.title}
Duration : ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;