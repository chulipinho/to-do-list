var todoList = document.getElementById("todo-list");
var button = document.getElementById("add");


function addItem() {
    var input = document.getElementById("add-input");
    
    if (input.value === '') return;

    var newItem = createItem(input.value);

    todoList.appendChild(newItem);
    input.value = '';
}

function createItem(title) {
    var newItem = document.createElement("li");
    var checkbox = document.createElement("input");
    var name = document.createElement("label");

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", title);
    checkbox.setAttribute("id", title);

    name.setAttribute("for", title);
    name.appendChild(document.createTextNode(title));

    newItem.classList.add("listItem");
    newItem.appendChild(checkbox);
    newItem.appendChild(name);

    return newItem;
}

button.addEventListener("click", addItem);
