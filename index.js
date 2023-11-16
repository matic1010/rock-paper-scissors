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
    if(computerChoice === "scissors") return "Player wins"
    if(computerChoice === "paper") return "Computer wins"
    return "It's a draw"
  }

  if(playerChoice === "paper") {
    if(computerChoice === "rock") return "Player wins"
    if(computerChoice === "scissors") return "Computer wins"
    return "It's a draw"
  }

  if(playerChoice === "scissors") {
    if(computerChoice === "paper") return "Player wins"
    if(computerChoice === "rock") return "Computer wins"
    return "It's a draw"
  }
}
