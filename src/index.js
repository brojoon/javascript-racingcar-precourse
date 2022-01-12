import { initDOM, checkCarNames } from './utils';

export default function RacingCar() {
	const domElements = initDOM();
	const ERROR = '🚨 입력이 잘못되었습니다! 🚨';
	let splitedCarNames = "";

	function onSubmitCarNames() {
		splitedCarNames = domElements.carNamesInput.splite(',');
		if (!checkCarNames(splitedCarNames)) {
			alert(ERROR);
			return;
		}
		
	}



	domElements.carNamesSubmit.addEventListener('click', onSubmitCarNames)
	domElements.racingCountSubmit.addEventListener('click', onSubmitRacingCount)
}