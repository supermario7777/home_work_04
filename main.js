'use strict'

// Перепишите функцию, используя оператор '?' или '||'

let age = prompt('Сколько Вам лет?');

function checkAge(age){
    return (age > 18) ? true : confirm('Родители разрешили?')
}

console.log(checkAge(age))

// Функция pow(x,n)

let number = prompt('Введите число: ')
let degree = prompt('Введите степень числа: ')

function pow(x,n){
    if(n>=1){
        let result = 1;
        for(let i = 0; i < n; i++){
            result*= x;
        }

        return result
    } else{
        return alert('Вы тот самый тестер, который сломает что угодно, теперь я в этом точно уверен=)')
    }
}

alert(pow(number,degree))

alert(pow(number,degree))

// Перепишите с использованием функции-стрелки

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () =>  { alert("Вы отменили выполнение."); }
);


// Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b-a)

alert( arr ); // 8, 5, 2, 1, -10

// Трансформировать в массив имён

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(items => items.name)
console.log(names)

alert( names ); // Вася, Петя, Маша


// Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user =>({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}))

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


// Получить средний возраст

function getAverageAge(users){
    return users.reduce((prev, user) => prev + user.age, 0) / users.length
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28