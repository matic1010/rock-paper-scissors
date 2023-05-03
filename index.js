const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let round = 0;

const playerChoiceDisplay = document.querySelector('#player-choice');
const computerChoiceDisplay = document.querySelector('#computer-choice');
const playerScoreDipslay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const buttons = document.querySelectorAll('.selection-button');
const modal = document.querySelector('#modal');
const modalResult = document.querySelector('.end-result');
const resetButton = document.querySelector('.reset');

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    const playerChoice = e.target.id;
    handleClick(playerChoice);
  })
);

resetButton.addEventListener('click', reset);

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function handleClick(playerChoice) {
  const computerChoice = getComputerChoice();
  updateSelectionDisplay(playerChoice, computerChoice);
  const result = playRound(playerChoice, computerChoice);
  updateScore(result);
  checkForWin();
}

function checkForWin() {
  if (round >= 5) {
    if (playerScore > computerScore) modalResult.textContent = 'You win!';
    else if (playerScore < computerScore) modalResult.textContent = 'You lose!';
    else modalResult.textContent = "It's a tie";
    endGame();
  }
}

function endGame() {
  buttons.forEach((button) => {
    button.setAttribute('disabled', 'true');
  });
  setTimeout(function () {
    modal.style.display = 'block';
  }, 1000);
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  buttons.forEach((button) => {
    button.removeAttribute('disabled', 'false');
  });
  modal.style.display = 'none';
}

function choiceToEmoji(choice) {
  if (choice === 'rock') return '🪨';
  if (choice === 'paper') return '🧻';
  if (choice === 'scissors') return '✂️';
}

function updateSelectionDisplay(playerChoice, computerChoice) {
  playerChoiceDisplay.textContent = choiceToEmoji(playerChoice);
  computerChoiceDisplay.textContent = choiceToEmoji(computerChoice);
}

function updateScoreDisplay() {
  playerScoreDipslay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function updateScore(result) {
  if (result === -1) computerScore++;
  if (result === 1) playerScore++;
  round++;
  updateScoreDisplay();
}

function playRound(playerChoice, computerChoice) {
  // determine who won based on player and computer choice. -1 -> computer won, 1 -> player won, 0 -> draw
  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') return -1;
    if (computerChoice === 'scissors') return 1;
    return 0;
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') return -1;
    if (computerChoice === 'rock') return 1;
    return 0;
  } else {
    if (computerChoice === 'rock') return -1;
    if (computerChoice === 'paper') return 1;
    return 0;
  }
}
