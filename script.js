'use strict';

//Dom Objects
let result = document.querySelector('.number');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
const button = document.querySelector('check');
let input = document.querySelector('.guess');
let body = document.querySelector('body');

//Num Varible
let hScore = 0;
let tScore = 20;
let secretNum = ranNum();

//Function to check the Answer
function check() {
  let guess = input.value - 0; //Subtracted to convert stirng in number

  //Logic For Checking Answer and showing output
  if (guess) {
    if (tScore > 1) {
      if (guess === secretNum) {
        message.textContent = 'Correct Number 🔥🔥🔥';
        result.textContent = secretNum;
        body.style.backgroundColor = '#60b347';
        result.style.width = '30rem';
        if (tScore > hScore) {
          hScore = tScore;
          highScore.textContent = hScore;
        }
        input.disabled = true; //Disabelling input field & btn so user can't enter any different number AFTER WINNING THE GAME
        button.disabled = true;
      } else {
        if (guess > secretNum) {
          tScore--;
          score.textContent = tScore;
          message.textContent = 'To High 📈 ';
        } else {
          tScore--;
          score.textContent = tScore;
          message.textContent = 'To Low 📉';
        }
      }
    } else {
      message.textContent = 'You lose❗, Try Again!';
      tScore = 0;
      score.textContent = tScore;
      input.disabled = true; //Disabelling input field & btn so user can't enter any different number AFTER LOOSING THE GAME
      button.disabled = true;
    }
  } else {
    message.textContent = 'Please Enter a valid Number..😕';
  }
}

//Again Function here
function again() {
  tScore = 20;
  score.textContent = tScore;
  secretNum = ranNum();
  message.textContent = '🎍 Start Gussing Again💁😍';
  document.querySelector('.guess').value = '?';
  result.textContent = '?';
  input.disabled = false;
  button.disabled = false;
  body.style.backgroundColor = '#222';
  result.style.width = '15rem';
}

//Function to generate perfect random number
function ranNum() {
  let num = Math.floor(Math.random() * 30 + 1);
  if (num > 29) --num;
  else if (num < 1) ++num;
  return num;
}

//Written By Ani💁
