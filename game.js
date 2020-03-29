const Hand = require('./hand');
const Card = require('./card');
const Player = require('./player');
const _ = require('underscore');

class Game{
  constructor(numberPlayers, credits){
    this.flop;
    this.numberPlayers = numberPlayers;
    this.deckShuffle;
    this.credits = credits;
    this.players;
    this.initGame(this.numberPlayers, this.credits);
  }

  initGame(numberPlayers, credits) {
    this.shuffleDeck = this.fnShuffleDeck(this.generateDeck());
    this.players = this.generatePlayers(numberPlayers, credits);
  }

  generateDeck() {
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
  
  fnShuffleDeck(deck) {
    return _.shuffle(deck);
  }
  
  generatePlayers(numberPlayers, credits) {
    let players = [];
    for (let i = 0; i < numberPlayers; i++) {
      let hand = this.generateHand();
      players.push(new Player(hand.cards, credits));
    }
    return players;
  }
  
  generateHand() {
    let cards = [];
    for (let j = 0; j <= 1; j++) {
      cards.push(this.shuffleDeck[0]);
      this.shuffleDeck.shift();
    }
    return new Hand(cards);
  }
  
  generateFlop(){
    let flop = [];
    for (let i = 0; i < 3; i++) {
      flop.push({});
    }
    return flop;
  }
}

module.exports = Game;