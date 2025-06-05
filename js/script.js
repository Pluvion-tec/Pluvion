let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 4000);

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

const btnTopo = document.getElementById("btnTopo");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

function setTheme(mode) {
    const containers = document.querySelectorAll('.container, .container2, .container3, .container4');
    const textos = document.querySelectorAll('.titulo, .texto, .paragrafo, .texto-titulo, .texto-sobre-nos, .texto-imagem, .textoslideshow, .textoslideshow2');

    const titulo = document.querySelector('.titulo');
    const textoslideshow = document.querySelector('.textoslideshow');
    const textoslideshow2 = document.querySelector('.textoslideshow2');

    if (mode === 'dark') {
        containers.forEach(container => {
            container.style.backgroundColor = 'black';
        });
        textos.forEach(text => {
            text.style.color = 'white';
        });

        if (textoslideshow) textoslideshow.style.color = 'black';
        if (textoslideshow2) textoslideshow2.style.color = 'black';

    } else if (mode === 'light') {
        containers.forEach(container => {
            container.style.backgroundColor = 'white';
        });
        textos.forEach(text => {
            text.style.color = 'black';
        });

        if (titulo) titulo.style.color = 'white';

    } else if (mode === 'original') {
        containers.forEach(container => {
            container.style.backgroundColor = '';
        });

        textos.forEach(text => {
            text.style.color = '';
        });

        if (titulo) titulo.style.color = '';
        if (textoslideshow) textoslideshow.style.color = '';
        if (textoslideshow2) textoslideshow2.style.color = '';
    }
}
