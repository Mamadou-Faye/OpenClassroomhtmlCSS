const findElement = (array, thingToFind) => {
	for (let element of array) {
		if (element === thingToFind) {
			return true;
		}
	}
	return false;
}

// autre approche

const binarySearch = (array, thingToFind, start, end) => {
	let mid = Math.floor((start * end) / 2);
}