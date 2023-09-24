// selectors

let form = document.querySelector('#userForm');
let userListContainer = document.querySelector('#userListContainer');
let btn = document.querySelector('.update-btn');

btn.addEventListener('click', UpdateUser);
form.addEventListener("submit", AddUser);


let userArr = [];
let userItems = document.getElementsByClassName("user-items")

function AddUser(e) {
    e.preventDefault();

    let fullNameInput = e.target.elements["fullName"];
    let ageInput = e.target.elements["age"];
    let detailsInput = e.target.elements["details"];

    let userObj = {

        fullName: fullNameInput.value,
        age: ageInput.value,
        details: detailsInput.value
    }

    if (userObj.fullName && userObj.age && userObj.details) {
        userArr.push(userObj);
        Clear([fullNameInput, ageInput, detailsInput]);
        List()
    } else {

        alert('Null input cannot be passed..!');
    }

}


let updateId = null;

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-pen-to-square")) {
        let index = e.target.parentElement.parentElement.parentElement.getAttribute("data-id");


        let user = userArr[index];
        updateId = index;
        document.getElementById("fullName").value = user.fullName;
        document.getElementById("age").value = user.age;
        document.getElementById("details").value = user.details;

        btn.classList.remove('update-btn');

    }
});
btn.addEventListener('click', UpdateUser)


function UpdateUser(e) {

    let findedUser = userArr[updateId];
    findedUser.fullName = fullName.value;
    findedUser.age = age.value;
    findedUser.details = details.value;

    userArr.splice(updateId, 1, findedUser);
    Clear([fullName,age,details]);
    List();

    btn.classList.add('update-btn')
    updateId = null;

}




function deleteUser(index) {
    userArr.splice(index, 1);
    List();
}

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-trash-can")) {
        let index = e.target.parentElement.parentElement.parentElement.getAttribute("data-id");
        deleteUser(index);
    }
});


function Clear(inputArr) {
    inputArr.forEach(input => {
        input.value = "";
    });
}

function List() {
    userListContainer.innerHTML = "";
    userArr.forEach((user, index) => {
        userListContainer.innerHTML += `  <tr class="user-items" data-id="${index}">
        <th scope="row">${index + 1}</th>
        <td>${user.fullName}</td>
        <td>${user.age}</td>
        <td>${user.details}</td>
        <td><button class="btn btn-light data-id ${index}"><i class="fa-solid fa-trash-can"></i></button>
        <button class="btn btn-light data-id ${index} "><i class="fa-regular fa-pen-to-square"></i></button></td> 
      </tr>`

    })

    for (const userTr of userItems) {
        userTr.addEventListener("click", function (e) {
            let id = e.target.parentElement.getAttribute("data-id")
            console.log(e.target.parentElement, id);
        })
    }
}

// document.addEventListener("DOMContentLoaded", function () {
//     List()
// })




