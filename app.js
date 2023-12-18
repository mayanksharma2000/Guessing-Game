const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) +1;

// console.log(random);

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random) {
        console.log("You are right! Congrats!! random number was", random);
        break;
    } else if(guess < random) {
        guess = prompt("Hint: your guess was too small. please try again");
    }
     else {
       guess = prompt("Hint: your guess was too large. Please try again");
    }
}