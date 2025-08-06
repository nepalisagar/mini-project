
const body = document.querySelector('body');
const mode = document.querySelector('img');
const text = document.querySelector('p');

let default_Background = "white";

mode.addEventListener('click', ()=>{
    if ( default_Background == "white"){
        body.style.backgroundColor = "white";
        mode.src = "img/moon.png";
        text.innerText = "Light Mode";
        body.style.color = "black";
        default_Background = "black";
    }
    else if (default_Background == "black"){
        body.style.backgroundColor = "black";
        mode.src = "img/light.png";
        text.innerText = "Dark Mode";
        body.style.color = "white";
        default_Background = "white";
    }
})



