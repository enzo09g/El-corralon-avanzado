document.addEventListener('DOMContentLoaded', () => {
    agregarEventos()
    obtenerAltoContenedor()
})

const tomarDimensiones = () => {
    const inputs = document.querySelectorAll('input');
    const alto = inputs[0].value
    const ancho = inputs[1].value

    return alto / ancho;
}

const agregarEventos = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', colocarLargo)
    })
}

const obtenerAltoContenedor = () => {
    const cont = document.querySelector('#contenedorCieloRraso');
    const { height } = cont.getBoundingClientRect()
    return height;
}

function colocarLargo() {
    const largo = obtenerLargo();
    const claseActual = obtenerClase()
    const nuevaClase = `w-[${largo}px]`

    const contenedor = document.querySelector('#contenedorCieloRraso');
    contenedor.classList.remove(claseActual);
    contenedor.classList.add(nuevaClase)
}

const obtenerLargo = () => {
    const proporcion = tomarDimensiones();
    const alto = obtenerAltoContenedor();
    return alto / proporcion;
}

const obtenerClase = () => {
    const contenedor = document.querySelector('#contenedorCieloRraso');
    const arrayClases = Array.from(contenedor.classList);
    return claseEnconrada = arrayClases.find(clase => clase.includes('w-['))

}