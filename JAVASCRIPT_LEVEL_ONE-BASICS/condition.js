// let hot = false
// let temp = 10

// if(temp > 80) {
//     console.log("Hot Outside!");
// } else if (temp <= 80 && temp >= 50) {
//     console.log("Average temp Outside");
// } else if(temp < 50 && temp >= 32){
//     console.log("Its pretty cold out!");
// } else {
//     console.log("Its very cold out!");
// }


let ham = 0
let cheese = 0

let report = "blank";

if (ham >= 10 && cheese >= 10) {
    report = "Strong sales of both ham and cheese!"
} else if(ham === 0 && cheese === 0) {
    report = "Nothing Sold!"
} else {
    report = "We had some sales of items"
}

console.log(report);