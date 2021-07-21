import {EventEmitter} from "../helpers.js";

class Init  extends EventEmitter {
    constructor(item = []) {
        super(); // будет принимать массив данных
        this.item = item;

    }

    getItem(id){  // метод для получения данных из состояния

        return this.item.find(item => item.id.toString() === id.toString())  //функция будет выполнено тогда когда ругая функция будет завершена (callback)

    }

    addItem(item){ // метод добавления данных в состояние
        this.item.push(item) // добавление элементов в массив
        this.emit("change", this.item);

        return item;
    }

    updateItem(id, data){ // метод для обновления предметного состояния (id -объект который нужен, data - данные которые нужно обновить)
        const item = this.getItem(id);
        // Object.keys(data).forEach(prop => item[prop] = data[prop])
        Object.keys(data).forEach((prop) => {

            item[prop] = data[prop];
        }) // перебор массива
        this.emit("change", this.item);
        return item;
    }

    removeItem(id){ // удаление метода из массива
        const index = this.item.findIndex(item => item.id.toString() === id.toString()); // ищем индекс в массиве c помощю метода findIndex

        if (index > -1){ // если что то найдет
            this.item.splice(index, 1);
            this.emit("change", this.item);

        }


    }

}



export default Init;