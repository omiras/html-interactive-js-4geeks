let total = +prompt('How many km are left to go?');

// Your code below:
let answer; 
if (total > 100) {
    answer = "We still have a bit of driving left to go";
}

else if (total > 50 && total <=  100) {
   answer = "We'll be there in 5 minutes"
}

else {
    answer = "I'm parking. I'll see you right now"
}

console.log(answer);