function getComputerChoice() {
    let rando = Math.random();
    if (rando <= 0.33){
        console.log("CPU chose rock");
        return 1;
    } else if (rando > 0.33 && rando <= 0.66){
        console.log("CPU chose paper");
        return 2;
    } else {
        console.log("CPU chose scissors")
        return 3;
    }
}

function getHumanChoice() {
    let choice = prompt("Input your choice: rock, paper, or scissors");
    if (choice.toLowerCase() === "rock"){
        console.log("You chose rock");
        return 1;
    } 
    else if (choice.toLowerCase() === "paper"){
        console.log("You chose paper");
        return 2;
    } 
    else if (choice.toLowerCase() === "scissors"){
        console.log("You chose scissors");
        return 3;
    } 
    else {
        console.log("Woh woh, you did a woopsies");
        return 0;
    }
}

function playRound(cpuChoice, humanChoice){
    if (cpuChoice === humanChoice){
        console.log('Draw!');
    }
    else if (cpuChoice === 1 && humanChoice === 2){
        console.log('You win! Paper beats Rock');
        humanScore++;
    }
    else if (cpuChoice === 1 && humanChoice === 3){
        console.log('You lose! Scissors beats Rock');
        computerScore++;
    }
    else if (cpuChoice === 2 && humanChoice === 3){
        console.log('You win! Scissors beats Paper');
        humanScore++;
    }
    else if (cpuChoice === 2 && humanChoice === 1){
        console.log('You lose! Paper beats Rock');
        computerScore++;
    }
    else if (cpuChoice === 3 && humanChoice === 1){
        console.log('You win! Rock beats Scissors');
        humanScore++;
    }
    else if (cpuChoice === 3 && humanChoice === 2){
        console.log('You lose! Scissors beats Paper');
        computerScore++;
    }
}

let humanScore = 0;
let computerScore = 0;

console.log("hello world!");
for (let x = 1; x <= 5; x++){
    console.log("Round " + x);
    let humanChoice = getHumanChoice();
    let cpuChoice = getComputerChoice();
    playRound(cpuChoice, humanChoice);
}
console.log("Final scores\n Human: " + humanScore + " CPU: " + computerScore);
