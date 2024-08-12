// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in

let number = 92
// Prompt the user to guess the number

let userguess = prompt("Guess the number")

// Cast the user input to a number

userguess = parseInt(userguess)

// Create a new variable called attempts and set it to 0

let attemps = 0


// Create a while loop that runs while the user guess is not equal to your number

while(userguess != number){
  if(userguess>number){
    console.log("Too High!")
  }
  else if(userguess<number){
    console.log("Too Low!")
  }

  userguess = prompt("Guess the number")
  userguess = parseInt(userguess)
  attemps++
}

console.log("You got it!")
console.log(`it took ${attemps} attemps`)
// In the while loop, prompt the user to guess the number again (remember to cast)


// In the while loop, increase the attempts by 1


// In the while loop, write an if statement that does the following
// If the user guess is higher, say "Too high!"
// If the user guess is lower, say "Too low!"
// If the user guess is right, say "You got it!"




// After the while loop, print "It took (attempts) attempts" 

