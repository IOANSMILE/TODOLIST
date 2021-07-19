class Init {
    constructor(state = []) { // будет принимать массив данных
        this.state = state;

    }

    getItem(id){  // метод для получения данных из состояния
        return this.state.find(item => item.id == id)  //функция будет выполнено тогда когда ругая функция будет завершена (callback)

    }

    addItem(item){ // метод добавления данных в состояние
        this.state.push(item) // добавление элементов в массив
    }

    updateItem(id, data){ // метод для обновления предметного состояния (id -объект который нужен, data - данные которые нужно обновить)
        const item = this.getItem(id);
        Object.keys(data).forEach(prop => item[prop] = data[prop]) // перебор массива
    }

    removeItem(id){ // удаление метода из массива
        const index = this.state.findIndex(item => item.id == id); // ищем индекс в массиве c помощю метода findIndex

        if (index > -1){ // если что то найдет
            this.state.splice(index, 1);

        }


    }

}

export default Init;