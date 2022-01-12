export function initDOM() {
	document.querySelector('#app input').id = 'car-names-input';
	document.querySelector('#app button').id = 'car-names-submit';
	document.querySelectorAll('#app input')[1].id = 'racing-count-input';
	document.querySelectorAll('#app button')[1].id = 'racing-count-submit';

	return {
		carNamesInput: document.querySelector('#car-names-input'),
		carNamesSubmit: document.querySelector('#car-names-submit'),
		racingCountInput: document.querySelector('#racing-count-input'),
		racingCountSubmit: document.querySelector('#racing-count-submit'),
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
		return false;
	}
	else if (+racingCount <= 0) {
		return false;
	}
}