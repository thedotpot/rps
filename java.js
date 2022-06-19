const playerScore = 0;
const compScore = 0;

function computerPlay(){
    const array = ['rocks', 'paper', 'scissors'];
    return array[Math.floor(Math.random()* array.length)];
}

const playerSelection = prompt("Choose rock, paper or scissors");
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        return "This was a tie. Rock and Rock ";
        
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return "You have lost. Paper beats rock";
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return "You have won. Rock beats scissors";
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return "You have lost. Scissors beats paper";
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return "You have won. Paper beats rock!";
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return "You have lost. Rock beat scissors";
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
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
        const computerSelection= computerPlay()
        console.log(playRound(playerSelection, computerSelection));
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        
    }
}

loop();




