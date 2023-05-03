const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  console.log(choices[randomIndex]);
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
