var userName = prompt("Please enter your name:");
if (userName == ""){
    prompt("Username is required.");
}else {
    console.log("Username is " + userName);
    document.getElementById("welcome").innerHTML = "Welcome, " + userName + "!";
}

var password = prompt("Please enter your password:");
if (password.length < 8){
    prompt("Password must be at least 8 characters.");

}else {
    console.log("Password is " + password);
    document.getElementById("welcome").innerHTML = document.getElementById("welcome").innerHTML + "<br>Password is " + password;
}
