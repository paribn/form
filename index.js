// selectors

let form = document.querySelector('#userForm');
let userListContainer =document.querySelector('#userListContainer')
form.addEventListener("submit",AddUser)
// form.addEventListener("update",UpdateUser)

let userArr=[];
let userItems=document.getElementsByClassName("user-items")

function AddUser(e) {
    e.preventDefault();
    let fullNameInput = e.target.elements["fullName"];
    let ageInput = e.target.elements["age"];
    let detailsInput= e.target.elements["details"];

    let userObj = {

        fullName: fullNameInput.value,
        age: ageInput.value,
        details: detailsInput.value

    }
    userArr.push(userObj);


    Clear([fullNameInput,ageInput,detailsInput]);

    List()    
}


function deleteUser(index) {
    userArr.splice(index,1);
    List();
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("fa-trash-can")) {
        let index = e.target.parentElement.parentElement.parentElement.getAttribute("data-id");
        deleteUser(index);
    }
});




function Clear(inputArr) {
    inputArr.forEach(input => {
        input.value="";
    });
}       

function List() {
    userListContainer.innerHTML="";
    userArr.forEach((user,index)=>{
        userListContainer.innerHTML+=`  <tr class="user-items" data-id="${index}">
        <th scope="row">${index+1}</th>
        <td>${user.fullName}</td>
        <td>${user.age}</td>
        <td>${user.details}</td>
        <td><button class="btn btn-light data-id ${index}"><i class="fa-solid fa-trash-can"></i></button>
        <button class="btn btn-light data-id ${index} "><i class="fa-regular fa-pen-to-square"></i></button></td> 
      </tr>`

    })

    for (const userTr of userItems) {
        userTr.addEventListener("click",function(e){
            let id=e.target.parentElement.getAttribute("data-id")
            console.log(e.target.parentElement,id);
        })
    }
}

document.addEventListener("DOMCOntentLoaded",function(){
    List()
})

