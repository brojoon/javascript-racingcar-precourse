import { checkCarNames, checkRacingCount, initDOM, Car } from './utils.js';

export default function RacingCar() {

	const ERROR = '🚨 입력이 잘못되었습니다! 🚨';
	let splitedCarNames = "";
	let racingCount = 0;
	
	
	const domElements = initDOM();

	function onSubmitCarNames(e) {
		e.preventDefault();
		splitedCarNames = domElements.carNamesInput.value.split(',');
		if (!checkCarNames(splitedCarNames)) {
			alert(ERROR);
			return;
		}
	}

	function onSubmitRacingCount(e) {
		e.preventDefault();
		racingCount = domElements.racingCountInput.value;
		if (!checkRacingCount(racingCount)) {
			alert(ERROR);
			return;
		}

	}



	domElements.carNamesSubmit.addEventListener('click', onSubmitCarNames)
	domElements.racingCountSubmit.addEventListener('click', onSubmitRacingCount)
}

RacingCar();