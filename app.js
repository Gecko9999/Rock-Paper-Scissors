
let player = 0
let computer = 0

function getComputerChoice(){
// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
const options = ['rock', 'paper', 'scissors']
const selection = options[Math.floor(Math.random()*options.length)]
return selection
}

function playRound(playerSelection, computerSelection){

if (playerSelection === computerSelection) {
let message1 = 'It\'s a draw.'
return message1
}
else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper'){
    let message2 = `You win, ${playerSelection} beats ${computerSelection}!`
    player ++
    return message2
}else {
    let message3 = `You lose, ${computerSelection} beats ${playerSelection}!`
    computer ++
    return message3
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
    if (player > computer) {
        console.log(`**ATTENTION** YOU WON! You scored ${player} while this stupid machine scored ${computer}.`)
    }else if (player < computer){
        console.log(`**ATTENTION** YOU LOST, TRY AGAIN! You scored ${player} while computer beat you with the score of ${computer}.`)
    }
}
trackScore()