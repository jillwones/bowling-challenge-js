const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const BowlingGame = require("./bowlingGame");

class UserInput {
  constructor(game) {
    this.game = game;
    this.frame = 1;
  }

  run() {
    console.log("Welcome to the Bowling Scorecard Program");
    rl.question(
      "Would you like to see some instructions? Type y/n\n",
      (answer) => {
        if (answer === "y") {
          this.intro();
          this.getInfo();
        } else if (answer === "n") {
          this.getInfo();
        } else {
          console.log("You failed to type y or n...");
          console.log("Here are the instructions...");
          this.intro();
          this.getInfo();
        }
      }
    );
  }

  getInfo() {
    rl.question(`What was your score for Frame ${this.frame}?\n`, (answer) => {
      if (answer.includes(",")) {
        let frame_array = answer.split(",");
        frame_array.forEach((pinsKnocked) => {
          this.game.roll(parseInt(pinsKnocked));
        });
      } else {
        this.game.roll(parseInt(answer));
      }
      this.frame += 1;
      if (this.frame === 11) {
        this.game.finalScore();
        rl.close();
      } else {
        this.getInfo();
      }
    });
  }

  intro() {
    console.log("Basic Instructions:");
    console.log("1. If you score a strike simply type 10");
    console.log("2. If you play both rolls of a frame");
    console.log("type the result from both rolls seperated by a comma e.g.");
    console.log("4,5 or 8,2");
    console.log("3. On the 10th frame, if you score a strike");
    console.log("on your first roll");
    console.log("or score a spare in the first 2 rolls");
    console.log("then you get to play a third roll");
    console.log(
      "and will then need to input the data for the 3 rolls like this:"
    );
    console.log("10,10,10");
    console.log("or");
    console.log("8,2,5\n");
  }
}

//uncomment the 3 lines below this to run

// let game = new BowlingGame();
// UI = new UserInput(game);
// UI.run();
