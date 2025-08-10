function addList(){
    const inputText = document.getElementById("input");
    const input = inputText.value.trim();
    if (input === "") return;
    
    const li = document.createElement('li');
    li.textContent = input

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn)

    const displayList = document.getElementById("displayList");
    displayList.appendChild(li)


    inputText.value = "";

}

const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dayAndDate = today.toLocaleDateString('en-US', options);
document.getElementById("displayDate").textContent = dayAndDate;


// localStorage.setItem("name", "Sagar")
// console.log(localStorage.getItem("name"))