
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
return 'It\'s a draw.'
}else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
playerSelection === 'paper' && computerSelection === 'rock' ||
playerSelection === 'scissors' && computerSelection === 'paper'){
playerScore ++
return `You win, ${playerSelection} beats ${computerSelection}!`   
}else {
computerScore++
return`You lose, ${computerSelection} beats ${playerSelection}!`   
    }
}

function game(){
for (let i = 0; i < 5; i++){   
const playerSelection = prompt('Choose between rock, paper or scissors').toLowerCase()
console.log(playRound(playerSelection,getComputerChoice()))
   }
}

game()

function trackScore() {
if (playerScore > computerScore) {
console.log(`**ATTENTION** YOU WON! You scored ${playerScore} while this stupid machine scored ${computerScore}.`)
}else if (playerScore < computerScore){
console.log(`**ATTENTION** YOU LOST, TRY AGAIN! You scored ${playerScore} while computer beat you with the score of ${computerScore}.`)
    }else {console.log(`**ATTENTION** After the 5 rounds you tied with the computer!`)}
}
trackScore()