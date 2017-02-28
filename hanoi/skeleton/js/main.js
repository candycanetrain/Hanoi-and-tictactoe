const HanoiGame = require("./game.js")
const HanoiView = require("./hanoi-view.js")
console.log("testing");

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});

console.log("testing");
