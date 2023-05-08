let intbtn=document.querySelector(".increment");
let decbtn=document.querySelector(".decrement");
let numvalue=document.querySelector(".number");
let num=numvalue.textContent;
intbtn.addEventListener("click",function()
{
   
    num++;
    numvalue.textContent=num;

}

)
decbtn.addEventListener("click",function()
{
   
    num--;
    numvalue.textContent=num;

}

)
