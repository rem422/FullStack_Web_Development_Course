let firstName = prompt("Enter your first name: ");
let lasttName = prompt("Please enter your last name: ");
let age = prompt("How old are you? ");
let height = prompt("How tall are you in centimeters? ");
let pet = prompt("What is the name of your pet? ");
alert("Thank you so much for the information!");

let nameCond = null;
let ageCond = null;
let heightCond = null;
let petCond = null;

// Name condition
if (firstName[0] === lasttName[0]) {
    nameCond = true
} else {
    nameCond = false
}

// Age condition
if (age > 20 && age < 30) {
    ageCond = true
} else {
    ageCond = false
}

// Height condition
if (height >= 170) {
    heightCond = true
} else {
    ceightCond = false
}

// Pet condition
if (pet[pet.length-1] === "y") {
    pettCond = true
} else {
    petCond = false
}

// Check all conditions
if (nameCond && ageCond  && heightCond && petCond) {
    console.log("Access Granted!");
} else {
    console.log("Access Denied!");
}

