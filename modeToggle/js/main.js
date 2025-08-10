const body = document.querySelector("body");
const background = document.querySelector(".box");
const button = document.querySelector(".boxBtn");
const heading = document.querySelector("h1");
const sub_heading = document.querySelector("h4");

let mode = "dark";

button.addEventListener('click', () => {

    if (mode == "dark") {
        button.style.left = "0px";
        button.style.backgroundColor = "black";
        background.style.backgroundColor = "white";
        body.style.backgroundColor = "#222222";
        heading.style.color = "white";
        sub_heading.style.color = "white";

        mode = "light";
    }
    else if (mode == "light") {
        button.style.left = "109px";
        button.style.backgroundColor = "grey";
        background.style.backgroundColor = "white";
        body.style.backgroundColor = "grey";
        heading.style.color = "black";
        sub_heading.style.color = "black";

        mode = "dark";
    }

})