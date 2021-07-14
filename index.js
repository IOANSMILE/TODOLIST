
// class Rectangle {
//
//     constructor(square) {
//         this.width = square.width; // ширина
//         this.height = square.height; // высота
//
//
//     }
//
//      getArea(){
//          return this.width * this.height;
//     }
//
//
//     perimeter(){
//        return (this.width + this.height)*2;
//
//     }
//
// }
//
// const rectangle = new Rectangle({
//     width:5,
//     height:9
// })

function create(tagName, type, className) {
    const checkbox = document.createElement(tagName) // создание элемента (createElement) чекбокс
    checkbox.type = type // говорим браузеру чтоб отобразил элемент в качестве чекбокса
    checkbox.className = className // присваиваем класс
}

//№3 Создание элементов списка дел
function createTodoItem (title){  // создание DOM элементов и соеденение их вместе
    const checkbox = create("input", "checkbox", "checkbox")// создание элемента (createElement) чекбокс

    const label = document.createElement("label"); // создание элемента лэйбл,  туда выводится дело которое мы добавили
    label.innerText = title; // отправляем в лэйбл текст из инпут
    label.className = "title"; // присваиваем класс


    const editInput = document.createElement("input"); // поле для изменения задачи
    editInput.type = "text";
    editInput.className = "textfield";


    const editButton = document.createElement("button"); // кнопка изменить
    editButton.innerText = "Изменить"; // присваиваем текст изменить
    editButton.className = "edit";

    const deletButton = document.createElement("button"); // кнопка удалить
    deletButton.innerText = "Удалить"; // присваиваем текст удалить
    deletButton.className = "delete";


    const listItem = document.createElement("li"); // создание тега элементов списка
    listItem.className = "todo-item";

    listItem.appendChild(checkbox); // помещаем все созданные выше элементы с помощью метода  appendChild внутрь listItem по порядку
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deletButton);

    bindEvents(listItem); // №5 привязываем события

    return listItem; // возвращаем все
}

//5 Привязать событие
function bindEvents (todoItem){ // взаимодействие с чекбокс
    const checkbox = todoItem.querySelector(".checkbox"); // доступ к секбоксу
    const editButton = todoItem.querySelector("button.edit"); // доступ к кнопку изменить
    const deletButton = todoItem.querySelector("button.delete"); // доступ к кнопке удалить

    checkbox.addEventListener("change", toggleTodoItem) // слушатель (нажатия) чекбокса
    editButton.addEventListener("click", editTodoItem);
    deletButton.addEventListener("click", deleteTodoItem);

}


//№2 Создание обработчика событий
function addTodoItem (event){  // функция обработчик
    event.preventDefault(); // остановить отправкуц на сервер методом preventDefault

    if (addInput.value === "") { // проверка, если поле для ввода задачи пустое то: вывести сообщение
        return alert("Необходимо ввести название задачи");
    }
    const todoItem = createTodoItem(addInput.value); // функция создания элементом задачи  (№3)

    //№4 создаем ребенка из все созданных элементов
    todoList.appendChild(todoItem); // добовляем элемент в список
    addInput.value = "";


}

//№6 Создание событий  чекбокс
function toggleTodoItem (){
    const listItem = this.parentNode; // родительский узел
    listItem.classList.toggle("completed"); // по нажатию будет то убираться то тобовлять класс completed

}

function editTodoItem (){ // изменение элемента
    const listItem = this.parentNode; // родительский узел
    const title = listItem.querySelector(".title"); // доступ к элементу title которая хранит запись дела
    const editInput = listItem.querySelector(".textfield"); // доступ к полю
    const isEditing = listItem.classList.contains("editing"); // проверка с помощью contains содержет ли тот или иной элемент указанный класс

    if (isEditing){ // если класс содержится тогда
        title.innerText = editInput.value; // меняем текст на тот который указан в строке редактирования
        this.innerText = "Изменить";

    } else {
        editInput.value = title.innerText;
        this.innerText = "Сохранить";
    }
    listItem.classList.toggle("editing");

}

function deleteTodoItem (){  // удаление элемента
    const listItem = this.parentNode;
    todoList.removeChild(listItem);

}



// №1 Создание ссылок на элементы дум
const todoForm = document.getElementById("todo-form"); // обращение к форме
const addInput = document.getElementById("add-input") // поле для ввода задачи
const todoList = document.getElementById("todo-list") // поле где висят задачи
const todoItems = document.querySelectorAll(".todo-item") // получаем все элементы класса


function init (){
    todoForm.addEventListener("submit", addTodoItem); //обработчик события отправки формы
    todoItems.forEach(item => bindEvents(item));
}

document.addEventListener("DOMContentLoaded", () => {
    // Страница загружена до конца и можно рабоать с ее HTML кодом.
    init();
})




