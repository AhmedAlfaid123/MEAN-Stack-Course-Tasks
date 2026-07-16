// Grouping without reduce
var users = [
    { name: "Ali", city: "CAI" },
    { name: "Sara", city: "GZA" },
    { name: "Mona", city: "CAI" }
]

var byCity = {};
for (var u in users) {
    console.log(users[u].city);
    byCity[users[u].city] = byCity[users[u].city] || [];
    byCity[users[u].city].push(users[u]);
}

console.log(byCity);
///////////////////////////////////


// Part A - Objects

// 1
var car = {
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "color": "blue"
}
console.log(car);

// 2
console.log(car.brand, car["year"]);

// 3 
car.color = "black";
car.price = 20000;
console.log(car);

// 4
delete car.year;
console.log(car.year); // undefined

// 5
var student = {
    "student-name": "Sara",
    "age": 20,
}
console.log(student["student-name"]);

// 6
var book = {
    "title": "AL-Sonnah",
    "author": {
        "firstName": "Ahmed",
        "lastName": "ibn Hanbal"
    }
}
console.log(book.author.lastName);

// 7
var user = {
    "name": "Ali",
    "age": 25,
    "city": "Cairo"
}
console.log(Object.keys(user));
console.log(user.hasOwnProperty("job"));

// 8
var settings = {
    "theme":"dark",
    "lang":"en"
}
Object.freeze(settings);
settings.theme = "light";
settings.fontSize = 16;
console.log(settings); // Object.freeze Rejects updates


// Part B - Arrays Basics

// 9
var cities = ["Minya", "Cairo", "Assiut", "Aswan"];
console.log(cities, "  Length: " + cities.length);

// 10 
console.log(cities[0]);
console.log(cities[cities.length - 1]);

// 11
cities.push("Giza");
console.log(cities);
cities.unshift("Alex");
console.log(cities);

// 12
cities.pop();
console.log(cities);
cities.shift();
console.log(cities);

// 13
var langs = ["HTML", "CSS", "JS", "React"];
console.log(langs.indexOf("JS"));
console.log(langs.includes("Python"));

// 14
var arr1 = [ "pen", "book", "bag" ];
arr1.forEach(function (arr, index) {
    console.log(arr, index);
});

// 15
var colors = ["red", "green", "blue", "yellow"];
for (color of colors){
    if (color === "blue") {
        break;
    }
    console.log(color);
}

// 16
var characters = ["A", "B", "C"];
characters.push("D","E");
characters.splice(0, 2);
console.log(characters, characters.length);


// Part C - Array Methods

// 17
var fruits = ["apple", "blue", "yellow"];
var UpperCase = fruits.map(function (fruit){
    return fruit.toUpperCase()
});
console.log(UpperCase, fruits);

// 18
var numbers = [10, 55, 30, 80, 45, 90];
var filtered = numbers.filter(function (number){
    return number > 50;
});
console.log(filtered);

// 19
var cities = ["Cairo", "Giza", "Alex", "Aswan"];
var finding = cities.find(function (city){
    return city.startsWith("A");
});
console.log(finding);

// 20
var chars = ["a", "b", "c", "d", "e"];
console.log(chars.slice(1, 4));
console.log(chars);

// 21 
var nums = ["one", "two", "three", "four", "five"];
console.log(nums.splice(0,2));
console.log(nums);

// 22
var numbers = [40, 100, 1, 5, 25];
var sorted = numbers.toSorted((a, b) => a - b);
console.log(sorted);

// 23 
var ages = [16, 21, 17, 19];
var ageSome = ages.some(function (a){
    return a >= 18;
})
console.log(ageSome);

var ageEvery = ages.every(function (a){
    return a >= 18;
})
console.log(ageEvery);

// 24
var numbers = [5, 10, 15, 20];
var sum = numbers.reduce(function (acc, n){
    return acc + n;
}, 0)
console.log(sum);


// Part D - Mix (Objects + Arrays)

// 25
var students = [
    {name: "Omar", grade: 80},
    {name: "Mona", grade: 90},
    {name: "Ali", grade: 70}
]
students.forEach(function (s){
    console.log(s.name, s.grade);
});

// 26
var filteredStudents = students.filter(function (student){
    return student.grade >= 80;
});

var stud = filteredStudents.map(function (student){
    return student.name;
});
console.log(stud)

// 27
var products = [
    {name:"Laptop", price: 25000},
    {name:"Tablet", price: 5000},
    {name:"Phone", price: 12000},
]
var sum = products.reduce(function (acc, p){
    return p.price + acc;
}, 0);
console.log(sum);

// 28
var langs = ["js", "html", "css", "js", "react", "js"];
var counter = 0;
langs.forEach(function (lang){
    if (lang === "js") {
        counter++;
    }
})
console.log(counter)

// 29
var classroom = {
    teacher: "Ahmed",
    students: ["Ali", "Samy", "Omar", "Mona"]
}

console.log(classroom.teacher);
console.log("Number of students: " + classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);

// 30
var products = [
    {id: 1, title: "Pen", price: 10},
    {id: 2, title: "Book", price: 50},
    {id: 3, title: "Bag", price: 25}
]

var Titles = products.reduce(function (acc, p, index){
    acc[index] = p.title.toUpperCase();
    return acc
}, [])
console.log(Titles);

var sumPrices = 0;
var filteredProducts = products.filter(function (product){
    sumPrices += product.price < 30 ? product.price : 0;
    return product.price < 30;
})
console.log(filteredProducts, "Total Prices: " + sumPrices);
