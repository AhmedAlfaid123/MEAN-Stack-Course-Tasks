// T2: Get the first name, last name, age from the user
// and show a welcome message using these values.

function welcome() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var age = document.getElementById("age").value;

    if (firstName === "" || lastName === "" || age === "") {
        document.getElementById("welcome").innerHTML = "";
        return;
    }

    var message = "Welcome " + firstName + " " + lastName + "! You are " + age + " years old.";

    document.getElementById("welcome").innerHTML = message;
}
document.getElementById("fname").addEventListener("text", welcome);
document.getElementById("lname").addEventListener("text", welcome);
document.getElementById("age").addEventListener("input", welcome);
