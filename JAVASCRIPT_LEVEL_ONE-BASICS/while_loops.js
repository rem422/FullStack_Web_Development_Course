// let x = 0;

// while(x < 5) {
//     console.log("x is currently: " + x);

//     if(x === 3) {
//         console.log("X IS EQUAL TO Three!");
//         break;
//     }

//     console.log("x is still less than 5, adding 1 to x");

//     x = x+1;
// }


// Write a while loop that prints out only the even numbers from 1 to 10.

let num = 1;

while(num < 11) {
    if(num % 2 === 0) {
        console.log(num);
    }
    num = num + 1;
}