const targetNum = Math.floor(Math.random() * maximun) + 1;

let guess = parteInt(prompt("Enter your first guess!"));
let attempts = 1;

while (guess !== targetNum) {
  attempts++;
  if (guess > targetNum) {
    guess = parteInt(prompt("Too high! Enter a new guess:"));
  } else {
    guess = parseInt(prompt("Too low! Enter a new guess:"))
  }
}
