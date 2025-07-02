function previous() {
    scrolled += scrollStep;
    if (scrolled > 0) {
        scrolled = -limit;
    }
    carousel.style.transform = `translateX(${scrolled}%)`;
}

function next() {
    scrolled -= scrollStep;
    if (scrolled < -limit) {
        scrolled = 0;
    }
    carousel.style.transform = `translateX(${scrolled}%)`;
}


const carousel = document.querySelector('.carousel-container');
const previousBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');

let scrolled = 0;
const intervalTime = 5000; // Valor em milissegundos
const scrollStep = 100 / carousel.children.length;
const limit = scrollStep * (carousel.children.length - 1);
carousel.style.width = `${100 * carousel.children.length}%`;

let idInterval = setInterval(next, intervalTime);

previousBtn.onclick = function() {
    clearInterval(idInterval);
    previous();
    idInterval = setInterval(next, intervalTime);
}

nextBtn.onclick = function() {
    clearInterval(idInterval)
    next();
    idInterval = setInterval(next, intervalTime);
}