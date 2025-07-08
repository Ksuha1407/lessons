"use strict"


// console.log('Привіт JS')/
// let user
// let userAge
//
// let newuserAge
// let userAge = 51
// console.log(newuserAge)
// console.log(userAge)
// newuserAge = userAge
// console.log(userAge)
// console.log(newuserAge)

// let userAge = 41
// console.log(userAge)
// function someFunction() {
//     let userAge = 21
//     console.log(userAge)
//     if (userAge < 50) {
//         let userAge = 16
//         console.log(userAge)
//     }
// }
// someFunction()
// console.log(userAge)


// let user = "admin"
// let userAge
// if (user == "admin") {
//     userAge = 41
// }
// console.log(userAge)

//!               Константы

// const userAge = 51
// console.log(userAge)
// userAge = 37 нельзя изменить

//   Когда мы знаем точно значение заранее, то мы пишем большими
// буквами и нижнее подчеркивание
// const COLOR_GREY = '#424551'
// console.log(COLOR_GREY)

// const numOne = 30 + 10
// const numTwo = 20
// const startAge = 25
// const addAge = 8

// if (numOne > numTwo) {
//     const userAge = startAge + addAge
//     console.log(userAge)
// }

// let userAge
// console.log(userAge)  // Значення
// console.log(typeof userAge)   //  Тип данных

// ?         Пример проверка данных  undefined

// let user = "admin"
// let userAge
// if (user === "admin") {
//     userAge = 51
// }
// if (userAge === undefined) {
//     console.log('Error')
// } else {
//     console.log(userAge)
// }



// let userAge = null
// console.log(typeof userAge)  // тип данных
// console.log(userAge)  // значение

//                    Пример  null


// let userAge = 51
// if (1 > 2) {
//     userAge = 52
// } else {
//     userAge = null
// }
// if (userAge) {
//     код сработает если userAge не равен null
// }

// !                      Функция number

// let userAge = 51
// console.log(typeof userAge)  // тип данных
// console.log(userAge)  // значение


//  Infinity - бесконечность тоже число

// let number = 1 / 0
// console.log(typeof number)  // тип данных
// console.log(number)  // значение

// if (number === Infinity) {
//     console.log('Error на 0 делить нельзя')
// }

//  NaN  - вычисление не может быть выполнено


// let number = 10 / "Анастасия"
// console.log(typeof number)  // Тип данных
// console.log(number)   // Значение

//   Функция проверки isNaN(зміна)

// if (isNaN(number)) {
//     console.log('Это NaN')
// }

//        Лапки
// 1) Одинарные - ''
// 2) Двойные - ""
// 3) Повернутые - `` //рекомендация



// let userAge = 51
// let userName = `Ksuha`
// let userInfo = "Имя: " + userName + ", Возраст: " + userAge
// let userInfo = `Имя: ${userName}, Возраст: ${userAge}`
// console.log(userInfo)  // значение

// let text = `
// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic saepe necessitatibus illo aspernatur. Deleniti, inventore architecto veniam eaque accusamus iste, doloremque vero atque, sit cumque officia ratione voluptatibus repellendus in!
// `
// console.log(text)




//  Тип данных boolean - правда или ложь
//   Boolean - принудительная смена  типа данных
//   false вернет: пустой рядок, цифру ноль, undefined, NaN

// let someVar = 5 / `Ksuha`
// console.log(someVar)
// console.log(typeof someVar) // Тип данных
// console.log(typeof Boolean(someVar))  //  Тип данных
// console.log(Boolean(someVar))


//     Метод


//   Длина рядка

// let someString = `Привет! Как дела?`
// console.log(someString.length)

//  Рядок это масив (ячейка в которой лежат данные)
// let someString = `Привет! Как дела?`
// console.log(someString[4])


// Регистр  toUpperCase(), toLowerCase()


// let someString = `Привет! Как дела?`
// let someNewVar = someString.toLowerCase()
// console.log(someNewVar)

// let someString = `Привет! Как дела?`
// let someNewVar = someString.toUpperCase()
// console.log(someNewVar)


// Поиск в рядке  includes, startsWith, endsWith

// let someString = `Привет! Как дела?`
// console.log(someString.includes(`Как`)) //  во всем рядке

// console.log(someString.startsWith(`ив`))//  В начале рядка

// console.log(someString.endsWith(`?`)) //  В конце рядка

// if (someString.includes(`Как`)) {
// если правда работаем дальше
// }



//  Получить часть рядка, метод  slice(start, end)
//  от start (включительно) до end


// let someString = `Привет! Как дела?`
// let someNewString = someString.slice(2, 6)
// console.log(someNewString)


//   Поиск и замена replace (что, на что)
//  Будет обработана только первая находка



// let someString = `#Привет! Как дела?`
// someString = someString.replace(`#`, `-`)
// console.log(someString)






//   Основные методы чисел


//    Math.floor - Округление в меньшую строну

// let someNotRoundNum = 25.9
// console.log(Math.floor(someNotRoundNum))


//    Math.ceil() - Округление в большую строну

// let someNotRoundNum = 25.9
// console.log(Math.ceil(someNotRoundNum))



//    Math.round() - Округление к большему целому


// let someNotRoundNum = 25.5
// console.log(Math.round(someNotRoundNum))


//    Math.abs() - Модуль числа

// let someNotRoundNum = -25.9
// console.log(Math.abs(someNotRoundNum))


//    Math.random() - каждый раз новое число от 0 до 1


// console.log(Math.random())



//    Math.max(a, b, c...)  / Math.min(a, b, c...)

// console.log(Math.max(1, 2, -3))
// console.log(Math.min(1, 2, -3))

// let numMax = Math.max(1, 2, -3)
// console.log(numMax)



//    parseint(показывает только целое число) и  parsFloat(лучше использовать)

// let someVar = `35.5px`
// let someNum = parseFloat(someVar)
// console.log(someNum)





//  !             Основные операторы
// ! Почти все операторы автоматически изменяют
// ! тип данных на number

// let varOne = "10"
// let varTwo = "3"


//?         Первый оператор (-) минус

// let varRes = varOne - varTwo
// console.log(typeof varRes)  //  Тип данных
// console.log(varRes)   //   Значение



// ?         Второй оператор (/) деления

// let varRes = varOne / varTwo
// console.log(typeof varRes)  //  Тип данных
// console.log(varRes)   //   Значение



// ?         Третий оператор (*) умножения

// let varRes = varOne * varTwo
// console.log(typeof varRes)  //  Тип данных
// console.log(varRes)   //   Значение


//?            Взятие остатка от деления (%)
//  10 - (3*3)= 1
// let varRes = varOne % varTwo   // 10/3=3 остаток (1)
// console.log(typeof varRes)  //  Тип данных
// console.log(varRes)   //   Значение

//  Парне/непарне  пример
// let someNum = 8
// let someVar = someNum % 2
// if (someVar === 1) {
//     console.log(`${someNum} непарное`)
// } else {
//     console.log(`${someNum} парное`)
// }



//?              Оператор добавления (+)
// Только этот оператор бинарный он не меняет тип данных


// let varRes = varOne + varTwo
// console.log(typeof varRes)  //  Тип данных
// console.log(varRes)   //   Значение

// console.log(`2` + `2`)



// ! Операнд это переменные которые
// !  принимают участие в вычислении
// ?  Бинарные это когда есть два операнда
// ?  Унарные это когда один операнд


// Унарный операнд додавання используется только с одним
// операндом и изменяет тип данных
// ! Бинарный не изменяет тип даннх

// let varOne = +`10`
// console.log(typeof varOne) // тип данных
// console.log(varOne)   //   значение


//  Инкремент ++ збільшує зміну на 1
//  Декремент -- зменшує на 1

// let someNumOne = 5
// let someNumTwo = 3

// ++someNumOne
// --someNumTwo

// console.log(++someNumOne)
// console.log(--someNumTwo)




// !         Комбінація операторів

// let someVar = 10

// someVar = someVar + 5
// console.log(someVar)

//   або

// someVar += 5
// console.log(someVar)


// let someVar = `Ksuha`
// someVar += ` `
// if (0) {
//     someVar += `Hello`
// } else {
//     someVar += `Пока`
// }
// console.log(someVar)
