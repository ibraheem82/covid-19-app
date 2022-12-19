'use strict';

// * Adding event on the elements

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}


// * Navbar Toggle


// * the function define above will carry out it operation here.
const navbar = document.querySelector("[data-navbar");
const navToggler = document.querySelector("[data-nav-toggler]");
const navbarLinks = document.querySelector("[data-nav-link]");


const toggleNavbar = function () {
    // * anytime the button is clicked -> the active class should be added to it.
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
    document.body.classList.toggle("active");
}

// * Type of event is ["click"], which means a click a event.
addEventOnElem(navToggler, "click", toggleNavbar)



const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
    document.body.classList.remove("active");
}
addEventOnElem(navbarLinks, "click", closeNavbar)


// * active header and back to top  when window scroll down to 100px

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const activeElemOnScroll = function () {
    // * if the window is be scrolled vertically more than 100px 
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}
addEventOnElem(window, "scroll", activeElemOnScroll)