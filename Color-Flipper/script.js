let simplebtn=document.querySelector(".simple");
let hexbtn=document.querySelector(".hex");
let color=document.querySelector(".colorcode");
let changebtn=document.querySelector(".change");
let body=document.querySelector(".body");

let colors=["red","green","yellow","pink","violet","blue","grey","white"]

/*creating function to generate interger number which is use as index
number to access arrays of colors */
function getnumber()
{
    return parseInt(  Math.random()*colors.length)

}
changebtn.addEventListener("click",function()
{
let indexnumber=getnumber();

color.textContent=colors[indexnumber];
body.style.backgroundColor=colors[indexnumber];



})






