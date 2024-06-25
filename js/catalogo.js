document.addEventListener('DOMContentLoaded', () => {
    añadirEventos();
})

const añadirEventos = () => {
    const array = document.querySelectorAll('.card.mb-4.shadow-sm.custom-card.cursor-active.h-100')
    array.forEach(element => {
        element.addEventListener('click', () => {
            guardarLocalStorageEspecificacion(element)
            window.location = "especificaciones.html"
        })
    });
}


const guardarLocalStorageEspecificacion = (elemento) => {
    console.log(elemento.dataset.especificacion)
    let especificacion = JSON.stringify(elemento.dataset.especificacion)
    localStorage.setItem('especificacion', especificacion)
}
