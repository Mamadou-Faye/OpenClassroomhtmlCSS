// JavaScript
//Declaration des constants
const heuresParJour = 24;
const minutesParHeure = 60;
const secondsParMinute = 60;
// ==========================
const nombreSaisi = document.querySelector('#number-of-day');
const boutonCalcule = document.querySelector('#btnCalcule');
const heures = document.querySelector('#heures');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
// ==================================
boutonCalcule.addEventListener('click', function () {
	let jours = nombreSaisi.value;
	let calcHeures = jours * heuresParJour;
	let calcMinutes = calcHeures * minutesParHeure;
	let calcSeconds = calcMinutes * secondsParMinute;

	// affichage du resultat dans les paragraphes   
	heures.innerText = `${calcHeures} heures`;
	minutes.innerText = `${calcMinutes} minutes`;
	seconds.innerText = `${calcSeconds} secondes`;
});

// Les types primitifs en JavaScript
let episodeTitle = "l'amour";
let episodeDuration = 46;
let hasBeenWatched = true;
// ================================
document.querySelector('#episode-info').innerHTML = `Episode : ${episodeTitle}
Duration ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Has not watched'}`;
