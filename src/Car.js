export default class Car {
  constructor(name) {
    this.name = name;
    this.score = '';
  }

  score() {
    return this.score;
  }

  name() {
    return this.name;
  }

  makeStatus() {
    return `${this.name}: ${this.score}`;
  }

  run() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) > 4) {
      this.score += '-';
    }
  }
}