

const navbarEl = document.querySelector(".navbar");
const bottomEl = document.querySelector(".bottom-container");
const hamburgerEl = document.getElementById('hamburger');
const navbarUlEl = document.querySelector('.navbarUl');
const blogEl = document.getElementById('blog');
const homeEl = document.getElementById('home');
const topContainterEl = document.getElementById('top-container');

window.addEventListener("scroll", () => {
    if (window.scrollY > bottomEl.offsetTop - 50 -navbarEl.offsetHeight) {
        homeEl.classList.remove('active');
        hamburgerEl.classList.add('active');
        blogEl.classList.add('actived');
        navbarUlEl.classList.add('actived');

    }
    else {
        homeEl.classList.add('active');
        hamburgerEl.classList.remove('active');
        blogEl.classList.remove('actived');
        navbarUlEl.classList.remove('actived');
    }
})

hamburgerEl.addEventListener('click', () => {
 if(navbarUlEl.clientHeight === 0) {
    navbarUlEl.classList.add('active');
 }
 else {
    navbarUlEl.classList.remove('active');
 }
 
})

navbarUlEl.addEventListener('click', () => {
    navbarUlEl.classList.remove('active');
})



