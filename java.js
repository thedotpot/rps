/*function computerPlay(){
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



 
function playRound(playerSelection, computerSelection){
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

function game(){
    for (let i = 0; i< 5; i++){
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
    }
}

console.log(game());
*/

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




