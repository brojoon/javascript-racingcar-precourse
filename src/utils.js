import Car from "./Car.js";

export function initDOM() {
	document.querySelector('#app input').id = 'car-names-input';
	document.querySelector('#app button').id = 'car-names-submit';
	document.querySelectorAll('#app input')[1].id = 'racing-count-input';
	document.querySelectorAll('#app button')[1].id = 'racing-count-submit';
	document.querySelectorAll('#app h4')[1].id = 'racing-play-result';

	return {
		carNamesInput: document.querySelector('#car-names-input'),
		carNamesSubmit: document.querySelector('#car-names-submit'),
		racingCountInput: document.querySelector('#racing-count-input'),
		racingCountSubmit: document.querySelector('#racing-count-submit'),
		racingPlayResult: document.querySelector('#racing-play-result'),
	}
}

export function checkCarNames(splitedNames) {
	if (splitedNames.length === 1) {
		return false;
	}
	for (const Name of splitedNames) {
		if (Name.length > 5) {
			return false;
		} else if (Name.replace(/ /g, "").length !== Name.length) {
			return false;
		}
	}
	const setCarName = new Set(splitedNames);
	if (setCarName.size !== splitedNames.length) {
		return false;
	}
	return true;
}

export function checkRacingCount(racingCount) {
	if (/^\d+$/.test(racingCount) === false) {
		console.log('1');
		return false;
	}
	else if (+racingCount <= 0) {
		console.log('2');
		return false;
	}
	return true;
}

export function createCars(racingCount, splitedCarNames) {
	const RacingCars = [];
	for (let i = 0; i < splitedCarNames.length; i += 1) {
		RacingCars.push(new Car(splitedCarNames[i]));
	}
	return RacingCars;
}

export function appendNextNode(identifier, type, text) {
	const parentNode = document.querySelector(identifier);
	let newNode = document.createElement(type);
	newNode.innerHTML = text;
	parentNode.append(newNode);
}

export function showRacing(RacingCars, racingPlayResult) {
	for (let i = 0; i < RacingCars.length; i += 1) {
		appendNextNode(`#${racingPlayResult.id}`, 'div', RacingCars[i].makeStatus());
	}	
	appendNextNode(`#${racingPlayResult.id}`, 'br', '');
}