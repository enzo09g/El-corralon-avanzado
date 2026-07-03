document.addEventListener('DOMContentLoaded', () => {
    agregarEventosCatalogo();
})

const agregarEventosCatalogo = () => {
    const tarjetas = document.querySelectorAll('.custom-card[data-especificacion]');

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            guardarLocalStorageEspecificacion(tarjeta);
            window.location = "Especificaciones"
        })
    });
}


const guardarLocalStorageEspecificacion = (tarjeta) => {
    const especificacion = tarjeta.dataset.especificacion;

    if (!especificacion) {
        return;
    }

    localStorage.setItem('especificacion', JSON.stringify(especificacion))
}
