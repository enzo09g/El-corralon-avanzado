document.addEventListener('DOMContentLoaded', () => {
    agregarEventos()
})

const tomarDimensiones = () => {
    const inputs = document.querySelectorAll('input');
    const lado1 = inputs[0].value
    const lado2 = inputs[1].value

    console.log(lado1 * lado2)

    return lado1 * lado2;

}

const agregarEventos = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', tomarDimensiones)
    })
}