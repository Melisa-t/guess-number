const replayButton = document.querySelector(`.again-btn`);
const checkButton = document.querySelector(`.check-btn`);

let numberBox = document.querySelector(`.number`);
let warningText = document.querySelector(`.warning-box`);
let score = document.querySelector(`.score-point`);
let highScore = document.querySelector(`.hs-point`);
const scoresArray = [];

let guessNumber = document.querySelector(`.guess`);

let correctNumber = Math.floor(Math.random() * 20 + 1);

const checkNumber = function (num) {
    if (num === `0` || num === 0 || num === `` || num === null || num === undefined || num > 20) {
        alert(`Please enter a valid number!`)
    }
  else if (num < correctNumber) {
    warningText.textContent = `Too low!`;
    score.textContent--;
    numberBox.textContent = `${guessNumber.value}`;
  } else if (num > correctNumber) {
    warningText.textContent = `Too high!`;
    score.textContent--;
    numberBox.textContent = `${guessNumber.value}`;
  } else {
    warningText.textContent = `Correct!`;
    correctNumber = Math.floor(Math.random() * 20 + 1);
    scoresArray.push(score.textContent);
    score.textContent = 20;
    numberBox.textContent = `${guessNumber.value}`;
  }
};

const findHighScore = function (scoreArr) {
  let maxScore = 0;
  for (let i = 0; i <= scoreArr.length; i++) {
    if (maxScore < scoreArr[i]) maxScore = scoreArr[i];
  }
  highScore.textContent = maxScore;
};

checkButton.addEventListener(`click`, () => {
  checkNumber(guessNumber.value);
  findHighScore(scoresArray);
});

replayButton.addEventListener(`click`, () => {
  score.textContent = 20;
  warningText.textContent = `Start guessing!`;
  highScore.textContent = ``;
  guessNumber.value = ``;
  scoresArray = [];
  correctNumber = Math.floor(Math.random() * 20 + 1);
});
