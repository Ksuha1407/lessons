"use strict";

window.addEventListener("load", windowLoad);

let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function windowLoad() {
    // Додаємо атрибут data-touch на мобільних
    if (isMobile) {
        document.body.setAttribute("data-touch", "");
    }

    document.addEventListener("click", documentActions);

    dynamicAdapHeader();
}

// Бургер та меню
function documentActions(e) {
    const targetElement = e.target;

    // Клік по бургеру
    if (targetElement.closest(".icon-menu")) {
        document.documentElement.classList.toggle("open-menu");
        document.body.classList.toggle("scroll-lock");
    }

    // Клік по кнопці підменю на мобілках
    if (isMobile) {
        if (targetElement.closest(".menu__button")) {
            const menuItem = targetElement.closest(".menu__item");
            const isActive = menuItem.classList.contains("--active");

            document.querySelectorAll(".menu__item.--active").forEach(item => {
                item.classList.remove("--active");
            });

            if (!isActive) {
                menuItem.classList.add("--active");
            }
        } else {
            document.querySelectorAll(".menu__item.--active").forEach(item => {
                item.classList.remove("--active");
            });
        }
    }
}

// Динамічне переміщення елементів в хедері
function dynamicAdapHeader() {
    const topHeader = document.querySelector(".top-header");
    const menu = document.querySelector(".menu");
    const header = document.querySelector(".header");
    const phoneHeader = document.querySelector(".bottom-header__phone");
    const searchHeader = document.querySelector(".search-header");
    const bottomContainer = document.querySelector(".bottom-header__container");
    const actionsHeader = document.querySelector(".actions-header");

    const media = window.matchMedia("(max-width: 767.98px)");

    media.addEventListener("change", () => {
        dynamicAdapHeaderInit(media);
    });

    dynamicAdapHeaderInit(media);

    function dynamicAdapHeaderInit(media) {
        if (media.matches) {
            bottomContainer.insertAdjacentElement("beforeend", searchHeader);
            actionsHeader.insertAdjacentElement("beforeend", phoneHeader);
            menu.insertAdjacentElement("beforeend", topHeader);
        } else {
            bottomContainer.insertAdjacentElement("beforeend", phoneHeader);
            actionsHeader.insertAdjacentElement("beforeBegin", searchHeader);
            header.insertAdjacentElement("afterBegin", topHeader);
        }

        searchHeader.classList.toggle("--dynamic", media.matches);
        phoneHeader.classList.toggle("--dynamic", media.matches);
    }
}

// Footer акордеон
document.querySelectorAll(".menus-footer__title").forEach(title => {
    title.addEventListener("click", () => {
        const list = title.nextElementSibling;
        title.classList.toggle("active");
        list.classList.toggle("active");
    });
});



