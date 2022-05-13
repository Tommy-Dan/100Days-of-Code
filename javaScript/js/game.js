// Create Secrete Number
var secretNumber = 5;

// Ask user to Guess
var guess = prompt("Guess a number");

// Check Guess
if(Number(guess) === secretNumber){
    alert("CONGRATULATION YOU GOT IT RIGHT");
}

// Check if Guess is High?
else if(Number(guess) > secretNumber) {
    alert("Too High: Guess again!");
}

// Check if Guess is empty
else if(Number(guess) == ' '){
    alert("Please guess a number!");
}

// Otherwise check if Guess is Low
else{
    alert("Too Low: Guess again!");
}