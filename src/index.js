import { checkCarNames, checkRacingCount, createCars} from './utils.js';
import {initDOM, showRacing, showRacingWinner, appendNextNode, hideNodes, visibileNode} from './DOM_utils.js';
export default function RacingCar() {

	const ERROR = '🚨 입력이 잘못되었습니다! 🚨';
	let splitedCarNames = "";
	let racingCount = 0;
	
	
	const domElements = initDOM();
	hideNodes(domElements);

	this.play = function (RacingCars) {
		appendNextNode(`#${domElements.racingPlayResult.id}`, 'div', 'racing-result-list', '');
		let isEnd = false;
		for (let i = 0; i < racingCount; i += 1) {
			for (let j = 0; j < RacingCars.length; j += 1) {
				RacingCars[j].run();
			}
			if (racingCount - 1 === i) {
				isEnd = true;
			}
			showRacing(RacingCars, document.querySelector('#racing-result-list'), isEnd);
		}
		showRacingWinner(RacingCars, document.querySelector('#racing-result-list'));
	}

	function onSubmitCarNames(e) {
		e.preventDefault();
		splitedCarNames = domElements.carNamesInput.value.split(',');
		if (!checkCarNames(splitedCarNames)) {
			return;
		}
		visibileNode(domElements.racingPlayCount, 'block');
		visibileNode(domElements.racingCountInput, 'inline');
		visibileNode(domElements.racingCountSubmit, 'inline');
	}

	function onSubmitRacingCount(e) {
		e.preventDefault();
		racingCount = domElements.racingCountInput.value;
		if (!checkRacingCount(racingCount)) {
			alert(ERROR);
			return;
		}
		visibileNode(domElements.racingPlayResult, 'block');
		const RacingCars = createCars(racingCount, splitedCarNames);
		this.play(RacingCars);
	}



	domElements.carNamesSubmit.addEventListener('click', onSubmitCarNames)
	domElements.racingCountSubmit.addEventListener('click', onSubmitRacingCount.bind(this))
}

new RacingCar();