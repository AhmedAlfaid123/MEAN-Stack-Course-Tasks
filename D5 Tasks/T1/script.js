// Task Functions

// Task 1
function multiply(a, b) {
    return a * b;
}

function calculate(a, b) {
    return multiply(a, b);
}

function displayResult(result) {
    console.log(result);
}

displayResult(calculate(2, 5));


// Task 2
var greetUser = setTimeout(function () {
    console.log("Hello, User!");
}, 3000)

var counter = 10;
var countdown = setInterval(function () {
    if (counter === 0) {
        console.log("Time's up!");
    } else if (counter < 5) {
        clearInterval(countdown)
    } else {
        console.log(counter--);
    }

}, 1000);
var count = 0;
var m = setTimeout(function (){
    count++;

    console.log("This will be cleared!");
    if (count > 5){
        clearTimeout(m);
    }
}, 1000)
