const CHOICES = ['rock', 'paper', 'scissors']

const selectionButtons = document.querySelectorAll('.selection-button')
const resultDisplay = document.getElementById("result")
const playerChoiceDisplay = document.getElementById("player-choice")
const computerChoiceDisplay = document.getElementById("computer-choice")

selectionButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const selection = e.target.dataset.selection
    const result = playRound(selection)
    if(result === 1) {
      resultDisplay.textContent = "Player wins!"
    } else if(result === -1) {
      resultDisplay.textContent = "Computer wins!"
    } else {
      resultDisplay.textContent = "It's a draw!"
    }
  })
})

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

function playRound (playerChoice) {
  const computerChoice = getComputerChoice()

  playerChoiceDisplay.textContent = playerChoice
  computerChoiceDisplay.textContent = computerChoice

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
