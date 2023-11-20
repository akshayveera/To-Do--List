

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(input.value === ''){
        alert("Enter a task");
    }
    else{
        // creating list element 
        let div = document.createElement("div");
        div.innerHTML = input.value;
        let li = document.createElement("li");
        li.appendChild(div); 
        
        // sending cross symbol into list item using span
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // rendering list item to html
        // listContainer.appendChild(li);
        // above is the normal way of adding elements

        // add the new task at the beggining of the list
        // listContainer.insertBefore(li, listContainer.firstChild );

        // or we can also use prepend 
        listContainer.prepend(li);

        saveData();
    }

    input.value="";
}

// for adding elements to unordered list when add button is clicked
btn.addEventListener("click",()=>{
    addTask();
}, false);

// for adding elements to unordered list when enter key is pressed
input.addEventListener("keyup",(event)=>{
    if(event.key == "Enter")
    {
        addTask();
    }    
}, false);


// for make changes needed in unordered list
listContainer.addEventListener("click", (event)=>{
    if(event.target.tagName === "LI"){
        // to mark and strike the select element
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        // to remove the element where cross button is clicked
        event.target.parentElement.remove();
        saveData();
    }    
}, false);


// to save data in browser's local storage
function saveData(){
    localStorage.setItem("listData",listContainer.innerHTML); 
    // first argument is name given to that saved data
    // we need to call this function at every change made    
}

// to get the saved data when we reload the browser
function showData(){
    listContainer.innerHTML = localStorage.getItem("listData");
}

showData();
