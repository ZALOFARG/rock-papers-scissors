let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const number = Math.random()
  if (number <= 0.33) {
    return "rock"
  } else if (number <= 0.66) {
    return "paper"
  } else {
    return "scissors"
  }
}

function getHumanChoice() {
  const decision = prompt("what's your choice?\n").toLowerCase();
  
  console.log(`human decision was ${decision}`)
  return decision;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore+=1
    console.log(`you lose! paper beats rock!`)
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore+=1
    console.log(`you lose! scissors beats paper!`)
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore+=1
    console.log(`you lose! rock beats scissors!`)
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore+=1
    console.log(`you win! paper beats rock!`)
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore+=1
    console.log(`you win! scissors beats paper!`)
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore+=1
    console.log(`you win! rock beats scissors!`)
  } else if (humanChoice === computerChoice) {
    humanScore+=1;
    computerScore+=1;
    console.log(`that's a tie!`)
  }
}

function playGame(){
  for (let round = 1; round <= 5; round++) {
    console.log(`--- ROUND ${round} ---`)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("=== GAME OVER ===");
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry, the computer won the game.");
  } else {
    console.log("It's a tie overall!");
  }
}

playGame();