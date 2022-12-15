class BowlingGame {
  constructor(rolls = []) {
    this.rolls = rolls;
    this.current_roll_index = 0;
    this.score = 0;
  }

  roll(pinsKnockedDown) {
    this.rolls.push(pinsKnockedDown);
  }

  finalScore() {
    for (let i = 1; i < 11; i++) {
      if (this.strike()) {
        this.score += 10 + this.strikeBonus();
        this.current_roll_index += 1;
      } else if (this.spare()) {
        this.score += 10 + this.spareBonus();
        this.current_roll_index += 2;
      } else {
        this.score += this.frameTotal();
        this.current_roll_index += 2;
      }
      console.log(`Score after Frame ${i}: ${this.score}`);
    }
    return this.score;
  }

  strike() {
    return this.rolls[this.current_roll_index] === 10;
  }

  spare() {
    return (
      this.rolls[this.current_roll_index] +
        this.rolls[this.current_roll_index + 1] ===
      10
    );
  }

  strikeBonus() {
    return (
      this.rolls[this.current_roll_index + 1] +
      this.rolls[this.current_roll_index + 2]
    );
  }

  spareBonus() {
    return this.rolls[this.current_roll_index + 2];
  }

  frameTotal() {
    return (
      this.rolls[this.current_roll_index] +
      this.rolls[this.current_roll_index + 1]
    );
  }
}

module.exports = BowlingGame;
