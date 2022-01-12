export function initDOM() {
	document.querySelector('#app input')[0].id = 'car-names-input';
	document.querySelector('#app button')[0].id = 'car-names-submit';
	document.querySelector('#app input')[1].id = 'racing-count-input';
	document.querySelector('#app button')[1].id = 'racing-count-submit';

	return {
		carNamesInput: document.querySelector('#car-names-input'),
		carNamesSubmit: document.querySelector('#car-names-submit'),
		racingCountInput: document.querySelector('#racing-count-input'),
		racingCountSubmit: document.querySelector('#racing-count-submit'),
	}
}