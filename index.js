const CHOICES = ['rock', 'paper', 'scissors']

function getComputerChoice () {
  const randomIndex = Math.floor(Math.random() * CHOICES.length)
  return CHOICES[randomIndex]
}