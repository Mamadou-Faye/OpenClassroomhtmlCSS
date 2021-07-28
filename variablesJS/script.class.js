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

// ===============================================================================================================

export class Book {

  constructor (title, author, description, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }

  const readBook = (page) => {
    
  }
  
}

let livre1 = new Book("le titre du livre 1", "l\'auteur du livre 1", "la description du livre 1", 105, 16, false);
let livre2 = new Book("le titre du livre 2", "l\'auteur du livre 2", "la description du livre 2", 402, 279, false);
let livre3 = new Book("le titre du livre 3", "l\'auteur du livre 3", "la description du livre 3", 234, 101, false);
let livre4 = new Book("le titre du livre 4", "l\'auteur du livre 4", "la description du livre 4", 79, 13, false);

export const books = [livre1, livre2, livre3, livre4];
