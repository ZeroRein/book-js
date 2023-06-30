'use strict'

let jsbook = {
    title: 'javaScript',
    price: 2500,
    stock: 3,
    obj: {
        text:"test",
        func: () => {
            console.log("this is ")
        }
    }
}

console.log(jsbook)

let bookTitle = jsbook.title;
console.log(bookTitle)
console.log(jsbook.obj.text)
console.log(jsbook.obj.func)

jsbook.price = 3000
console.log('オブジェクトの値を帰る方法は?',jsbook.price)
console.log(jsbook['price'])