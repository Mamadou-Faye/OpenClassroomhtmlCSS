// if (firstUser.online) {

// 	if (firstUser.accountType === "normal") {

// 		console.log("Hello " + firstUser.name + " !");
// 	}else {

// 		console.log("Welcome back premium user " + firstUser.name + " !");
// 	}
// }

// if (secondUser.online) {

// 	if (secondUser.accountType === "normal") {

// 		console.log("Hello " + secondUser.name + " !");
// 	}else {

// 		console.log("Welcome back premium user " + secondUser.name + " !");
// 	}
// }

// if (thirdUser.online) {

// 	if (thirdUser.accountType === "normal") {

// 		console.log("Hello " + thirdUser.name + " !");
// 	}else {

// 		console.log("Welcome back premium user " + thirdUser.name + " !");
// 	}
// }


// const sendWelcomeMessageToUser = (user) => {

// 	if (user.online) {

// 		if (user.accountType === "normal") {

// 			console.log("Hello " + user.name + "!");

// 		}else {

// 			console.log("Welcome back premium user " + user.name + "!");
// 		}
// 	}
// }

// sendWelcomeMessageToUser(firstUser);
// sendWelcomeMessageToUser(secondUser);
// sendWelcomeMessageToUser(thirdUser);

let monTitre = document.getElementById('titre');
let monBouton = document.getElementById('btn');

window.addEventListener('scroll', function () {
	let value = window.scrollY;
	monBouton.style.marginLeft = value * 1.6 + 'px';
	monTitre.style.letterSpacing = value * 0.1 + 'px';
})