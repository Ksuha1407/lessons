"use strict"

window.addEventListener(`load`, windowLoad)

let isMobile

function windowLoad() {
    isMobile = window.navigator.userAgentData.mobile

    isMobile ? document.body.setAttribute(`data-touch`, ``) : null

    document.addEventListener(`click`, documentActions)

    dynamicAdapHeader();
}

function dynamicAdapHeader() {

    const topHeader = document.querySelector(`.top-header`)

    const menu = document.querySelector(`.menu`)

    const header = document.querySelector(`.header`)

    const phoneHeader = document.querySelector(`.bottom-header__phone`)
    const searchHeader = document.querySelector(`.search-header`)

    const bottomContainer = document.querySelector(`.bottom-header__container`)
    const actionsHeader = document.querySelector(`.actions-header`)

    const media = window.matchMedia("(max-width: 767.98px)")

    media.addEventListener("change", (e) => {
        dynamicAdapHeaderInit(media)
    })
    dynamicAdapHeaderInit(media)

    function dynamicAdapHeaderInit(media) {
        if (media.matches) {
            bottomContainer.insertAdjacentElement(`beforeend`, searchHeader)
            actionsHeader.insertAdjacentElement(`beforeend`, phoneHeader)
            menu.insertAdjacentElement(`beforeend`, topHeader)
        } else {
            bottomContainer.insertAdjacentElement(`beforeend`, phoneHeader)
            actionsHeader.insertAdjacentElement(`beforeBegin`, searchHeader)
            header.insertAdjacentElement(`afterBegin`, topHeader)
        }

        searchHeader.classList.toggle(`--dynamic`, media.matches)
        phoneHeader.classList.toggle(`--dynamic`, media.matches)
    }
}


function documentActions(e) {
    const targetElement = e.target;

    if (isMobile) {
        // Клік по кнопці меню
        if (targetElement.closest('.menu__button')) {
            const menuItem = targetElement.closest('.menu__item');
            const isActive = menuItem.classList.contains('--active');

            // Закрити всі
            document.querySelectorAll('.menu__item.--active').forEach(item => {
                item.classList.remove('--active');
            });

            // Якщо клік був не по вже активному — відкриваємо
            if (!isActive) {
                menuItem.classList.add('--active');
            }
        } else {
            // Клік поза кнопкою — закриваємо все
            document.querySelectorAll('.menu__item.--active').forEach(item => {
                item.classList.remove('--active');
            });
        }
    }

    // Клік по бургер-іконці
    if (targetElement.closest('.icon-menu')) {
        document.body.classList.toggle('scroll-lock');
        document.documentElement.classList.toggle('open-menu');
    }
}

document.querySelectorAll('.menus-footer__title').forEach(title => {
    title.addEventListener('click', () => {
        const list = title.nextElementSibling; // ul після h5
        title.classList.toggle('active')
        list.classList.toggle('active')
    })
})



