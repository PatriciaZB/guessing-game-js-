const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess:");
  } else {
    guess = prompt("Too low! Enter a new guess:");
  }
}
if (guess === "q") {
  console.log("Ok, you quit.")
} else {
  console.log("Congrats! You win!")
  console.log(`You got it! It took you ${attempts} guesses.`)
}
