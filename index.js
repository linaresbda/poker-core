const Game = require('./game');

function init (){
  let game = new Game(3, 100);
  game.fourthStreet();
  game.fifthStreet();
}

init();
