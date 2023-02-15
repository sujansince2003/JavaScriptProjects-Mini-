let hex=["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9]

let simplebtn=document.querySelector(".simple");
let hexbtn=document.querySelector(".hex");
let color=document.querySelector(".colorcode");
let changebtn=document.querySelector(".change");
let body=document.querySelector(".body");


changebtn.addEventListener("click",function()
{
    let hexvalue="#";

for (let i = 0; i <6; i++)
 {
    hexvalue+=hex[getnum()];
    document.body.style.backgroundColor=hexvalue;
    color.textContent=hexvalue;
    console.log(hexvalue);

    
    
}
}
)

//generating random number for index to access elements from hex array to form 6 digits hex color code
 function getnum()
 {
    return Math.floor(Math.random()*hex.length);
 }