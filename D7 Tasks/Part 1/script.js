
// Part A — "use strict"

// 1
function withoutStrict() {
    txt = "Hello";
}
withoutStrict();
console.log(txt);

// 2
function withStrict() {
    "use strict";
    try {
        txt = "Hello 2";
    } catch (e) {
        console.log(e.message);
    }
}
withStrict();

// 3
function testDelete() {
    "use strict";
    var localVar = "test";
    try {
        //delete localVar;
    } catch (e) {
        console.error(e.message);
    }

    var obj = { prop: "value" };
    var d = delete obj.prop;
    console.log(d, " " + obj);
}
testDelete();

// Part B — Hoisting

// 4
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// 5

// Case 1
sayHi(); // "Hi"
function sayHi() {
    console.log("Hi");
}
// Case 2
try {
    sayBye(); // sayBye is not a function
} catch (error) {
    console.log(error.message);
}
var sayBye = function () {
    console.log("Bye");
};

// 6
try {
    console.log(a); // Cannot access 'a' before initialization
} catch (error) {
    console.log(error.message);
}
let a = 5;
console.log(a); // 5

// 7
var n = 1;
function demo() {
  console.log(n); // undefined
  var n = 2;
  console.log(n); // 2
}
demo();
console.log(n); // 1

// Part C — var vs let vs const

// 8

function varScope() {
    if (true) {
        var v = "var";
    }
    console.log(v);
}
varScope();

// 9

function letConstScope() {
    if (true) {
        let l = "let";
        const c = "const";
        console.log("this is " + l,"this is " + c);
    }
    try {
        console.log(l); // l is not defined
    } catch (error) {
        console.log(error.message);
    }
    try {
        console.log(c); // c is not defined
    } catch (error) {
        console.log(error.message);
    }
}
letConstScope();

// 10

function redeclaration() {
    var redeclareVar = "first";
    var redeclareVar = "second";
    console.log(redeclareVar); // second
    
    let redeclareLet = "first";
    //let redeclareLet = "second"; // Syntax error
    console.log(redeclareLet); // first
}
redeclaration();

// 11

const student = {
    name: "Ahmed",
    age: 20,
    city: "Cairo"
};

student.age = 21;
console.log(student);

student.grade = "A";
console.log(student);

delete student.city;
console.log(student);

try {
    student = { name: "Ali", age: 22, city: "Alex" };
} catch (error) {
    console.log(error.message);
}

// 12
const nums = [1, 2, 3];
nums.push(4);
nums[0] = 10;
console.log(nums);

try {
    nums = [5, 6, 7];
} catch (error) {
    console.log(error.message);
}

// 13

var varA;
let letB;
// const c; // Can not declare it without init value

console.log(varA, letB); 

// 14
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";
console.log(window.g1); // "var global"
console.log(window.g2); // undefined
console.log(window.g3); // undefined


// 15
const handlers = {};
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}
console.log(handlers.fn0()); // "index: 0"
console.log(handlers.fn2()); // "index: 2"
// let creates block-scoped variable



// Part D — Arrow Functions & Template Literals

// 16
const welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Ali"));

// 17
const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
console.log(fullInfo("Ali", "Hassan", 25));

// 18
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

const sum = (a, b) => {
    console.log(a, " + ", b);
    return a + b;
}
console.log(sum(3, 4));



// Part E — Destructuring, Default, Rest, Spread

// 19
const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};

const { title, price, inStock } = product;
console.log("title: ", title, "price: ", price, "inStock: ", inStock);

// 20
const [first, second] = ["HTML", "CSS", "JS", "React"];
console.log(first, second);

// 21
function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}
console.log(greet("Ali", "Hi"));
console.log(greet("Mona"));
console.log(greet());

// 22
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

// 23
const merged = [...[1, 2], ...[3, 4, 5]];
console.log(merged);

const originalArr = [10, 20, 30];
const copyArr = [...originalArr];
copyArr.push(40);
console.log(originalArr);
console.log(copyArr);

// 24
const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };
const mergedUser = { ...user, ...contact };
console.log(mergedUser);
console.log(mergedUser.age); //age = 23

// 25
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log(total(...values));


// Part F — Memory & Copying

// 26
let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;
person2.name = "Omar";
console.log(person1.name); // "Omar"
// person2 is a reference to same object

// 27
const original = {
    name: "Mona",
    details: { city: "Cairo" }
};
const shallowCopy = { ...original };
shallowCopy.name = "Ahmed";
shallowCopy.details.city = "Minya";
console.log(original);
console.log(shallowCopy); // details.city changed in both nested object reference

// 28
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.details.city = "Luxor";
console.log(original);
console.log(deepCopy); // Deep copy creates new object

// 29
const userdata = { name: "Ahmed", age: 26, city: "Alex" };
localStorage.setItem("userdata", JSON.stringify(userdata));
const getItem = localStorage.getItem("userdata");
const parsed = JSON.parse(getItem);
console.log(typeof parsed);
console.log(parsed);
localStorage.removeItem("userdata");
console.log(localStorage.getItem("userdata"));



// Part G — Challenge Mix

// 30
const APP_CONFIG = {
    name: "MyApp",
    version: "1.0.0",
    api: {
        baseUrl: "https://api.example.com",
        timeout: 5000
    },
    features: ["dashboard", "profile"]
};
console.log(APP_CONFIG);

try {
    APP_CONFIG = { name: "MyApp 2", version: "2.0.0" };
} catch (error) {
    console.log(error.message);
}

// 31
function createCard(title, price = 0, ...tags) {
    return {
        title: title,
        price: price,
        tags: tags,
        label: `${title} - ${price} EGP`
    };
}
const card1 = createCard("Laptop", 15000, "electronics", "computer");
const card2 = createCard("Mouse", 200 ,"electronics");
console.log(card1);
console.log(card2);

// 32
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

students.map(({ name, grade }) => {
    console.log(`${name} scored ${grade}`);
});

