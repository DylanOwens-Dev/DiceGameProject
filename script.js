'use strict';

//html elements
let dice = document.querySelector('.dice');
let players = document.querySelectorAll('.player');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let active = document.querySelector('.player--active');
let rollBtn = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');
let newBtn = document.querySelector('.btn--new');
let score1 = document.querySelector('#score--0');
let score2 = document.querySelector('#score--1');
let currentScore1 = document.querySelector('#current--0');
let currentScore2 = document.querySelector('#current--1');

let currentScore, activePlayer, playing, scores;

//init function to start the game
let init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  score1.textContent = '0';
  score2.textContent = '0';
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  player2.classList.remove('player--active');
  player1.classList.add('player--active');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
};
init();

//switch player function
let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

//rolling the dice
rollBtn.addEventListener('click', function () {
  if (playing) {
    //generate random num 1-6
    let num = Math.floor(Math.random() * 6) + 1;

    //show dice num
    dice.classList.remove('hidden');
    dice.src = `dice-${num}.png`;

    //check if dice is 1
    if (num !== 1) {
      currentScore += num;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//implementing the hold btn
holdBtn.addEventListener('click', function () {
  if (playing) {
    //set score = current score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if score is > 100 or less
    if (scores[`${activePlayer}`] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

//implmenting new game btn
newBtn.addEventListener('click', init);
