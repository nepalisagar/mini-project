const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
let displayValue = document.querySelector("p")
const valueBox = document.querySelector(".valueDisplay");

let value = 0;

increase.addEventListener('click', ()=>{
    value+= 1;
    displayValue.innerHTML = value
    // console.log(value);

    if (value > 0){
        valueBox.style.backgroundColor = "black";
        displayValue.style.color = "white";
        valueBox.style.borderColor = "white";
        console.log(value);
    }
}) 

decrease.addEventListener('click', ()=>{
    value-= 1;
    displayValue.innerHTML = value
    // console.log(value);

    if (value < 0){
        valueBox.style.backgroundColor = "white";
        displayValue.style.color = "black";
        valueBox.style.borderColor = "black";
        console.log(value);
    }
}) 

