import Init from "./model/model.js";
import View from "./view/view.js";
import Controller from "./controller/requests.js";

const init = new Init();
const view = new View();
const controller = new Controller(init,view);























// // class Rectangle {
// //
// //     constructor(square) {
// //         this.width = square.width; // ширина
// //         this.height = square.height; // высота
// //
// //
// //     }
// //
// //      getArea(){
// //          return this.width * this.height;
// //     }
// //
// //
// //     perimeter(){
// //        return (this.width + this.height)*2;
// //
// //     }
// //
// // }
// //
// // const rectangle = new Rectangle({
// //     width:5,
// //     height:9
// // })
//
//
// function createElement(tagName, props, ...children) {
//     const element = document.createElement(tagName) // создание элемента (createElement) чекбокс
//     Object.keys(props).forEach(key => element[key] = props[key]);  // перебираем свойства у объекта и присваиваем значения
//
//     if (children.length>0){
//         children.forEach(child => {
//             if (typeof child === "string"){  // если строка
//                 child = document.createTextNode(child); // создаем DOM узел
//             }
//             element.appendChild(child);
//         });
//     }
//     console.log(element);
//     return element;
// }
//
//
//
// //№3 Создание элементов списка дел
// function createTodoItem (title){  // создание DOM элементов и соеденение их вместе
//     const checkbox = create("input", { type: "checkbox", className: "checkbox" }); // создание элемента (createElement) чекбокс
//     const label = create("label", {className: "title"}, title); // создание элемента лэйбл,  туда выводится дело которое мы добавили
//     const editInput = create("input", {type: "text", className: "textfield"}); // поле для изменения задачи
//     const editButton = create("button", {className: "edit"}, "Изменить"); // кнопка изменить
//     const deletButton = create("button", {className: "delete"}, "Удалить"); // кнопка удалить
//     const listItem = create("li", {className: "todo-item"}, checkbox, label, editInput, editButton, deletButton); // создание тега элементов списка
//     bindEvents(listItem); // №5 привязываем события
//     return listItem; // возвращаем все
// }
//
//
// //5 Привязать событие
// function bindEvents (todoItem){ // взаимодействие с чекбокс
//     const checkbox = todoItem.querySelector(".checkbox"); // доступ к секбоксу
//     const editButton = todoItem.querySelector("button.edit"); // доступ к кнопку изменить
//     const deletButton = todoItem.querySelector("button.delete"); // доступ к кнопке удалить
//
//     checkbox.addEventListener("change", toggleTodoItem) // слушатель (нажатия) чекбокса
//     editButton.addEventListener("click", editTodoItem);
//     deletButton.addEventListener("click", deleteTodoItem);
//
// }
//
//
// //№2 Создание обработчика событий
// function addTodoItem (event){  // функция обработчик
//     event.preventDefault(); // остановить отправкуц на сервер методом preventDefault
//
//     if (addInput.value === "") { // проверка, если поле для ввода задачи пустое то: вывести сообщение
//         return alert("Необходимо ввести название задачи");
//     }
//     const todoItem = createTodoItem(addInput.value); // функция создания элементом задачи  (№3)
//
//     //№4 создаем ребенка из все созданных элементов
//     todoList.appendChild(todoItem); // добовляем элемент в список
//     addInput.value = "";
//
//
// }
//
// //№6 Создание событий  чекбокс
// function toggleTodoItem (){
//     const listItem = this.parentNode; // родительский узел
//     listItem.classList.toggle("completed"); // по нажатию будет то убираться то тобовлять класс completed
//
// }
//
// function editTodoItem (){ // изменение элемента
//     const listItem = this.parentNode; // родительский узел
//     const title = listItem.querySelector(".title"); // доступ к элементу title которая хранит запись дела
//     const editInput = listItem.querySelector(".textfield"); // доступ к полю
//     const isEditing = listItem.classList.contains("editing"); // проверка с помощью contains содержет ли тот или иной элемент указанный класс
//
//     if (isEditing){ // если класс содержится тогда
//         title.innerText = editInput.value; // меняем текст на тот который указан в строке редактирования
//         this.innerText = "Изменить";
//
//     } else {
//         editInput.value = title.innerText;
//         this.innerText = "Сохранить";
//     }
//     listItem.classList.toggle("editing");
//
// }
//
// function deleteTodoItem (){  // удаление элемента
//     const listItem = this.parentNode;
//     todoList.removeChild(listItem);
//
// }
//
//
// // работать не будет поскольку все изменения происходят непосредственно в DOM необходимо все к чертям переписывать
// // function load (){
// //     const data = JSON.parse(localStorage.getItem("todos"));
// //     return
// //
// // }
// //
// // function save (data) {
// //     const strig = JSON.stringify(data);
// //     localStorage.setItem("todos", strig);
// //
// // }
//
//
// // №1 Создание ссылок на элементы дум
// const todoForm = document.getElementById("todo-form"); // обращение к форме
// const addInput = document.getElementById("add-input") // поле для ввода задачи
// const todoList = document.getElementById("todo-list") // поле где висят задачи
// const todoItems = document.querySelectorAll(".todo-item") // получаем все элементы класса
//
//
// function init (){
//     todoForm.addEventListener("submit", addTodoItem); //обработчик события отправки формы
//     todoItems.forEach(item => bindEvents(item));
// }
//
// document.addEventListener("DOMContentLoaded", () => {
//     // Страница загружена до конца и можно рабоать с ее HTML кодом.
//     init();
// })
//



