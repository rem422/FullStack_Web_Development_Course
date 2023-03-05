 //Use a For Loop to print (console.log()) out the word "hello" 5 times.
// Do this with a While Loop and a For Loop

// For loops
for(let i = 0; i < 5; i++) {
    console.log("Hello");
}

// while loops
let x = 0;

while (x < 5) {
    console.log("Hello");
    x++;
}


// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop


// While Loops
let num = 1

while (num < 25) {
    if(num % 2 !== 0) {
        console.log(num);
    }
    num++
}

// For loops
for (let odd = 0; odd < 25; odd++) {
    if (odd % 2 !== 0) {
        console.log(odd);
    }

}