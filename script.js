let taskbar = document.getElementById("icons");
let startMenu = document.getElementsByClassName("start-menu")[0];
taskbar.addEventListener("click",function(){
   if(startMenu.style.bottom === "-500px"){
    startMenu.style.bottom = "50px";
   }
   else{
    startMenu.style.bottom = "-500px";
   }
})