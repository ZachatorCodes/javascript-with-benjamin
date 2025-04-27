// WARMUP
// Create a constant variable for your favorite sports team
// Example: keyword variableName = data
const benFavTeam = "bostonCeltics";
// Create a changeable variable for your age
let benAge = 12;
// Reassign your age
// Example: variableName = data
benAge = 12;
// Print your team and age to the console
console.log(benFavTeam);
console.log(benAge);

/////////////////////////////////////////////////

// Import Console Promp Function
const prompt = require("prompt-sync")();

console.log("Welcome to Rock Paper Scissors!\n");

let userScore = 0;
let cpuScore = 0;
let userChoice;
let cpuChoice;

while (userScore < 2 || cpuScore < 2) {
  userChoice = parseInt(prompt("Pick 1 (Rock), 2 (Scissors), or 3 (Paper): "));
  cpuChoice = Math.floor(Math.random() * 3) + 1;
  
  while (userChoice !== 1 && userChoice !== 2 && userChoice !== 3) {
    console.log("Your option is not valid. Please try again.\n");
    userChoice = prompt("Pick 1 (Rock), 2 (Scissors), or 3 (Paper): ");
  }

  if (cpuChoice === userChoice) {
    console.log("You both played the same option. Try again!\n");
  }
  else if (cpuChoice === 1) {
    console.log("CPU picked Rock")
    if (userChoice === 2) {
      console.log("Player picked Scissors")
      console.log("CPU gets a point!\n")
      cpuScore++;
    }
    if (userChoice === 3) {
      console.log("Player picked Paper")
      console.log("Player gets a point!\n")
      userScore++;
    }
  }
  else if (cpuChoice === 2) {
    console.log("CPU picked Scissors")
    if (userChoice === 1) {
      console.log("Player picked Rock")
      console.log("Player gets a point!\n")
      userScore++;
    }
    if (userChoice === 3) {
      console.log("Player picked Paper")
      console.log("CPU gets a point!\n")
      cpuScore++;
    }
  }
  else if (cpuChoice === 3) {
    console.log("CPU picked Paper")
    if (userChoice === 1) {
      console.log("Player picked Rock")
      console.log("CPU gets a point!\n")
      cpuScore++;
    }
    if (userChoice === 2) {
      console.log("Player picked Scissor")
      console.log("Player gets a point!\n")
      userScore++;
    }
  }

  console.log("Score");
  console.log("Player: " + userScore);
  console.log("CPU: " + cpuScore + "\n");
}

if (userScore === 2) {
  console.log("User wins!")
}
else {
  console.log("CPU wins!")
}