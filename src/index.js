import { checkCarNames, checkRacingCount, initDOM, createCars, showRacing, } from './utils.js';

export default function RacingCar() {

	const ERROR = '🚨 입력이 잘못되었습니다! 🚨';
	let splitedCarNames = "";
	let racingCount = 0;
	
	
	const domElements = initDOM();

	this.play = function (RacingCars) {
		for (let i = 0; i < racingCount; i += 1) {
			for (let j = 0; j < RacingCars.length; j += 1) {
				RacingCars[j].run();
			}
			showRacing(RacingCars, domElements.racingPlayResult);
		}
		// showRacingWinner(RacingCars);
	}

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
		console.log('0');
		racingCount = domElements.racingCountInput.value;
		if (!checkRacingCount(racingCount)) {
			alert(ERROR);
			return;
		}
		const RacingCars = createCars(racingCount, splitedCarNames);
		this.play(RacingCars);
	}



	domElements.carNamesSubmit.addEventListener('click', onSubmitCarNames)
	domElements.racingCountSubmit.addEventListener('click', onSubmitRacingCount.bind(this))
}

new RacingCar();