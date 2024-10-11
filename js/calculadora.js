document.addEventListener('DOMContentLoaded', () => {
    const selectTablillaOpcion = document.querySelector('#tablilla-opcion');
    selectTablillaOpcion.addEventListener('input', () => {
        const tablillaActual = actualizarImg()
        actualizarSelectLargo(tablillaActual)
    })
})

function actualizarImg(){
    let src = "./img/calculadora/";
    const imgSrcOpcion = document.querySelector('#tablilla-opcion').value;
    const img = document.querySelector('img');
    img.src = src + imgSrcOpcion

    return imgSrcOpcion;
}

function actualizarSelectLargo(tablilla){
    if(tablilla == "6m.jpg"){
        const selectLargo = document.querySelector('#selectLargo');
        selectLargo.appendChild('')
    }
}