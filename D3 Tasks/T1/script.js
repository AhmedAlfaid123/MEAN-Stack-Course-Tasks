// Part A - Strings
// 1
var fullName = "Ahmed Hassan";
var characterCount = 0;
for (var i = 0; i < fullName.length; i++) {
    if (fullName[i] != " ") {
        characterCount++;
    }
}
console.log(characterCount);
// 2
var sentence = "I am learning JavaScript";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
// 3
var email = "student@nti.com";
for (var i = 0; i < email.length; i++) {
    if (email[i] === "@") {
        console.log("This is true email");
        break;
    }
}
// 4
var str1 = "JavaScript";
console.log(str1.charAt(0), str1.charAt(str1.length - 1));
// 5
var str2 = "This a bad day";
console.log(str2.replace("bad", "good"));
// 6
var str3 = "I love coding";
var splitStr = str3.split(" ");
var joinStr = splitStr.join("-")
console.log(joinStr);
// 7
var str4 = " nti egypt training ";
str4 = str4.trim();
str4 = str4.toUpperCase();
str4 = str4.replace("EGYPT", "CAIRO")
console.log(str4);


// Part B - Numbers & Math

// 8
var num1 = "45.8";
num1 = Number(num1);
console.log(num1 + " is " + typeof num1);

// 9
var num2 = 7.6;
console.log(Math.round(num2) + "\n" + Math.floor(num2) + "\n" + Math.ceil(num2));

// 10
console.log("Max: " + Math.max(12, 5, 28, 9) + "\nMin: " + Math.min(12, 5, 28, 9));

// 11
console.log(Math.floor(Math.random() * 20) + 1);

// 12
var price = 19.4567;
console.log(price.toFixed(2));

// 13 
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randInt = [randomInt(1, 50), randomInt(1, 50), randomInt(1, 50), randomInt(1, 50), randomInt(1, 50)];
console.log("Max: " + Math.max(randInt[0], randInt[1], randInt[2], randInt[3], randInt[4]) +
    "\nMin: " + Math.min(randInt[0], randInt[1], randInt[2], randInt[3], randInt[4]));

console.log("Average: " + (randInt[0] + randInt[1] + randInt[2] + randInt[3] + randInt[4]) / 5);

// Part C - Loops

// 14
for (var i = 1; i <= 20; i++) {
    console.log(i);
}

// 15
for (var i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// 16
var i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// 17
var names = ["Sara", "Omar", "Mona", "Youssef"];
for (const name of names) {
    console.log(name);
}

// 18
for (var i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

// 19
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log(i + "*" + j + "=" + (i * j));
    }
}

// 20
for (var i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    }else if (i === 25) {
        break;
    }
    console.log(i);
}
// Part D - Mix (Strings, Numbers, Loops)

// 21
var str5 = "HELLO";
for (var str of str5) {
    console.log(str);
}

// 22
var arr = [10, 20, 30, 40];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

// 23
var str6 = "JavaScript is amazing and awesome";
var count = 0;
for (var i = 0; i < str6.length; i++) {
    if (str6[i] === "a" || str6[i] === "A") {
        count++;
    }
}
console.log(count);

// 24
var grades = [70, 85, 92, 60, 77, 88];
for (var grade in grades) {
    if(grades[grade] % 2 === 0){
        console.log(grades[grade]);
    }
}

// 25
for (var i = 1; i <= 1; i++) {
    var stars = "";
    for (var j = 1; j <= 4; j++){
        stars += "* ";
        console.log(stars);
    }
}

// 26
var names2 = ["ahmed", "sara", "omar", "laila", "hassan"];
var nameUpper = "";
var numNames = 0;
for (const name of names2) {
    nameUpper = name.toUpperCase();
    if (nameUpper[0] === "A" || nameUpper[0] === "S") {
        console.log(nameUpper);
        numNames++;
    }
}
console.log("Number of names that start with 'A' or 'S': " + numNames);