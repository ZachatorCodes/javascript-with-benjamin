// WARMUP
// Create a non-constant variable with your age, and a constant variable with you name.

// Hint: what keywords do we use for constant and non constant variables?

// Two words to declare variables: const & let

const myName3 = "Zach";
let myAge = 22;

// REVIEW

// There are three types of expressions in JavaScript

// 1. Constant Expression - Expresssions that always result in the same answer
console.log(1 + 1);
console.log(49);
console.log(100 / 10);

// 2. Assignment Expression

// When we are using asssignment expression OR creating variables, we use something called camelcase
// For variables, we start with a lowercase letter, and we capitalize every other letter of a first word
const zachFavoriteFlavor = "Cookie Dough";
const benjaminFavoriteFlavor = "Cookies and cream";

// 3. Lookup Expression
console.log(zachFavoriteFlavor);
console.log(benjaminFavoriteFlavor);

const myfavoriteColor = "blue";
console.log(myfavoriteColor);
let myName = "Benjamin";
console.log(myName);
myName = "benjamin bhuta";
console.log(myName);
// Let allows us to REASSSIGN a variable
// We don't need to redclare the variable (which means use const or let again)
// We can just change what it equals

let sillyVar = "cat";
sillyVar = "dog";

const prompt = require("prompt-sync")(); // IMPORT

// NUMBER GUESSING GAME (put in new file)
const number = Math.floor(Math.random() * 100); // generate random number
// Math.floor rounds a number
// Math.random comes up with a random number between 0 and 1
// So, if we multiple it by 100, we get a random number between 1 and 100
// Then we use Math.floor to make it a full number


let win = false; // BOOLEAN VARIABLE (only true or false) WIN CONDITION

console.log("WELCOME TO GUESSING GAME");

// while loop (continues to run until number is guessed)
while (win === false) {
  let guess = prompt("What is your guess: ");
  // condition / if statements
  if (guess > number) {
    console.log("Your guess is too high! Try again!");
  } else if (guess < number) {
    console.log("Your guess is too low! Try again!");
  } else {
    win = true;
  }
}

console.log(`You guessed correctly! The number is ${number}!`); // String interpolation

