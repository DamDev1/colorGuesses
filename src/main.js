const boxColor = document.querySelector(".color")
const boxColor1 = document.querySelector(".box1")
const boxColor2 = document.querySelector(".box2")
const boxColor3 = document.querySelector(".box3")
const boxColor4 = document.querySelector(".box4")
const boxColor5 = document.querySelector(".box5")

const display = document.querySelector(".display");

const colors = [
    "RGB(0,100,0)",
    "RGB(0,0,255)",
    "RGB(75,0,130)",
    "RGB(255,20,147)",
    "RGB(139,69,19)",
    "RGB(255,140,0)",
]

const random = colors[Math.floor(Math.random() * colors.length)];

display.textContent = random;

const color = boxColor.style.background = "RGB(0,100,0)";
const color1 = boxColor1.style.background = "RGB(0,0,255)";
const color2 = boxColor2.style.background = "RGB(75,0,130)";
const color3 = boxColor3.style.background = "RGB(255,20,147)";
const color4 = boxColor4.style.background = "RGB(139,69,19)";
const color5 = boxColor5.style.background = "RGB(255,140,0)";

boxColor.addEventListener("click", () => {
    if(color == random){
        alert("You won!!! Nice try")
        location.reload();

    }else{
        alert("Failed Boy/Girl")
        location.reload();
    }

})

boxColor1.addEventListener("click", () => {
    if(color1 == random){
        alert("You won!!! Nice try")
        location.reload();

    }else{
        alert("Failed Boy/Girl")
        location.reload();
    }
})

boxColor2.addEventListener("click", () => {
    if(color2 == random){
        alert("You won!!! Nice try")
        location.reload();

    }else{
        alert("Failed Boy/Girl")
        location.reload();
    }
})

boxColor3.addEventListener("click", () => {
    if(color3 == random){
        alert("You won!!! Nice try")
        location.reload();

    }else{
        alert("Failed Boy/Girl")
        location.reload();
    }
})

boxColor4.addEventListener("click", () => {
    if(color4 == random){
        alert("You won!!! Nice try")
        location.reload();

    }else{
        alert("Failed Boy/Girl")
        location.reload();
    }
})

boxColor5.addEventListener("click", () => {
    if(color5 == random){
        alert("You won!!! Nice try")
        location.reload();

    }else{
        alert("Failed Boy/Girl")
        location.reload();
    }
})
