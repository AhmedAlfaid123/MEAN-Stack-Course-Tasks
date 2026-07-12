// T1: Get two numbers from the user
// Perform all maths operations with them

function calc() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;

    if (num1 === "" || num2 === "") {
        document.getElementById("add").innerHTML = "";
        document.getElementById("subtract").innerHTML = "";
        document.getElementById("multiple").innerHTML = "";
        document.getElementById("division").innerHTML = "";
        return;
    }

    var n1 = +num1;
    var n2 = +num2;

    var add = n1 + n2;
    document.getElementById("add").innerHTML = add;

    var subtract = n1 - n2;
    document.getElementById("subtract").innerHTML = subtract;

    var multiple = n1 * n2;
    document.getElementById("multiple").innerHTML = multiple;

    var division;
    if (n2 === 0) {
        division = "Cannot divide by zero";
    } else {
        division = n1 / n2;
    }
    document.getElementById("division").innerHTML = division;
}

document.getElementById("number1").addEventListener("input", calc);
document.getElementById("number2").addEventListener("input", calc);
