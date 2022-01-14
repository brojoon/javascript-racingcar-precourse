import Car from "./Car.js";

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
