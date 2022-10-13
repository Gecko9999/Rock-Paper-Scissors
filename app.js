const buttons = document.querySelectorAll('button')
const output = document.querySelector('.output')
const player = document.querySelector('.player')
const computer = document.querySelector('.computer')
const finalDiv = document.querySelector('.finalDiv')

player.innerText = 0
computer.innerText = 0
 let playerScore = 0
 let computerScore = 0

// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice(){
const options = ['rock', 'paper', 'scissors']
const selection = options[Math.floor(Math.random()*options.length)]
return selection
}

function playRound(playerSelection, computerSelection){
if (playerSelection === computerSelection) {
output.innerText = 'It\'s a draw.'
}else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
playerSelection === 'paper' && computerSelection === 'rock' ||
playerSelection === 'scissors' && computerSelection === 'paper'){
output.innerText = `You win, ${playerSelection} beats ${computerSelection}!`   
player.innerText = `${playerScore += 1}`
}else {
output.innerText = `You lose, ${computerSelection} beats ${playerSelection}!`   
computer.innerText = `${computerScore += 1}`
    }
}

 buttons.forEach(button => {
     button.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = `${button.className}`
        playRound(playerSelection,computerSelection)
        checkScore(playerScore, computerScore)
     })
 })

 function checkScore (playerScore,computerScore){
    if (playerScore === 5){
const declaration = document.createElement('h3')
declaration.innerText = `Congratulations, you won ${playerScore} to ${computerScore}!`
finalDiv.appendChild(declaration)
    }else if (computerScore === 5){
        const declaration = document.createElement('h3')
        declaration.innerText = `Try again, you lost ${playerScore} to ${computerScore}!`
        finalDiv.appendChild(declaration)
    }
 }