const BowlingGame = require("../src/bowlingGame");

describe("BowlingGame", () => {
  describe("behaviour with no strikes or spares", () => {
    it("returns total score of 20 if knock 1 pin for every roll", () => {
      let game = new BowlingGame([
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ]);
      expect(game.finalScore()).toEqual(20);
    });
    it("returns 59 after a variety of rolls", () => {
      let game = new BowlingGame([
        3, 1, 4, 5, 8, 0, 2, 2, 1, 7, 4, 2, 5, 4, 3, 0, 0, 0, 7, 1,
      ]);
      expect(game.finalScore()).toEqual(59);
    });
  });

  describe("behaviour with some strikes", () => {
    it("returns the score + strike bonus", () => {
      let game = new BowlingGame([
        1, 4, 4, 5, 6, 3, 5, 3, 10, 0, 1, 7, 2, 6, 2, 10, 2, 7,
      ]);
      expect(game.finalScore()).toEqual(88);
    });
    it("returns the score + strike bonus", () => {
      let game = new BowlingGame([
        4, 3, 6, 0, 7, 2, 10, 3, 1, 6, 3, 10, 10, 10, 3, 1,
      ]);
      expect(game.finalScore()).toEqual(120);
    });
  });

  describe("behaviour with some spares", () => {
    it("returns the score + spare bonus", () => {
      let game = new BowlingGame([
        8, 0, 5, 3, 9, 1, 5, 5, 1, 3, 0, 4, 5, 5, 1, 3, 9, 0, 3, 4,
      ]);
      expect(game.finalScore()).toEqual(81);
    });
    it("returns the score + spare bonus", () => {
      let game = new BowlingGame([
        8, 0, 5, 3, 9, 1, 5, 5, 1, 3, 0, 4, 5, 5, 1, 3, 9, 0, 3, 4,
      ]);
      expect(game.finalScore()).toEqual(81);
    });
  });

  describe("more examples", () => {
    it("returns 300 for a perfect game", () => {
      let game = new BowlingGame([
        10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      ]);
      expect(game.finalScore()).toEqual(300);
    });
    it("returns 0 for a gutter game", () => {
      let game = new BowlingGame(new Array(20).fill(0));
      expect(game.finalScore()).toEqual(0);
    });
    it("returns the correct score for a game involving strikes, spares and normal frames", () => {
      let game = new BowlingGame([
        1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6,
      ]);
      expect(game.finalScore()).toEqual(133);
    });
  });
});
