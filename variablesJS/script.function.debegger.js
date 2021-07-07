const getWordCount = (stringToTest) => {
	const wordArray = stringToTest.split('');
	return wordArray.length;
}

// Utilisons l'affichage de console pour voir ce quik passe
const wordArray = (stringToTest) => {
	const wordArray = stringToTest.split('');
	console.log('Word array in getWordCount: ');
	console.log(wordArray);
	return wordArray.length;
}