let playerScore = 0;
let compScore = 0;

function computerPlay(){
    const array = ['rock', 'paper', 'scissors'];
    return array[Math.floor(Math.random()* array.length)];
}


const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        return "This was a tie. Rock and Rock ";
        
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        compScore++
        return "You have lost. Paper beats rock";
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++
        return "You have won. Rock beats scissors";
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        compScore++
        return "You have lost. Scissors beats paper";
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        return "You have won. Paper beats rock!";
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        compScore++
        return "You have lost. Rock beat scissors";
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return "You have won. Scissors beats paper";
    }else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return "This is a tie. Paper is Paper";
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "This is a tie. Scissors is scissors";
    }else {
        return "Please enter valid input";
    }    
     
}  


function loop(){
    for (let i = 0; i<5; i++){
        const playerSelection = prompt("Choose rock, paper or scissors", "Rock, Paper, Scissors").toLowerCase()
        const computerSelection= computerPlay()
        playRound(playerSelection, computerSelection);
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        
    }
    if (playerScore > compScore){
        return 'You have won! Good job!'
    }else if (compScore> playerScore){
        return 'You have lost to the computer'
    }else {
        return 'You have TIED!'
    }
    
   
}

function yourScore(){
    return playerScore
}
function computerScore(){
    return compScore
}

console.log(loop());
console.log('Your Score:' + yourScore());
console.log('Computer Score:' + computerScore());







