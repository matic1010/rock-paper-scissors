const CHOICES = ['rock', 'paper', 'scissors']

function getComputerChoice () {
  const randomIndex = Math.floor(Math.random() * CHOICES.length)
  return CHOICES[randomIndex]
}

function getPlayerChoice () {
  let choice
  while(!CHOICES.includes(choice)) {
    choice = prompt("rock, paper or scissors?").toLowerCase()
  }

  return choice
}

function playRound () {
  const computerChoice = getComputerChoice()
  const playerChoice = getPlayerChoice()

  console.log(`Player chose ${playerChoice}, computer chose ${computerChoice}`)

  if(playerChoice === "rock") {
    if(computerChoice === "scissors") return 1
    if(computerChoice === "paper") return -1
    return 0
  }

  if(playerChoice === "paper") {
    if(computerChoice === "rock") return 1
    if(computerChoice === "scissors") return -1
    return 0
  }

  if(playerChoice === "scissors") {
    if(computerChoice === "paper") return 1
    if(computerChoice === "rock") return -1
    return 0
  }
}

function game() {
  let computerScore = 0
  let playerScore = 0

  for(let i = 1; i <= 5; i++) {
    console.log('ROUND ' + i)
    const result = playRound();
    if(result === 1) playerScore++;
    if(result === -1) computerScore++;
    console.log(`PLAYER ${playerScore} - ${computerScore} COMPUTER`)
    console.log("------------------")
  }

  console.log('FINAL RESULT:')
  console.log(`PLAYER ${playerScore} - ${computerScore} COMPUTER`)
}
