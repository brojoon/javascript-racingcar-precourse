import { ERROR_MESSAGE  } from './error_config.js';
import Car from "./Car.js";

export function checkCarNames(splitedNames) {
	if (splitedNames.length === 1) {
		alert(ERROR_MESSAGE.namesOnlyOne);
		return false;
	}
	for (const Name of splitedNames) {
		if (Name.length > 5) {
			alert(ERROR_MESSAGE.nameTooLong);
			return false;
		} else if (Name.replace(/ /g, "").length !== Name.length) {
			alert(ERROR_MESSAGE.namesHasBlank);
			return false;
		}
	}
	const setCarName = new Set(splitedNames);
	if (setCarName.size !== splitedNames.length) {
		alert(ERROR_MESSAGE.namesRedundant);
		return false;
	}
	return true;
}

export function checkRacingCount(racingCount) {
	if (/^\d+$/.test(racingCount) === false) {
		return false;
	}
	else if (+racingCount <= 0) {
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

