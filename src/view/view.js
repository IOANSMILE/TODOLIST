import {createElement, EventEmitter} from './helpers.js' // все полетело по пизде тут, 37,42


// работа с DOM
class View extends EventEmitter {
    constructor() {
        super ();
        this.form = document.getElementById("todo-form"); // обращение к форме
        this.input = document.getElementById("add-input") // поле для ввода задачи
        this.list = document.getElementById("todo-list") // поле где висят задачи

        this.form.addEventListener("submit", this.handleAdd.bind(this)); // по нажатию кнопки добавить вызывается метод handleAdd
    }

    createElement(todo){
        const checkbox = createElement("input", {type: "checkbox", className: "checkbox", checked: todo.completed ? "checked" : ""});
        const label = createElement("label", {className: "title" }, todo.title );
        const editInput = createElement("input", {type: "text", className: "textfield"});
        const editButton = createElement ("button", {className: "edit"}, "Изменить");
        const removeButton = createElement ("button", {className: "remove"}, "Удалить");
        const item = createElement("li", {className:"todo-item${todo.completed ? ' completed : ''}", "data-id": todo.id}, checkbox, label, editInput, editButton, removeButton); // ЖОПА тут тоже могут быть ошибки


        return this.addEventListeners(item);

    }

    addEventListeners(listItem){
        const checkbox = listItem.querySelector(".checkbox");
        const editButton = listItem.querySelector("button.edit");
        const removeButton = listItem.querySelector("button.remove");

        checkbox.addEventListener("change", this.handleToggle.bind(this));

        editButton.addEventListener("click", this.handleEdit.bind(this));

        removeButton.addEventListener("click", handleRemove.bind(this));
        return listItem;
    }

    handleAdd (event){  // метод проверяет есть ли в поле ввода текст
        event.preventDefault(); // останавливает отправку данных на сервер

        if (!this.input.value){ return alert("Введите название задачи");} // если такста нет то вылетает сообщение
        const value = this.input.value; // если проверка пройдена мы забираем то что находится в поле и нужно как то передать дело контролеру

        this.emit("add", value);
    }


    handleToggle({target}){

         const listItem = target.parentNode;
         const id = listItem.getAttribute("data-id");
         const completed = target.completed;

        this.emit("toggle", {id, completed});

    }

    handleEdit({target}){
        const listItem = target.parentNode;
        const id = listItem.getAttribute("data-id");
        const label = listItem.querySelector(".title");
        const input = listItem.querySelector(".textfield");
        const editButton = listItem.querySelector("button.edit");
        const title = input.value;
        const isEditing = listItem.classList.contains("editing");

        if (isEditing){
            this.emit("edit", {id, title})
        } else {
            input.value = label.textContent;
            editButton.textContent = "Сохранить";
            listItem.classList.add("editing");
        }
    }

    handleRemove({target}){
        const listItem = target.parentNode;
        this.emit("remove", id);
    }



    findListItem(id){  // ищем элемент с определенным id
        return this.list.querySelector('[data-id ="${id}"]');
    }

    addItem(todo){ // передаем созданный объект с контролера
        const listItem = this.createElement(todo); // создаем объект
        this.input.value = ""; // чистим импут
        this.list.appendChild(listItem); // создаем элементы внутри формы
    }

    toggleItem(todo){
        const listItem = this.findListItem(todo.id); // отправляем туду элементы li с id
        const checkbox = listItem.querySelector(".checkbox"); // ищем чекбокс

        checkbox.checked = todo.completed;

        if (todo.completed){
            listItem.classList.add("completed");
        } else {
            listItem.classList.remove("completed");
        }

    }

    editItem(todo){
        const listItem = this.findListItem(todo.id); // отправляем туду элементы li с id
        const label = listItem.querySelector(".title");
        const input = listItem.querySelector(".textfield");
        const editButton = listItem.querySelector("button.edit");

        label.textContent = todo.title;
        editButton.textContent = "Изменить";
        listItem.classList.remove("editing");

    }

    removeItem(id){
        const listItem = this.findListItem(todo.id);
        this.list.removeChild(listItem);

    }

}

export default View;































