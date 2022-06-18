function computerPlay(){
    let randomArray = ['Rock', 'Paper', 'Scissors'];
    return randomArray[Math.floor(Math.random()*randomArray.length)];
}

let player = prompt("Choose your hand!");
let playerSelection = player.toUpperCase();


computer = computerPlay();
const computerSelection = computer.toUpperCase();


const a = "Rock";
const b = "Paper";
const c = "Scissors";

let r = a.toUpperCase();
let p = b.toUpperCase();
let s = c.toUpperCase();

const win = "You have WON!";
const lose = "You have unfortuntely lost : (";
const tie = "It's a tie!";



 
function game(playerSelection, computerSelection){
    if (playerSelection === r && computerSelection === s){
        return win;
    } else if (playerSelection === r && computerSelection === p){
        return lose;
    }else if (playerSelection === p && computerSelection === r){
        return win;
    }else if (playerSelection === p && computerSelection === s){
        return lose;
    }else if (playerSelection === s && computerSelection === p){
        return win;
    }else if (playerSelection === s && computerSelection === r){
        return lose;
    }else if (playerSelection === computerSelection){
        return tie;
    }else{
        console.log("Please input a proper value");
    }
}



let userInput = "You have entered " + playerSelection;
let computerInput = "Computer has entered " + computerSelection;

console.log(userInput);
console.log(computerInput);
console.log(game(playerSelection, computerSelection));








