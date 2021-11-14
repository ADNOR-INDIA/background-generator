let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let back_color = document.querySelector("#gradient")
// console.log(back_color);

function setGradient(){
    back_color.style.background = "linear-gradient(to right, "
     + color1.value
     + ","
     + color2.value
     +")"; 
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

