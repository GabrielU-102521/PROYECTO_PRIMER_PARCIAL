let index = 0;

const items = document.querySelector('.carrusel-items');
const images = document.querySelectorAll('.carrusel-items img');
const total = images.length;

function mostrarImagen() {
    items.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector('.btn-next').addEventListener('click', () => {
    index = (index + 1) % total;
    mostrarImagen();
});

document.querySelector('.btn-prev').addEventListener('click', () => {
    index = (index - 1 + total) % total;
    mostrarImagen();
});

