"use strict";

window.addEventListener("load", windowLoad)

let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgentData)

function windowLoad() {
    // Додаємо атрибут data-touch на мобільних
    isMobile = window.navigator.userAgentData.mobile
    isMobile ? document.body.setAttribute(`data-touch`, ``) : null

    document.addEventListener("click", documentActions)

    const coundown = document.querySelectorAll(`[data-coundown]`)
    coundown.length ? initCoundown(coundown) : null


    dynamicAdapHeader()
}

// Бургер та меню
function documentActions(e) {
    const targetElement = e.target

    // Клік по бургеру
    if (targetElement.closest(".icon-menu")) {
        document.documentElement.classList.toggle("open-menu")
        document.body.classList.toggle("scroll-lock")
    }

    // Клік по кнопці підменю на мобілках
    if (isMobile) {
        if (targetElement.closest(".menu__button")) {
            const menuItem = targetElement.closest(".menu__item")
            const isActive = menuItem.classList.contains("--active")

            document.querySelectorAll(".menu__item.--active").forEach(item => {
                item.classList.remove("--active")
            });

            if (!isActive) {
                menuItem.classList.add("--active")
            }
        } else {
            document.querySelectorAll(".menu__item.--active").forEach(item => {
                item.classList.remove("--active")
            })
        }
    }
}

// Динамічне переміщення елементів в хедері
function dynamicAdapHeader() {
    const topHeader = document.querySelector(".top-header")
    const menu = document.querySelector(".menu")
    const header = document.querySelector(".header")
    const phoneHeader = document.querySelector(".bottom-header__phone")
    const searchHeader = document.querySelector(".search-header")
    const bottomContainer = document.querySelector(".bottom-header__container")
    const actionsHeader = document.querySelector(".actions-header")

    const media = window.matchMedia("(max-width: 767.98px)")

    media.addEventListener("change", () => {
        dynamicAdapHeaderInit(media)
    });

    dynamicAdapHeaderInit(media)

    function dynamicAdapHeaderInit(media) {
        if (media.matches) {
            bottomContainer.insertAdjacentElement("beforeend", searchHeader)
            actionsHeader.insertAdjacentElement("beforeend", phoneHeader)
            menu.insertAdjacentElement("beforeend", topHeader)
        } else {
            bottomContainer.insertAdjacentElement("beforeend", phoneHeader)
            actionsHeader.insertAdjacentElement("beforeBegin", searchHeader)
            header.insertAdjacentElement("afterBegin", topHeader)
        }

        searchHeader.classList.toggle("--dynamic", media.matches)
        phoneHeader.classList.toggle("--dynamic", media.matches)
    }
}

// Footer акордеон
document.querySelectorAll(".menus-footer__title").forEach(title => {
    title.addEventListener("click", () => {
        const list = title.nextElementSibling
        title.classList.toggle("active")
        list.classList.toggle("active")
    })
})

function initCoundown(coundown) {
    coundown.forEach(coundownItem => {
        initCoundownItem(coundownItem)
    })
}

function initCoundownItem(coundownItem) {
    const goalTime = coundownItem.dataset.coundown
    if (goalTime) {
        const coundownItemSpans = coundownItem.querySelectorAll(`.countdown__digits span`)
        const timeNow = Date.now()
        const timeGoal = Date.parse(goalTime)

        let timeLeft
        setInterval(() => {
            timeLeft = timeGoal - Date.now()

            coundownItemSpans[0].innerHTML = String(new Date(timeLeft).getDate()).padStart(2, "0")
            coundownItemSpans[1].innerHTML = String(new Date(timeLeft).getHours()).padStart(2, "0")
            coundownItemSpans[2].innerHTML = String(new Date(timeLeft).getMinutes()).padStart(2, "0")
            coundownItemSpans[3].innerHTML = String(new Date(timeLeft).getSeconds()).padStart(2, "0")
            console.log(new Date(timeLeft).getDate())
            console.log(new Date(timeLeft).getHours())
            console.log(new Date(timeLeft).getMinutes())
            console.log(new Date(timeLeft).getSeconds())
        }, 1000)
    }

}

// const birthday = new Date("August 19, 1975 23:15:30");
// const date = birthday.getDate();

// console.log(date);
// // Expected output: 19


// // This example takes 2 seconds to run
// const start = Date.now();

// console.log("starting timer...");
// // Expected output: "starting timer..."

// setTimeout(() => {
//     const ms = Date.now() - start;

//     console.log(`seconds elapsed = ${Math.floor(ms / 1000)}`);
//     // Expected output: "seconds elapsed = 2"
// }, 2000);

// // Standard date-time string format
// const unixTimeZero = Date.parse("1970-01-01T00:00:00Z");
// // Non-standard format resembling toUTCString()
// const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");

// console.log(unixTimeZero);
// // Expected output: 0

// console.log(javaScriptRelease);
// // Expected output: 818035920000