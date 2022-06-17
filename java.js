function computerPlay(){
    let randomArray = ['Rock', 'Paper', 'Scissors'];
    return randomArray[Math.floor(Math.random()*randomArray.length)];
}

let userInput = prompt("Choose your hand!");

function game(userInput){
    computerPlay();
    if (userInput === computerPlay()){
        console.log('This is a tie!');
    }else if (userInput === 'Rock'&& computerPlay()==='Paper'){
        console.log("You lost :(");
    }else if (userInput === 'Paper'&& computerPlay()==='Scissors'){
        console.log("You have lost :(");
    }else if (userInput === 'Scissors' && computerPlay()=== 'Rock'){
        console.log("You have lost :(");
    }else if (userInput === 'Rock'&& computerPlay()==='Scissors'){
        console.log("YOU HAVE WON!");
    }else if (userInput === 'Paper' && computerPlay()==='Rock'){
        console.log("YOU HAVE WON!");
    }else if (userInput === 'Scissors' && computerPlay()==='Paper'){
        console.log("YOU HAVE WON!");
    }else {
        console.log("Please enter an appropriate value")
    }
    

}

game();


