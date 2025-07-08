"use strict"


// Задача №4



// function returnResult(a = 0, b = 0) {
//     const result = a / b


// if (isNaN(result)) {
//     return `Результат NaN`
// }
// if (Math.abs(result) === Infinity) {
//     return `Результат Infinity`
// }

// return `Рузельтат ділення: ${result}`



//  Ще простіше
//     return !Number.isFinite(result) ? `Помилка` : `Результат ділення: ${result}`

// }
// console.log(returnResult(2, `flgjd`))


// ----------------------------------------------------



//  Задача №1
// const body = document.body
//  Задача № 2
// function addListItems(count = 3) {
//     const ul = document.createElement(`ul`)
//     for (let i = 1; i <= count; ++i) {
//         const li = document.createElement(`li`)
//         li.textContent = `Пункт №${i}`
//         ul.appendChild(li)
//     }
//     const header = document.querySelector('header')
//     header.after(ul)
// }
// addListItems()
//  Задача №3
// document.body.classList.add(`loaded`)
// if (document.body.classList.contains(`loaded`)) {
//     document.body.style.color = `green`
// }
// Задача № 4
// const items = document.querySelectorAll(`.item`)
// items.forEach((item, index) => {
//     item.classList.add(`active`)
//     item.textContent = `Елемент №${index + 1}`
// })
//  Задача № 5
// const button = document.querySelector(`.button`)
// button.scrollIntoView({
//     behavior: `auto`
// })
//  Задача № 6
// const link = document.querySelector('.link')
// link.setAttribute('data-value', '100')

// const value = parseInt(link.getAttribute('data-value'))

// if (value < 200) {
//     link.style.color = 'red'
// }


// !  WINDOW
//   Отримання ширини вікна браузера (в'юпорта)

// const windowWidth = window.innerWidth
// console.log(typeof windowWidth)  //тип даних
// console.log(windowWidth)  //значення

//   Отримання висоти вікна браузера (в'юпорта)

// const windowHeight = window.innerHeight
// console.log(typeof windowHeight) // тип даних
// console.log(windowHeight)  //  значення

//  Перевірка
// if (windowWidth >= 768) {
// то йде якась дія
// }

// ! BOM


// ? Navigator
//   Дані про браузер

// console.log(navigator.userAgent)


// Перевірка на Chrome і на Firefox який у нас браузер

// const userAgent = navigator.userAgent


// if (userAgent.includes("Chrome")) {
//     console.log(`Браузер Хром`)
// } else if (userAgent.includes(`Firefox`)) {
//     console.log(`Браузер Firefox`)
// }


//  Інформація про систему

// console.log(navigator.userAgentData)
// Мобілка
// console.log(navigator.userAgentData.mobile)
//  Платформа
// console.log(navigator.userAgentData.platform)
//  Перевірка
// if (navigator.userAgentData.mobile) {
//  юзер в мобілки
// }


// ?  Location
//  Адресний рядок браузера

// console.log(location)
// console.log(location.href)
// console.log(location.hash)

const getHash = location.hash
console.log(getHash)
const cleanHash = getHash.replace("#", "")
console.log(cleanHash)

// Перевірка
if (cleanHash === "popup") {
    "popup"
}


//   Перенаправлення користувача

// console.log(location.href)
// location.href += `contacts.html`






//  !Document Object Model (DOM)


// Навігація по документу
// const htmlElement = document.documentElement
// console.log(htmlElement)
// const htmlHead = document.head
// console.log(htmlHead)


// const htmlElement = document.documentElement
// console.log(htmlElement)