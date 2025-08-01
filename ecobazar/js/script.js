"use strict"

window.addEventListener('load', windowLoad)

let isMobile

function windowLoad() {
    isMobile = window.navigator.userAgentData.mobile
    isMobile ? document.body.setAttribute('data-touch', '') : null

    document.addEventListener('click', documentActions)

    const coundown = document.querySelectorAll('[data-coundown]')
    coundown.length ? initCoundown(coundown) : null

    dynamicAdaptHeader();
}
function dynamicAdaptHeader() {
    const topHeader = document.querySelector('.top-header')
    const header = document.querySelector('.header')
    const menu = document.querySelector('.menu')

    const phoneHeader = document.querySelector('.bottom-header__phone')
    const searchHeader = document.querySelector('.search-header')

    const bottomContainer = document.querySelector('.bottom-header__container')
    const actionsHeader = document.querySelector('.actions-header')
    const placeSearch = document.querySelector('.body-header__place-search')

    const media = window.matchMedia("(max-width: 767.98px)")

    media.addEventListener("change", (e) => {
        dynamicAdaptHeaderInit(media)
    })
    dynamicAdaptHeaderInit(media)

    function dynamicAdaptHeaderInit(media) {
        if (media.matches) {
            bottomContainer.insertAdjacentElement('beforeend', searchHeader)
            actionsHeader.insertAdjacentElement('beforeend', phoneHeader)
            menu.insertAdjacentElement('beforeend', topHeader)
        } else {
            bottomContainer.insertAdjacentElement('beforeend', phoneHeader)
            placeSearch.insertAdjacentElement('beforeend', searchHeader)

            header.insertAdjacentElement("afterbegin", topHeader)
        }
        searchHeader.classList.toggle('--dynamic', media.matches)
        phoneHeader.classList.toggle('--dynamic', media.matches)
    }
}
function documentActions(e) {
    const targetElement = e.target
    if (isMobile) {
        if (targetElement.closest('.menu__button')) {
            const subMenu = targetElement.closest('.menu__button').nextElementSibling
            if (subMenu) {
                subMenu.closest('.menu__item').classList.toggle('--active')
            }
        } else {
            const menuItemActive = document.querySelectorAll('.menu__item.--active')
            if (menuItemActive.length) {
                menuItemActive.forEach(menuItemActiveItem => {
                    menuItemActiveItem.classList.remove('--active')
                });

            }
        }
    }
    if (targetElement.closest('.icon-menu')) {
        document.body.classList.toggle('scroll-lock')
        document.documentElement.classList.toggle('open-menu')
    }
    if (targetElement.closest('.add-to-cart')) {
        const button = targetElement.closest('.add-to-cart')
        const productItem = button.closest('.item-products')
        const productImage = productItem.querySelector('.item-products__image')
        const cartHeader = document.querySelector('.cart-header__icon span')
        flyImage(productImage, cartHeader)
    }

}

function flyImage(productImage, cartHeader) {
    const flyImg = document.createElement('img')
    const speed = +productImage.dataset.speed || 1300

    flyImg.src = productImage.src
    flyImg.style.cssText = `
		position:absolute;
		z-index:60;
		transition-duration:${speed}ms;
		width: ${productImage.offsetWidth}px;
		left: ${productImage.getBoundingClientRect().left + scrollX}px;
		top:${productImage.getBoundingClientRect().top + scrollY}px;
	`
    document.body.insertAdjacentElement('beforeend', flyImg)

    flyImg.style.left = `${cartHeader.getBoundingClientRect().left + scrollX}px`
    flyImg.style.top = `${cartHeader.getBoundingClientRect().top + scrollY}px`
    flyImg.style.width = `10px`
    // flyImg.style.opacity = `0.2`

    setTimeout(() => {
        flyImg.remove()
        cartHeader.innerHTML = +cartHeader.innerHTML + 1
    }, speed);
}

function initCoundown(coundown) {
    coundown.forEach(coundownItem => {
        initCoundownItem(coundownItem)
    });
}
function initCoundownItem(coundownItem) {
    const goalTime = coundownItem.dataset.coundown
    if (goalTime) {
        const coundownItemSpans = coundownItem.querySelectorAll('.countdown__digits span')
        const timeGoal = Date.parse(goalTime)
        setInterval(() => {
            let timeLeft = timeGoal - Date.now()

            const MSECONDS_PER_DAY = 1000 * 60 * 60 * 24
            const MSECONDS_PER_HOUR = 1000 * 60 * 60
            const MSECONDS_PER_MIN = 1000 * 60
            const MSECONDS_PER_SEC = 1000

            const days = Math.floor(timeLeft / MSECONDS_PER_DAY)
            const hours = Math.floor((timeLeft % MSECONDS_PER_DAY) / MSECONDS_PER_HOUR)
            const minutes = Math.floor((timeLeft % MSECONDS_PER_HOUR) / MSECONDS_PER_MIN)
            const seconds = Math.floor((timeLeft % MSECONDS_PER_MIN) / MSECONDS_PER_SEC)

            coundownItemSpans[0].innerHTML = String(days).padStart(2, "0")
            coundownItemSpans[1].innerHTML = String(hours).padStart(2, "0")
            coundownItemSpans[2].innerHTML = String(minutes).padStart(2, "0")
            coundownItemSpans[3].innerHTML = String(seconds).padStart(2, "0")
        }, 1000)
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

