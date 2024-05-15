const btnMobile = document.getElementById("btn_mobile");

function toggleMenu(evento) {
    if (evento.type === 'touchstart') {
        evento.preventDefault();
    }
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    evento.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
        evento.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        evento.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
// const nav = document.getElementById("nav");

// btnMobile.addEventListener("touchstart", function (e) {
//     e.preventDefault();

//     nav.classList.toggle('active');

//     //const active = nav.classList.contains('active');
//     e.currentTarget.setAttribute('aria-expanded',);


// }, nav.passiveeventlisteners ? { passive: false } : true);


