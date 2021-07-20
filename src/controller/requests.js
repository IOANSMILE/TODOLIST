// тут запросы к серверу.
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on("add", this.addTodo.bind(this));
        view.on("toggle", this.toggleTodo.bind(this));
        view.on("edit", this.editTodo.bind(this));
        view.on("remove", this.removeTodo.bind(this));
    }

    addTodo(title){ // получаем введенный  в поле текст и работаем с ним
       const todo = this.model.addItem({  // создание задачи
            id: Date.now(),  // id будет дата
            title: title, // введенный в поле текст
            completed: false}); // чекбокс
       this.view.addItem(todo); // передаем дальше метод
    }

    toggleTodo(id, completed){
       const todo = this.model.updateItem(id, {completed});

       this.view.toggleItem(todo);

    }

    editTodo({id, title}){
        const  todo = this.model.updateItem(id, {title});
        this.view.editItem(todo);

    }

    removeTodo(id){
        this.model.removeItem(id);
        this.view.removeItem(id);

    }
}


export default Controller;