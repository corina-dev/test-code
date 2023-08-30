/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
            toggle.classList.toggle('close-menu');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== MODAL FORM ===============*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".button--open");
const closeModalBtn = document.querySelector(".button--close");

const submit = document.querySelector(".button--submit");
const message = document.querySelector(".success__message");

const openModal = function () {
    modal.classList.remove("hidden");
    modal.classList.add("show-modal");
    overlay.classList.remove("hidden");
    submit.setAttribute("disabled", "");

    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(input => {
        input.value = '';
        input.classList.remove(".error")
        input.removeAttribute("disabled");
        input.addEventListener('input', () => {
            if (input.value.length !== 0 && input.value.length >= 3) {
                input.classList.remove('error');
            } else {
                input.classList.add('error');
            }
        })
    });

    submit.classList.remove("button--success");
    message.innerHTML = '';
};

const closeModal = function () {
    modal.classList.add("hidden");
    modal.classList.remove("show-modal");
    overlay.classList.add("hidden");
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


submit.addEventListener("click", submitForm);


function checkform() {
    const formElements = document.querySelectorAll('input');
    let isValid = true;

    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].value.length == 0 ||
            formElements[i].value.length < 3 ||
            formElements[i].value.length == '') isValid = false;
    }

    if (isValid) {
        submit.removeAttribute("disabled");
    } else {
        submit.setAttribute("disabled", "");
    }
};

function submitForm(e) {
    e.preventDefault();
    submit.classList.add("button--success");
    message.innerHTML = 'Check your inbox for the download link';
    submit.setAttribute("disabled", "");
    const inputFields = document.querySelectorAll(".form-input");
    inputFields.forEach((element) => {
        element.setAttribute("disabled", "");
    });


}