var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var age = document.getElementById("age");
var isGraduate = document.getElementById("graduate");
var userData = document.getElementById("userData");
var byName = document.getElementById("byName");
var byGraduate = document.getElementById("byGraduate");
var btn = document.getElementById("add");
var sBtn = document.getElementById("sBtn");
var users = []

btn.addEventListener("click", function () {
    var id = btn.getAttribute("id");

    if (id === "add") {
        addUser();
        showData();
    } else {
        var index = id.replace("U_", "");
        updateData(index);
        showData();
    }

});

sBtn.addEventListener("click", function () {
    search();
});

function addUser() {
    var u = JSON.parse(localStorage.getItem("users")) || [];
    if (firstName.value != "" && lastName.value != "" && age.value != "" && isGraduate.value != "") {
        u.push({
            firstName: firstName.value,
            lastName: lastName.value,
            Age: age.value,
            isGraduate: isGraduate.value
        });

        localStorage.setItem("users", JSON.stringify(u));
        console.log(localStorage.getItem("users"))
    } else {
        console.log("Must fill form");
    }
}

function showData() {
    users = JSON.parse(localStorage.getItem("users")) || [];
    userData.innerHTML = "";

    for (let index = 0; index < users.length; index++) {
        userData.innerHTML += `<tr>
                <td> ${users[index].firstName} </td>
                <td> ${users[index].lastName} </td>
                <td> ${users[index].Age} </td>
                <td> ${users[index].isGraduate} </td>
                <td class='actions'>
                    <button id= ${"update_" + index} class='update'> Update </button>
                    <button id= ${"delete_" + index} class='delete'> Delete </button>
                </td>
            </tr>`;
    }
    buttons();
}

function updateForm(index) {
    users = JSON.parse(localStorage.getItem("users"));
    firstName.value = users[index].firstName;
    lastName.value = users[index].lastName;
    age.value = users[index].Age;
    isGraduate.value = users[index].isGraduate;
    btn.textContent = "Update";
    btn.setAttribute("id", "U_" + index);
}

function updateData(index) {
    var u = JSON.parse(localStorage.getItem("users"));
    if (firstName.value != "" && lastName.value != "" && age.value != "" && isGraduate.value != "") {
        u[index] = {
            firstName: firstName.value,
            lastName: lastName.value,
            Age: age.value,
            isGraduate: isGraduate.value
        }
        localStorage.setItem("users", JSON.stringify(u));

        btn.textContent = "Add user";
        btn.setAttribute("id", "add");
        firstName.value = "";
        lastName.value = "";
        age.value = "";
        isGraduate.value = "";
    } else {
        console.log("Must fill form");
    }
}

function deleteData(index) {
    var u = JSON.parse(localStorage.getItem("users"));
    u.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(u));
}

function search() {
    userData.innerHTML = "";
    var u = JSON.parse(localStorage.getItem("users"));

    u.forEach((user, index) => {

        var fn = user.firstName.toLowerCase();
        var ln = user.lastName.toLowerCase();
        var grad = user.isGraduate.toLowerCase();
        if (byName.value === "" && byGraduate.value === "") {
            showData();
            return;
        } else {
            if (fn === byName.value.toLowerCase() || ln === byName.value.toLowerCase() || grad === byGraduate.value.toLowerCase()) {
                userData.innerHTML += `<tr>
                    <td> ${user.firstName} </td>
                    <td> ${user.lastName} </td>
                    <td> ${user.Age} </td>
                    <td> ${user.isGraduate} </td>
                    <td class='actions'>
                      <button id= ${"update_" + index} class='update'> Update </button>
                      <button id= ${"delete_" + index} class='delete'> Delete </button>
                    </td>
                </tr>`;
            }
        }
    });
}

function buttons() {
    var updateButtons = [];
    var deleteButtons = [];

    for (let i = 0; i < users.length; i++) {
        updateButtons[i] = document.getElementById("update_" + i);
        deleteButtons[i] = document.getElementById("delete_" + i);

        updateButtons[i].addEventListener("click", function () {
            var id = this.getAttribute("id");
            var n = id.replace("update_", "");
            updateForm(n);
        });

        deleteButtons[i].addEventListener("click", function () {
            var id = this.getAttribute("id");
            var n = id.replace("delete_", "");
            deleteData(n);
            showData();
        });
    }
}


showData();