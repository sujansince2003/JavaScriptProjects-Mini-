
"use strict"
let randomNum=Math.trunc(Math.random()*20)+1;
console.log(randomNum);
document.querySelector(".btn").addEventListener("click",function(){
let num=Number(document.querySelector(".inputbox").value);
console.log(num);
   if (!num) {
  console.log(document.querySelector(".results").textContent="Please Enter the Number");
   }
   else if (num) {
    if (num>=0 &&num<=20) {
        if (num===randomNum) {
            console.log(document.querySelector(".results").textContent="🤩🥳Awesome!! You Guessed it Right🔥");
            document.querySelector(".left").style.visibility="visible";
            document.querySelector(".right").style.visibility="visible";
            document.querySelector(".rela").style.display="inline";
        }
        else if (num>randomNum) {
            console.log(document.querySelector(".results").textContent="📈Too High");
            }
        else if (num<randomNum) {
            console.log(document.querySelector(".results").textContent="📉Too Low");
            }
       }
    else
    {
        console.log(document.querySelector(".results").textContent="😓Invalid Number! Please Enter number Between 1 and 20 only");
    }
    }
   });   

document.querySelector(".rela").addEventListener("click",function () {
    window.location.reload();
})
