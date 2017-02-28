const View = require("./ttt-view.js")// require appropriate file
const Game = require("../../solution/game.js")// require appropriate file

$( () => { //this makes it wait until DOM is loaded before grabbing the element
  let $board = $(".ttt"); //will return jquery obj that wraps thatfigure
  //new Game(ddd)
  let game = new Game();
  new View(game, $board);
  //new View(rootElement)
  // Your code here
});

//need root element. need to grab element from DOM.
