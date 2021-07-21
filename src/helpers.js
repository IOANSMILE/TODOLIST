// в душе не чаю почему она не экспортируется
function createElement(tagName, props, ...children) {
    const element = document.createElement(tagName) // создание элемента (createElement) чекбокс
    Object.keys(props).forEach(key => {
        if (key.startsWith("data-")){
            element.setAttribute(key, props[key]);
        } else {
            element[key] = props[key];
        }});  // перебираем свойства у объекта и присваиваем значения


    children.forEach(child => {

        if (typeof child === "string"){
            child = document.createTextNode(child); // создаем DOM узел
        }
        element.appendChild(child);
        });


    return element;
}



class EventEmitter {
    constructor() {
        this.events  = {}
    }

    on(type, callback){
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }

    emit(type, ...arg){

        if (this.events[type]){
            this.events[type].forEach(callback => callback(...arg));
        }
    }
}

export  {createElement, EventEmitter};