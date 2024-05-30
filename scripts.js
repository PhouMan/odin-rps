function getComputerChoice() {
    let rando = Math.random();
    if (rando <= 0.33){
        // console.log("CPU chose rock");
        return 1;
    } else if (rando > 0.33 && rando <= 0.66){
        // console.log("CPU chose paper");
        return 2;
    } else {
        // console.log("CPU chose scissors")
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
        update('Draw!');
    }
    else if (cpuChoice === 1 && humanChoice === 2){
        update('You score! Paper beats Rock');
        humanScore++;
    }
    else if (cpuChoice === 1 && humanChoice === 3){
        update('CPU scores! Scissors beats Rock');
        computerScore++;
    }
    else if (cpuChoice === 2 && humanChoice === 3){
        update('You score! Scissors beats Paper');
        humanScore++;
    }
    else if (cpuChoice === 2 && humanChoice === 1){
        update('CPU scores! Paper beats Rock');
        computerScore++;
    }
    else if (cpuChoice === 3 && humanChoice === 1){
        update('You score! Rock beats Scissors');
        humanScore++;
    }
    else if (cpuChoice === 3 && humanChoice === 2){
        update('CPU scores! Scissors beats Paper');
        computerScore++;
    }
}
function update(results){
    const container = document.querySelector("#results");
    const hScore = document.querySelector("#human-score");
    const cScore = document.querySelector("#cpu-score");
    container.textContent = results;
    hScore.textContent = `Your Score: ${humanScore}`;
    cScore.textContent = `CPU Score: ${computerScore}`;
}
let roundNum = 1;
let humanScore = 0;
let computerScore = 0;

const rock_btn = document.querySelector("#rock");
const paper_btn = document.querySelector("#paper");
const scissors_btn = document.querySelector("#scissors");

rock_btn.addEventListener("click", function() {
    if (humanScore === 5){
        update("You won!")
    } else if (computerScore === 5){
        update("You lost!")
    } else {
        playRound(getComputerChoice(), 1);
    }
    }
);
paper_btn.addEventListener("click", function() {
    if (humanScore === 5){
        update("You won!")
    } else if (computerScore === 5){
        update("You lost!")
    } else {
        playRound(getComputerChoice(), 2);
    }
    }
);

scissors_btn.addEventListener("click", function() {
    if (humanScore === 5){
        update("You won!")
    } else if (computerScore === 5){
        update("You lost!")
    } else {
        playRound(getComputerChoice(), 1);
    }
    }
);

