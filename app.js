const playerSelection = prompt('Choose between rock, paper or scissors').toLowerCase()


function getComputerChoice(){
// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
const options = ['rock', 'paper', 'scissors']
const selection = options[Math.floor(Math.random()*options.length)].toLowerCase()
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
    return message2
}else {
    let message3 = `You lose, ${computerSelection} beats ${playerSelection}!`
    return message3
}
}

// console.log(playRound(playerSelection,getComputerChoice()))

function game(){
   for (let i = 0; i < 5; i++){
const games = playRound(playerSelection,getComputerChoice())

   }
}

game()