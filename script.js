'use strict';

let dice = document.querySelector('.dice');
let players = document.querySelectorAll('.player');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let active = document.querySelector('.player--active');
let rollBtn = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');
let newBtn = document.querySelector('.btn--new');

let num = Math.floor(Math.random() * 6) + 1;

//init function to start the game
let init = function () {};

rollBtn.addEventListener('click', function () {
  dice.classList.remove('hidden');
  dice.src = `dice-${num}`;
});
