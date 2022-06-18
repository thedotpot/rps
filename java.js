function computerPlay(){
    let randomArray = ['Rock', 'Paper', 'Scissors'];
    return randomArray[Math.floor(Math.random()*randomArray.length)];
}

let playerSelection = prompt("Choose your hand!");

computerSelection = computerPlay();


 
function game(playerSelection, computerSelection){
    if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        console.log("You have won!");
    } else if (playerSelection === 'Rock' && computerSelection === "Paper"){
        console.log("You have lost");
    }else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        console.log("You have won!");
    }else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        console.log("You have lost");
    }else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        console.log("You have won!");
    }else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        console.log("You have lost");
    }else if (playerSelection === computerSelection){
        console.log("It's a tie");
    }else{
        console.log("Please input a proper value");
    }
}

game(playerSelection, computerSelection);

let userInput = "You have entered " + playerSelection;
let computerInput = "Computer has entered " + computerSelection;

console.log(userInput);
console.log(computerInput);








