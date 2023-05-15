
// const ul=document.querySelector(".items");
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent="hello this is first items";
// ul.children[1].innerHTML="this is second";
// ul.lastElementChild.innerHTML="<i>I am italic</i>"



const myform=document.querySelector("#my-form");

const nameInput=document.querySelector("#name");

const emailInput=document.querySelector("#email");

const msg=document.querySelector(".msg");

const userslist=document.querySelector("#users");



myform.addEventListener("submit",onSubmit);


function onSubmit(e)
{
e.preventDefault();

if (nameInput.value==="" || emailInput.value==="") {
 msg.classList.add("error")  //adding error css class
    msg.innerHTML="Please enter both fields";
    setTimeout(()=> msg.remove(),3000);
}

else
{
    // console.log("success");

    const li=document.createElement("li");
    li.appendChild(document.createTextNode(`${nameInput.value}::${emailInput.value}`))
    userslist.appendChild(li)
    nameInput.value="";
    emailInput.value="";

     
}
}
