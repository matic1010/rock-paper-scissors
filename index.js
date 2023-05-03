const choices = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('.selection-button');
buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    const playerChoice = e.target.id;
    console.log(playRound(playerChoice, getComputerChoice()));
  })
);

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
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

function generateResultString(result) {
  if (result === -1) return 'Computer wins!';
  else if (result === 1) return 'Player wins!';
  else return "It's a draw!";
}
