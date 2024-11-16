document.addEventListener('DOMContentLoaded', () => {
    /* Actualizar por primera vez*/
    const tablillaActual = actualizarImg()
    actualizarSelectLargo(tablillaActual)
    ajustarVentana()
    /* Actualizar por primera vez*/

    const selectTablillaOpcion = document.querySelector('#tablilla-opcion');
    selectTablillaOpcion.addEventListener('input', () => {
        const tablillaActual = actualizarImg()
        actualizarSelectLargo(tablillaActual)
    })
})

function actualizarImg() {
    let src = "./img/calculadora/";
    const imgSrcOpcion = document.querySelector('#tablilla-opcion').value;
    const img = document.querySelector('img');
    img.src = src + imgSrcOpcion

    return imgSrcOpcion;
}

function actualizarSelectLargo(tablilla) {
    if (tablilla == "7m.jpg") {
        borrarOpciones('#selectLargo')
        const selectLargo = document.querySelector('#selectLargo');
        const opciones = document.querySelector('#options6mm').content.cloneNode(true);
        selectLargo.appendChild(opciones)
    }

    if (tablilla == '10m.jpg') {
        borrarOpciones('#selectLargo')
        const selectLargo = document.querySelector('#selectLargo');
        const opciones = document.querySelector('#options10mm').content.cloneNode(true);
        selectLargo.appendChild(opciones)
    }
}

function borrarOpciones(selectTipo) {
    const select = document.querySelector(selectTipo);
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
}

function ajustarVentana() {
    if (window.innerWidth > 1024) {
        const main = document.querySelector('main');
        main.classList.remove('container')
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            const main = document.querySelector('main');
            main.classList.remove('container')
        }
    })
}