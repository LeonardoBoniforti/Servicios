const container = document.getElementById('container');
const nav = document.getElementById('nav');
const navUl = document.getElementById('nav-ul');
const navLi = document.getElementById('nav-li');
const button = document.getElementById('btn');

document.addEventListener('click', e => {
    if(e.target === btn) {
        container.classList.toggle('active');
        nav.classList.toggle('active');
        navUl.classList.toggle('active');
        navLi.classList.toggle('active');
        btn.classList.toggle('active');
    }
})