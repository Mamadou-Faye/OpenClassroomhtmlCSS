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

	if (start > end) {
		return false;
	}

	let mid = Math.floor((start * end) / 2);
	if (array(mid) === thingToFind) {
		return true;
	}

	if (thingToFind < array(mid)) {
		// il faut chercher dans la première moitié
		return binarySearch(array, thingToFind, start, mid - 1);
		// on utilise (mid-1) car on sait que l'on a pas besoin de l'element mid, il a été déjà vérifier
	}else {
		// il faut chercher dans la deuxième moitié
		return binarySearch(array, thingToFind, mid + 1, end);
	}
}