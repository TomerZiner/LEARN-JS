let pic_ar = ["images/israel.jpg", "images/france.jpg", "images/brazil.jpg", "images/usa.jpg"];
let counter = 0;
let pic1=document.querySelector("#pic1")
window.onload = function(){
registerEvents();
   
}


function registerEvents()
{
let nextBtn = document.querySelector("#nextBtn");
let backBtn = document.querySelector("#backBtn");
 nextBtn.addEventListener("click",onChangeNext)
 backBtn.addEventListener("click",onChangeBack)
}


function onChangeNext(){
    if (counter < pic_ar.length-1)
    counter++
    pic1.src=pic_ar[counter];
}


function onChangeBack(){
    if (counter > 0) 
    counter--
    pic1.src=pic_ar[counter];

}