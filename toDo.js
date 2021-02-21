const toDoform = document.querySelector(".js-toDo"),
toDoInput = toDoform.querySelector(".js-toDoInput"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deltoDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveTodos();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "🤦‍♀️";
    delBtn.addEventListener("click", deltoDo)
    const span = document.createElement("span");
    const newID = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newID
    };
    toDos.push(toDoObj);
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //JSON.stringify todos bcz localStorage dose not read boolean
}

function eventAvoider(event) {
    event.preventDefault();
    const currentToDo = toDoInput.value;
    paintToDo(currentToDo);
    toDoInput.value = "";

}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null ){
        const parsedtoDos = JSON.parse(loadedToDos);
        parsedtoDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}



function init(){
    loadToDos();
    toDoform.addEventListener("submit", eventAvoider);
}

init();