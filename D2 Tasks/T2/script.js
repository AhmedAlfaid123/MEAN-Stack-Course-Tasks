function submit() {
    var userName = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    var experience = document.getElementById("experience").value;
    var rating = prompt("Enter your self-rating(from 1 to 10).");
    
    if (Number(experience) <= 2){
        document.getElementById("level").innerHTML = "junior";
        console.log("junior");
    } else if (Number(experience) > 2 && Number(experience) <= 5){
        document.getElementById("level").innerHTML = "mid-level";
        console.log("mid-level");
    } else if (Number(experience) > 5 && Number(experience) <= 10){
        document.getElementById("level").innerHTML = "senior";
        console.log("senior");
    } else {
        document.getElementById("level").innerHTML = "expert";
        console.log("expert");
    }
    
    var performance;

    switch (Number(rating)) {
        case 10:
        case 9:
            performance = "Higher";
            break;
        case 8:
        case 7:
            performance = "Good";
            break;
        case 6:
        case 5:
            performance = "Average";
            break;
        default:
            performance = "Needs Improvement";
    }

    document.getElementById("performance").innerHTML = performance;
    console.log("Performance is " + performance);

    var bonus = Number(experience) <= 2? 10 : Number(experience) > 2 && Number(experience) <= 5? 15 : 20 ;
    document.getElementById("bonus").innerHTML = bonus+"%";
    console.log("Bonus is " + bonus + "%");

    var baseSalary = 5000;
    document.getElementById("salary").innerHTML = baseSalary + baseSalary*(bonus/100);
    console.log("Final Salary is " + baseSalary + baseSalary*(bonus/100));

    var currentHour = new Date().getHours();
    var shift = (currentHour >= 9 && currentHour < 18) ? "Day Shift" : "Night Shift";
    document.getElementById("shift").innerHTML = shift;
    console.log("Shift is " + shift);
}