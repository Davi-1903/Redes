function OpenCloseMenu() {
    menu.classList.toggle('open');
}


const menu = document.querySelector('header nav');
const btnOpen = document.querySelector('header #btn-menu-open');
const btnClose = document.querySelector('header nav #btn-menu-close');

btnOpen.onclick = OpenCloseMenu;
btnClose.onclick = OpenCloseMenu;

window.onresize = function() {
    menu.classList.remove('open');
}