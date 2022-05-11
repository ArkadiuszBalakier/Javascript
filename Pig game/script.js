'use strict';

///////////////////////////////////////
///////// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores;
let currentScore;
let activePlayer;
let playing;
///////////////////////////////////////
///////// Functions

const newGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('.hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
newGame();
const switchPlayer = function () {
  //switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0; // resetuje current punkty aktualnego gracz
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0; // resetuje zmienna current score zeby 2 gracz nie zaczynal z pnktami poprzedniego gracza
  player0El.classList.toggle('player--active'); // dodaje badz usuwa class sprawdzajac czy jest czy nie ma
  player1El.classList.toggle('player--active');
  alert(`TURA GRACZA ${activePlayer}`);
};

///////////////////////////////////////
///////// Game functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // nazwa obrazku kosci zastepowane przez wygenerowany nr - podstawia wlasciwy obrazek

    //3. Check for rolled 1: if true ,
    if (dice !== 1) {
      //add dice to curent score
      currentScore += dice; //dodaje do currenscore = curentscore + rzut koscia
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active players score
    scores[activePlayer] += currentScore; //scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2 check if player score is >=100
    if (scores[activePlayer] >= 100) {
      //finish game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch players
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', newGame);
