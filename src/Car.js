class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  get score() {
    return this.score;
  }
  
  run() {
    if (Random.pickNumberInRange(0, 9) > 4) {
      this.score += 1;
    }
  }


}