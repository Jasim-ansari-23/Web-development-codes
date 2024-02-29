const random_Number = Math.floor(Math.random() * 50) + 1;
console.log(random_Number);
const submitBtn = document.getElementById("submit-btn");
const userInput = document.getElementById("num-input");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".last-result");
const lowerHi = document.querySelector(".lowerHi");

let prevGuesses = [];
let attempts = 1;
const maxAttempts = 10;

submitBtn.addEventListener("click", function () {
  const guess = parseInt(userInput.value);
  validateGuess(guess);
});

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 50) {
    alert("Please enter a valid number between 1 and 50.");
  } else {
    prevGuesses.push(guess);
    displayGuesses(guess);
    checkGuess(guess);
  }
}

function displayGuesses(guess) {
  guessSlot.textContent = prevGuesses.join(", ");
  userInput.value = "";
  attempts++;
  remaining.textContent = maxAttempts - attempts + 1;
}

function checkGuess(guess) {
  if (guess === random_Number) {
    displayMessage(`Congratulations! You guessed it right.`);
    endGame();
  } else if (attempts === maxAttempts) {
    displayMessage(`Game over. The correct number was ${random_Number}.`);
    endGame();
  } else {
    displayMessage(
      guess < random_Number ? `Too low. Try again.` : `Too high. Try again.`
    );
  }
}

function displayMessage(message) {
  lowerHi.textContent = message;
}

function endGame() {
  submitBtn.disabled = true;
  userInput.disabled = true;
};