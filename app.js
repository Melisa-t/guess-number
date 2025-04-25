const replayButton = document.querySelector(`.again-btn`)
const checkButton = document.querySelector(`.check-btn`)

let numberBox = document.querySelector(`.number`)
let warningText = document.querySelector(`.warning-box`)
let score = document.querySelector(`.score-point`)
let highScore = document.querySelector(`.hs-point`)

let guessNumber = document.querySelector(`.guess`)

let correctNumber = Math.floor(Math.random() * 21);

const checkNumber = function (num) {

    console.log(correctNumber)
    if (num < correctNumber) {
        warningText.textContent = `Too low!`
        score.textContent--
    } else if (num > correctNumber) {
        warningText.textContent = `Too high!`
        score.textContent--
    } else {
        warningText.textContent = `Congrats!`
        score.textContent = `${score}`
    }
}

checkButton.addEventListener(`click`, () => {
    checkNumber(guessNumber.value)
})

replayButton.addEventListener(`click`, () => {
    score.textContent=20
    warningText.textContent=`Start guessing!`
    highScore.textContent=``
})
