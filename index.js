const choices = ['rock', 'paper', 'scissors'];

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

function game() {
  let count = 1;
  let playerScore = 0;
  let computerScore = 0;
  while (count <= 5) {
    console.log(`ROUND ${count}`);
    let playerChoice = '';
    while (!choices.includes(playerChoice)) {
      playerChoice = prompt('Rock, paper, or scissors?').toLowerCase();
    }
    const computerChoice = getComputerChoice();
    console.log(
      `Player chose ${playerChoice} and computer chose ${computerChoice}`
    );
    const result = playRound(playerChoice, computerChoice);
    if (result === 1) playerScore++;
    if (result === -1) computerScore++;
    console.log(generateResultString(result));
    console.log(`Player ${playerScore} - ${computerScore} Computer`);
    count++;
  }
  console.log('---------------------');
  console.log(`Final Score:`);
  console.log(`Player ${playerScore} - ${computerScore} Computer`);
}
