const paginas = [
    {
        titulo: "EXTRACTORES",
        LDKey: "extractores",
        codigo: `        
        <h1 class="m-3 text-capitalize titulo">CARACTERISTICAS</h1>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <div class="d-flex flex-column border border-1 rounded-3">
                        <span class="text-center text-black font-monospace spanModelo">Modelo LF150</span>
                        <img class="img-fluid" src="./img/especificaciones/extractores/150mm.jpeg" alt="">
                        <span class="medida">Ø 150 mm</span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="d-flex flex-column border border-1 rounded-3">
                        <span class="text-center text-black font-monospace spanModelo">Modelo LF200</span>
                        <img class="img-fluid" src="./img/especificaciones/extractores/200mm.jpeg" alt="">
                        <span class="medida">Ø 200 mm</span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="d-flex flex-column border border-1 rounded-3">
                        <span class="text-center text-black font-monospace spanModelo">Modelo LF300</span>
                        <img class="img-fluid" src="./img/especificaciones/extractores/300mm (2).jpeg" alt="">
                        <span class="medida">Ø 300 mm</span>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-6 borde-datos">
                    <ul>
                        <li>Turbina de aluminio</li>
                        <li>Mecanismo giratorio realizado en hierro galvanizado (Sin ruleman)</li>
                        <li>Turbina de aluminio</li>
                    </ul>
                </div>
                <div class="col-6">
                    <ul class="datos">
                        <span class="fw-bolder">Utilidades: </span>
                        <p>Estufas, parilleros y ventilacion.</p>
                    </ul>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-sm-12 col-md-4">
                    <div class="d-flex flex-column border border-1 rounded-3">
                        <span class="text-center text-black font-monospace spanModelo">Modelo LF300</span>
                        <img class="img-fluid" src="./img/especificaciones/extractores/300 2.0.jpeg" alt="">
                        <span class="medida">Ø 300 mm</span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="d-flex flex-column border border-1 rounded-3">
                        <span class="text-center text-black font-monospace spanModelo">Modelo LF400</span>
                        <img class="img-fluid" src="./img/especificaciones/extractores/400mm.jpeg" alt="">
                        <span class="medida">Ø 400 mm</span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="d-flex flex-column border border-1 rounded-3">
                        <span class="text-center text-black font-monospace spanModelo">Modelo LF500</span>
                        <img class="img-fluid" src="./img/especificaciones/extractores/500mm.jpeg" alt="">
                        <span class="medida">Ø 500 mm</span>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-6 borde-datos">
                    <ul>
                        <li>Turbina de aluminio</li>
                        <li>Mecanismo de hierro galvanizado</li>
                        <li>Rodamiento sobre dos rulemanes zz</li>
                        <li>Base en chapa galvanizada N°24 y N°22</li>
                    </ul>
                </div>
                <div class="col-6">
                    <ul class="datos">
                        <span class="fw-bolder">Utilidades: </span>
                        <p class="fw-medium">Ventilacion y renovación de aire inerno en: Galpones, locales comerciales e
                            industriales, edficios, supermercados, hangares, sotanos, uraniarios, salas velatorias, ETC.
                        </p>
                    </ul>
                </div>
            </div>

        </div>`
    },

]

document.addEventListener('DOMContentLoaded', () => {
    cargarPagina();
})

function cargarPagina() {
    let especificacion = JSON.parse(localStorage.getItem('especificacion'));

    for (let i of paginas) {
        if (i.LDKey == especificacion) {
            cargarTitulo(i);
            cargarCodigo(i);
        }
    }
}

const cargarCodigo = (objeto) => {
    const main = Array.from(document.getElementsByTagName('main'))[0];
    main.innerHTML = "";
    main.innerHTML = objeto.codigo;
}

const cargarTitulo = (objeto) => {
    const titulo = document.getElementById('titulo');
    titulo.textContent = objeto.titulo   
}