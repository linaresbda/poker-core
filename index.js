const Hand = require('./hand');
const Card = require('./card');
const Player = require('./player');
const _ = require('underscore');

let deck = generateDeck();
let shuffleDeck = fnShuffleDeck(deck);
let players = [];

function initGame(numberPlayers, credits) {
  deck = generateDeck();
  shuffleDeck = fnShuffleDeck(deck);
  players = generatePlayers(numberPlayers, credits);
}

function generateDeck() {
  let deck = [];
  let suits = ['diamond', 'spade', 'club', 'heart'];
  let color = "";

  suits.forEach(suit => {
    switch (suit) {
      case 'diamond':
        color = 'red';
        break;
      case 'heart':
        color = 'red';
        break;
      default:
        color = 'black';
        break;
    }
    for (let i = 1; i <= 13; i++) {
      let value = "";
      switch (i) {
        case 1:
          value = 'a';
          break;
        case 11:
          value = 'j';
          break;
        case 12:
          value = 'q';
          break;
        case 13:
          value = 'k';
          break;
        default:
          value = i.toString();
          break;
      }
      deck.push(new Card(suit, value, color));
    }
  });
  return deck;
}

function fnShuffleDeck(deck) {
  return _.shuffle(deck);
}

function generatePlayers(numberPlayers, credits) {
  let players = [];
  for (let i = 0; i < numberPlayers; i++) {
    let hand = generateHand();
    players.push(new Player(hand, credits));
  }
  console.log(deck);
  console.log(shuffleDeck);
  return players;
}

function generateHand() {
  let hand = [];
  for (let j = 0; j <= 1; j++) {
    hand.push(shuffleDeck[0]);
    shuffleDeck.shift();
  }
  return hand;
}

initGame(2, 1000);