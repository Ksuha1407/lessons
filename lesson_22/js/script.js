"use strict"


// ! Приклад №1

// let result = 2 + 3 * 10 / `5`
// спочатку рядок 5 стає числом
// let result = 2 + 3 * 10 / 5
// let result = 2 + 30 / 5
// let result = 2 + 6
// console.log(result)


// ! Приклад №2

// let num = 5
// let results = 2 + 3 * 10 / ++num
//  перша дія буде  ++num, а потім
// 2
// let results = 2 + 3 * 10 / 6
// 3
// let results = 2 + 30 / 6
// 4
// let results = 2 + 5
// console.log(results)


// ? Оператори порівняння
//  Повертають булове значення true / false
// <  >  <=  >=
// ==(дорівнює) !=(не дорівнює)  // змінює тип даних
// ===  !==  //  не змінюють тип даних(так само але суворе)

// let result = 11.9 < 12
// console.log(typeof result) //тип даних
// console.log(result)  // значення

// let result = 5 == `5` // переводить '5' у число 5(зміна типу даних)
// console.log(result) // відповідь true (правда)

// let result = 5 != `5` // знову ж переводить у число 5
// console.log(typeof result)
// console.log(result) // відповідь false (не правда)

//  Порівнює як воно є без зміни даних

// let result = 5 === `5`  // не змінює дані
// console.log(result)  //   false не правда

// let result = 5 !== `5`
// console.log(result)  // true правда

// ! Краще до початку використовувати суворих операторів  ===  / !==
// let a = 5
// let b = `5`

// let result = a === b
// console.log(result)
// console.log(typeof a)
// console.log(a)
// console.log(typeof b)
// console.log(b)




//  Оператор присвоєння
// let someNum = 5


// !     Логічні   оператори

//  !(ні)   ||(або)    &&(та)


//!   Оператор "ні"  !   (унарний)

// let result = !0
//  1. Зміна типу даних в булінан
//  2. Отримання результату true або false операнду
//  let result = false
//  3. Зміна булєвого значення на протележне
// let result = true

// console.log(typeof result)
// console.log(result)


//!  Оператор або || ( хоча б один true)
//  операнд №1 || операнд №2
// /*  1. Зміна типу даних на буліан
//     2. отримання результату true або false операнда № 1
//     3. якщо результат кроку 2 true, завершуємо дію
//     3.1 результатом операції буде значення операнда № 1
//         та булеве значення true
//     4. якщо результат кроку 2 false
//         отриманя результату true або false
//         операнда № 2
//     4,1 якщо результат кроку 4 true результатом
//         операції будезначення операнда № 2
//         та булеве значення true
//     5.  якщо результатом кроку 4 false результатом операції
//         буде значення операнда № 2 та булеве значення false
//         /*

// let result = 50 || 12
// console.log(result) //  Значення яку потрапляє в зміну
// console.log(Boolean(result)) // Булеве значення операції


// let result = "" || 12
// console.log(result)
// console.log(Boolean(result))


// let someVar
// let result = someVar || 12
// console.log(result)
// console.log(Boolean(result))


// let result = 0 || NaN
// console.log(result)
// console.log(Boolean(result))


//! Оператор "та" && (обидва true)
// операнд № 1 && операнд № 2
//  1. Зміна типу даних на буліан
//  2. Отримання результату true або false операнда № 1
//  3. Якщо результат кроку 2 false, завершуємо дію
//  3.1 результатом операції буде значення операнда № 1
//      та булеве значення false
//  4. якщо результат кроку 2 true отримання результату
//     true або false операнду № 2
//  4.1 якщо результат кроку 4 false результатом операції
//      буде значення операнда № 2 табулеве значення false
//  5. якщо результат кроку 2 та 4 true
//     результатом операції буде значення операнда № 2
//     та булеве значення true


// let result = `Ksuha` && 123
// console.log(result)
// console.log(Boolean(result))



// ! Умовне вітвлення
//   Синтаксис

// if (умова №1) {
//  Код який виконується, тільки якщо умова №1 повертає true
// }else if (умова №2) {
//  Код який виконується тілько якщо умва № 2 вертає true,
//  а умова № 1 false
// }else {
//  Код, який виконується тільки якщо умова №2 вертає false,
//  та умова №1 false
// }
//  продовження коду...

// let varOne = 15
// let varTwo = 25

// Конструкція if переводить тип даних в булеан
// if (varOne) { // Чи varOne true
//  Виконуємо якщо так
//     console.log(`Працює`)
// }
// if (varOne > varTwo) { //  чи true що varOne більше varTwo?
//     console.log(`${varOne} більше ніж ${varTwo}`)
// } else if (varOne === 10) { // Чи true (правда) що varOne дорівнює 10?
//     console.log('varOne дорівнює 10')
// } else if (varTwo === 20) { //Чи true (правда) що varTwo дорівнює 20?
//     console.log(`varTwo дорівнює 20`)
// } else { // Виконуємо якщо усі попередні умови повернули false
//     console.log(`Все пропало...`)
// }
// продовження коду
// console.log(`продовження коду...`)

// let varOne = `1`
// let varTwo = 3
// let varThree = 3
// let varFour = 4

// if (varTwo !== 3 || varOne < 3 && varThree < 4 || varFour > 6) {
// Код відновлюється тільки якщо умова вертає true
//     console.log(`Умова true`)
// }

// продовження коду
// console.log(`продовження коду...`)

// Крок № 1 (Приорітет у операторів порівняння)
// if (false || true && true || false)

// Крок №2 (Приорітет у оператора &&)
// if (false || true || false)

// Крок №3 (далі true вже не піде, тому)
// if (true {})

//  Тернарна операція
//  Синтаксис
//  умова ? значення якщо  умова true : значення якщо умова false

// let someVar = 10 < 5 ? `Це правда` : 'Це брехня'
// console.log(someVar)

//  Або те саме

// let someVar
// if (10 < 5) {
//     someVar = `Це правда`
// } else {
//     someVar = `Це брехня`
// }
// console.log(someVar)

// Приклад

// const userAge = 51
// const userType = userAge > 52 ? `Стара` : 'Ще побігає'
// console.log(userType)

// const userAge = 15
// const userType = userAge > 50 ? `Стара` : userAge <= 16 ? `Ширкач` : 'Ще побігає'
// console.log(userType)

// let someVar
// let result

// Варівнт 1

// if (someVar) {
//     result = someVar
// } else {
//     result = 500
// }

// Варіант 2
// result = someVar ? someVar : 500

// Варіант 3

// result = someVar || 500
// console.log(result)


//! Цикл For
// Синтаксис

// let someString = `Привіт! Як справи? 123456`
// console.log(someString)

// console.log(someString[0])
// console.log(someString[1])
// console.log(someString[2])
// console.log(someString[3])
// console.log(someString[4])
// console.log(someString[5])
// console.log(someString[6])

// ?Вивести окремо кожен символ рядка someString
// for (let i = 0; i < someString.length; ++i)
//     console.log(someString[i])


// !    Масив

// let someArray = [] // Порожній масив
// console.log(typeof someArray) // Тип даних
// console.log(someArray)  // Значення

// let someArray = [10, `Ksuha`, true, `Hello`]
// console.log(someArray)
// console.log(someArray.length)
// console.log(someArray[1])

// Метод перевірки масиву   Array.isArray(тут пишемо зміну)

// let someArray = []
// console.log(Array.isArray(someArray))
// if (Array.isArray(someArray)) {
// якщо правда (true) someArray це масив
// працюємо...
// } else {
// якщо ні...
// }

//  Перебір масиву

// let someArray = [10, `Ksuha`, true, `Hello`]
// for (let i = 0; i < someArray.length; ++i) {
//     if (someArray[i] > 5) {
//         console.log(`Це число більше 5`)
//     }
// }

// let someArray = [15, `Ksuha`, true, `Hello`]
// ще один спосіб перебору масиву
// мачив.forEach(зміна яка отримає значення елементу масива =>{});
// номер комірки - index
// someArray.forEach((item, index) => {
//     console.log(index)
//     console.log(item)
// })


// Можно без index
// let someArray = [15, `Ksuha`, true, `Hello`]
// someArray.forEach((item) => {
//     console.log(item)
// })



//!           Кілько методів роботи з масивом


//  Додавання елементів в масив
// push додає едемент кінець масиву

// let userNames = [`Вася`, 'Петро', 'Гога']
// console.log(userNames)
// userNames.push(5)
// console.log(userNames)

//  Пошук в масиві
//  includes шукає елемент в масиві

// let userNames = [`Вася`, 'Петро', 'Гога']
// console.log(userNames.includes(`Петро`))
// console.log(userNames.includes(20))

// Якщо в масиві нема числа 20, то дадаємо
//  Перед userNames ставимо знак !(звучить як нема), тоді добавляємо число
//  через push
// let userNames = [`Вася`, `Петро`, `Гога`]
// if (!userNames.includes(20)) {
//     userNames.push(20)
// }
// console.log(userNames)

//  Або через тернарного оператора

// !userNames.includes(20) ? userNames.push(10) : null
// console.log(userNames)



//   Метод переводу масива у рядок

// let userNames = [`Вася`, 'Петро', 'Гога']
// let userNamesString = userNames.join(`, `)
// console.log(typeof userNamesString)  // тип даних
// console.log(userNamesString)   // значення



// ?  Об'єкти

// const someObject = {}
// console.log(typeof someObject)
// console.log(someObject)


// const user = {
//     age: 51,
//     name: `Ksuha`
// }
// console.log(user)
// console.log(user.age)
// console.log(user.name)

// const someStyles = {
//     color: `green`,
//     [`font-size`]: 25
// }
// console.log(someStyles[`font-size`])
// console.log(someStyles.color)

//  Зміна значення елементу об'єкту

// someStyles[`font-size`] = 50
// console.table(someStyles)

// !Функції

// Функції використовуються для запуску коду,
// який повторюється, та для використання методу функціонального
// програмування (кожну дію варто помістити в окрему функцію)


//   Об'ява функції
// Синтаксис

// function і'мя(параметри) {
//  тіло функції (код функції)
// }

//  Назви функції формуються за тими ж правилами що й назви зміних

// Наприклад, фукції, починаючі с
// `show...` - зазвичай щось показують,
// `get...` - бере звідкись значення,
// `calc...` - обчислення,
// `create...` - щось створюють,
// `check...` - щось перевіряють іі повертають логічно значення, і т.д.


//  Приклади імен

//  showMessage
//  getOptions
//  calcSum

// Виклик функції

// showMessage()
// function showMessage() {
//     console.log(`я текст!`)
// }

// showMessage()
// showMessage()
// showMessage()
// showMessage()


// Параметри функції

// function showMessage(someText = `Текст за замовчуванням`) {
//     console.log(someText)
// }
// showMessage()
// showMessage(`;dfokh'df`)
// showMessage(`;d;d;sjhoewruwea`)



// const numOne = 30
// const numTwo = 10


// function calcSum(a = 0, b = 0) {
//     console.log(a + b)
// }
// calcSum()
// calcSum(numOne)
// calcSum(numTwo, numOne, 123)
// calcSum(50, `10`)


// function calcSum(someArray) {
//     console.log(parseFloat(someArray[0]) + parseFloat(someArray[2]))
// }
// const someArray = [10, 20, 30, 40, 50]

// calcSum(someArray)


//  Повертає результат
//  return - повертає результат функції

// const numOne = 10
// const numTwo = 20
// function calcSum(a = 0, b = 0) {
//     return a + b
// }
// function showMessage(someText = `текст за замовченням`) {
//     console.log(someText)
// }
// showMessage(calcSum(numOne, numTwo))
// const someVar = calcSum(numOne, numTwo)

// showMessage(someVar)



// Стрілочна функція
//  Звичайна функція

// function someNum(text) {
//     console.log(`text`)
// }
// someNum()

//!  Тут даже не треба писати return
// let someName = (text) => text
// console.log(someName(`000`))

//  Функція де більше рядків, а тут треба писати return

// let someName = (text) => {
//     return text
// ...
// ...
// ...
// }

// console.log(someName(`123`))

//  Стрілочну функцію викликаємо після об'яви

// let someFun
// ....

// if (10 > 5) {
//     someFun = () => console.log(`123`)
// }
// someFun()



// !  Завдання
// Текст з ефектом друку
//  Ця функція буде працювати з любим текстом

// const text = "Привіт! Ще текст!"
// let tempLate = ``

// function initText(text) {
//     for (let i = 0; i < text.length; ++i) {
//         const item = text[i]
//         tempLate +=
//             `<span style="${item === ` ` ? `display:inline;` : ""}animation-delay: ${i * 0.1}s">${item}</span>`
//     }
// }
// initText(text)
// console.log(tempLate)


//  Вивід у в'юпорт
// const magic = document.querySelector(`.magic`)
// magic.insertAdjacentHTML("beforeend", tempLate)


// Або так


// const text = "Привіт! Ще текст!"

// function initText(text) {
//     let tempLate = ``
//     for (let i = 0; i < text.length; ++i) {
//         const item = text[i]
//         tempLate +=
//             `<span style="${item === ` ` ? `display:inline;` : ""}animation-delay: ${i * 0.1}s">${item}</span>`
//     }
//     return tempLate
// }

// goToViewport(initText(text))

// function goToViewport(code) {
//     const magic = document.querySelector(`.magic`)
//     magic.insertAdjacentHTML("beforeend", code)
// }


//  Налаштування вмикає можливість редагувати текст прямо у в'юпорті
// document.designMode = "on"




// Задача №1
// Що потрапить в консоль ?

// let someVar = 0
// ++someVar

// if (someVar) {
//     console.log(someVar)
//     console.log(typeof someVar)
// }


//  Задача №2

// for (let i = 1; i <= 10; ++i) {
//     console.log(`Пункт №${i}`);
// }


// Задача №3

// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
//     console.log('000');
// }



// Оператори мають наступний пріоритет:

// && виконується раніше, ніж ||

//     Тож вираз читається як:


// false || (false && true) || false


// (false && true) → false

// Отримаємо: false || false || false = false

//  В консоль нічого не виведеться



// Задача №4

// function calcDivide(a, b) {
//     a = typeof a === "number" ? a : 0
//     b = typeof b === "number" ? b : 1

//     if (b === 0) {
//         return `Результат ділення: ділення на нуль неможливе`
//     }

//     return `Результат ділення: ${a / b}`;
// }

// console.log(calcDivide(12, 4))
// console.log(calcDivide(5))
// console.log(calcDivide())
// console.log(calcDivide(3, 0))
// console.log(calcDivide("text", 2))

// Задача №5

// const someArray = [3, "Привіт", 10, true, null]

// someArray.forEach(function (element) {
//     if (element === 10) {
//         console.log(`Знайдено число 10`)
//     }
// })

