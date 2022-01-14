import Car from "./Car.js";

export function initDOM() {
	document.querySelector('#app input').id = 'car-names-input';
	document.querySelector('#app button').id = 'car-names-submit';
	document.querySelectorAll('#app input')[1].id = 'racing-count-input';
	document.querySelectorAll('#app button')[1].id = 'racing-count-submit';
	document.querySelector('#app h4').id = 'racing-play-count';
	document.querySelectorAll('#app h4')[1].id = 'racing-play-result';

	return {
		carNamesInput: document.querySelector('#car-names-input'),
		carNamesSubmit: document.querySelector('#car-names-submit'),
		racingCountInput: document.querySelector('#racing-count-input'),
		racingCountSubmit: document.querySelector('#racing-count-submit'),
		racingPlayCount: document.querySelector('#racing-play-count'),
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

export function appendNextNode(identifier, type, id, text) {
	const parentNode = document.querySelector(identifier);
	let newNode = document.createElement(type);
	newNode.id = id;
	newNode.innerHTML = text;
	parentNode.after(newNode);	
}

export function appendChildNode(identifier, type, id, text) {
	const parentNode = document.querySelector(identifier);
	let newNode = document.createElement(type);
	newNode.id = id;
	newNode.innerHTML = text;
	parentNode.append(newNode);
}

export function showRacing(RacingCars, racingPlayResult, isEnd) {
	for (let i = 0; i < RacingCars.length; i += 1) {
		appendChildNode(`#${racingPlayResult.id}`, 'div', '', RacingCars[i].makeStatus());
	}
	if (!isEnd) {
		appendChildNode(`#${racingPlayResult.id}`, 'br', '', '');
	}
}

export function showRacingWinner(RacingCars, racingPlayResult,) {
	let max = 0;
	const carNames = [];
	let wiinerString = "";
	RacingCars.forEach((car) => {
		if (+car.getScore() > max) {
			max = +car.getScore();
		}
	})
	RacingCars.forEach((car) => {
		if (+car.getScore() == max) {
			carNames.push(car.getName());
		}
	})
	appendChildNode(`#${racingPlayResult.id}`, 'br', '', '');
	appendChildNode(`#${racingPlayResult.id}`, 'span',  '#racing-winners', `최종 우승자: ${carNames.join(', ')}`);
}

export function hideNodes(domElements) {
	domElements.racingCountInput.style.display = 'none';
	domElements.racingCountSubmit.style.display = 'none';
	domElements.racingPlayCount.style.display = 'none';
	domElements.racingPlayResult.style.display = 'none';
}

export function visibileNode(domElement, type) {
	domElement.style.display = type;
}