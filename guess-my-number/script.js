'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

//////////////////////////////////////////////////////////////

//tworzenie losowego numeru
let secretNumber = Math.trunc(Math.random() * 20 + 1);

//deklaracjia zmiennej do obliczania wyniku wyniku
let score = 20;

//deklaracja high score
let highscore = 0;

//////////////////////////////////////////////
/////////////Funkcje

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

///////////////////////////////////////////////
//deklaracja funkcji na przycisku chceck
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no input
  if (!guess) {
    //document.querySelector('.message').textContent = ' ⛔ No Number!';
    displayMessage(' ⛔ No Number!');
    // when player wind
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct Number!';

    displayMessage('🥳 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    //highscore set
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' 📈 Too high !' : ' 📉 Too low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' 💥 LOL przegrałeś/aś !!! ');
      // document.querySelector('.message').textContent =
      //  ' 💥 LOL przegrałeś/aś !!! ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// // to high number
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = ' 📈 Too high !';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent =
//       ' 💥 LOL przegrałeś/aś !!! ';
//     document.querySelector('.score').textContent = 0;
//   }

//   //to low number
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = ' 📉 Too low !';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent =
//       ' 💥 LOL przegrałeś/aś !!! ';
//     document.querySelector('.score').textContent = 0;
//   }
// }

//functionality of again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing ...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
