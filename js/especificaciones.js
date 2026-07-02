const crearLista = (items) => items.map(item => `<li>${item}</li>`).join('');

const crearFichaProducto = ({
    imagen,
    alt,
    descripcion,
    datos = [],
    usos = [],
    recomendaciones = [],
    formatos = [],
    galeria = []
}) => `
    <section class="spec-producto contenedor-principal">
        <div class="spec-producto-hero">
            <div class="spec-producto-copy">
                <p class="eyebrow">Ficha técnica</p>
                <h2>Información del producto</h2>
                <p>${descripcion}</p>
            </div>
            <div class="spec-producto-imagen">
                <img src="${imagen}" alt="${alt}" loading="lazy">
            </div>
        </div>

        <div class="spec-grid">
            <article class="spec-card">
                <h3>Datos destacados</h3>
                <ul>${crearLista(datos)}</ul>
            </article>
            <article class="spec-card spec-card-accent">
                <h3>Usos recomendados</h3>
                <ul>${crearLista(usos)}</ul>
            </article>
            <article class="spec-card">
                <h3>Presentación y trabajo</h3>
                <ul>${crearLista(formatos)}</ul>
            </article>
        </div>

        <div class="spec-note">
            <h3>Recomendaciones</h3>
            <ul>${crearLista(recomendaciones)}</ul>
        </div>

        ${galeria.length > 0 ? `
            <div class="spec-gallery">
                <h3>Galería adicional</h3>
                <div class="spec-gallery-grid">
                    ${galeria.map(item => `
                        <figure>
                            <img src="${item.src}" alt="${item.alt}" loading="lazy">
                            ${item.credito ? `<figcaption>${item.credito}</figcaption>` : ''}
                        </figure>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    </section>
`;

const galeriaChapasCommons = [
    {
        src: "./img/especificaciones/galeria-commons/corrugated-iron-sheets-commons.jpg",
        alt: "Chapas corrugadas apiladas",
        credito: `Foto: Evelyn Simak, CC BY-SA 2.0, via Wikimedia Commons.`
    }
];

const galeriaChapaCharrua = [
    {
        src: "./img/especificaciones/galeria-commons/chapa-charrua-aluminizada-profesional.png",
        alt: "Chapas aluminizadas nuevas apiladas"
    }
];

const paginas = [
    {
        titulo: "EXTRACTORES",
        frase: "Funcionan con la fuerza del viento, mejorando las condiciones del aire interno de su local o edificacion.",
        LDKey: "extractores",
        codigo: `        
        <h1 class="m-5 text-capitalize titulo">CARACTERISTICAS</h1>
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
                        <span class="font-Universal-Display">Utilidades: </span>
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
    {
        titulo: "PERFIL C GALVANIZADO",
        frase: "Fabricamos el único perfil C en Uruguay reforzado con nervio en el alto",
        LDKey: "perfil c",
        codigo: `

                <div class="contenedor-principal">

            <div class="contenedor-listas shadow-sm">
                <div class="contenedor-titulo">
                    <h2 class="">INFORMACIÓN GENERAL</h2>
                </div>
                <div class="contenedor-info">
                    <div class="contenedor-lista-roja">
                        <h3 class="titulo-lista">Uso</h3>
                        <ul>
                            <li>Hogares</li>
                            <li>Galpones</li>
                            <li>Tinglados</li>
                            <li>Garages</li>
                            <li>Cerramientos laterales</li>
                        </ul>
                    </div>
                    <div class="contenedor-lista-blanca">
                        <h3 class="titulo-lista">Espesores (mm)</h3>
                        <ul>
                            <li>1,5</li>
                            <li>1,6</li>
                            <li>2,0</li>
                            <li>2,5</li>
                        </ul>
                    </div>
                    <div class="contenedor-lista-roja">
                        <h3 class="titulo-lista">Terminación</h3>
                        <p>Negro - Galvanizado</p>
                    </div>
                    <div class="contenedor-lista-accesorios">
                        <h3 class="titulo-lista">Accesorios</h3>
                        <ul class="estilos-lista">
                            <li>Fabricamos conectores que permiten encastrar los perfiles entre sí.</li>
                            <li>Bulonería importada: tornillos autorroscantes con arandela de neopreno vulcanizado
                                para evitar goteras.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 class="titulo-lista py-2">Ventajas</span>
                        <ul class="fw-light">
                            <li>Menor costo de materiales.</li>
                            <li>Menor gasto en mano de obra(Se instalan con menos personal)</li>
                            <li>Menor gasto en tornillerìa</li>
                            <li>Mejor estètica</li>
                            <li>Se cortan a medida sin limite de largo</li>
                        </ul>
                </div>
            </div>




            <div class="contenedor-principal-tabla">
                <div class="contenedor-titulo-tabla">
                    <h2>TABLA DE MEDIDAS</h2>
                </div>
                <div class="contenedor-tabla">
                    <table class="text-center">
                        <thead>
                            <tr>
                                <th>Alto (mm)</th>
                                <th>Ancho (mm)</th>
                                <th>Ala (mm)</th>
                                <th>Terminación</th>
                                <th>Espesor (mm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-zinc">
                                <td rowspan="3">100</td>
                                <td rowspan="3">45</td>
                                <td rowspan="3">15</td>
                                <td>Negro</td>
                                <td>1.5</td>
                            </tr>
                            <tr class="bg-zinc">
                                <td>Galvanizado</td>
                                <td rowspan="2">2</td>
                            </tr>
                            <tr class="bg-zinc">
                                <td>Negro</td>
                            </tr>
                            <tr>
                                <td rowspan="3">120</td>
                                <td rowspan="2">50</td>
                                <td rowspan="2">15</td>
                                <td>Galvanizado</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Negro</td>
                                <td rowspan="2">2</td>

                            </tr>
                            <tr>
                                <td>65</td>
                                <td>18</td>
                                <td>Galvanizado</td>
                            </tr>
                            <tr class="bg-zinc">
                                <td rowspan="3">140</td>
                                <td rowspan="3">55</td>
                                <td rowspan="3">18</td>
                                <td>Galvanizado</td>
                                <td rowspan="2">2</td>
                            </tr>
                            <tr class="bg-zinc">
                                <td>Negro</td>
                            </tr>
                            <tr class="bg-zinc">
                                <td>Negro</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>140</td>
                                <td>70</td>
                                <td>20</td>
                                <td>Galvanizado</td>
                                <td>2</td>
                            </tr>
                            <tr class="bg-zinc">
                                <td rowspan="2">160</td>
                                <td rowspan="2">50</td>
                                <td rowspan="2">20</td>
                                <td>Galvanizado</td>
                                <td rowspan="2">2</td>
                            </tr>
                            <tr class="bg-zinc">
                                <td>Negro</td>
                            </tr>
                            <tr>
                                <td rowspan="2">180</td>
                                <td rowspan="2">60</td>
                                <td rowspan="2">20</td>
                                <td>Galvanizado</td>
                                <td rowspan="2">2</td>
                            </tr>
                            <tr>
                                <td>Negro</td>
                            </tr>
                            <tr class="bg-zinc">
                                <td>240</td>
                                <td>65</td>
                                <td>25</td>
                                <td>Negro</td>
                                <td>2.5</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="contenedor-imagen">
                    <img src="./img/especificaciones/perfil c/SN perfil c medidas.png" />
                </div>
            </div>

            <div class="row mx-3 p-4">
                <div class="col-sm-12 col-md-6 contenedor-principal-tabla">
                    <div class="contenedor-titulo-tabla">
                        <h2>ESPECIFICACIONES DE LUZ MÀXIMA PARA PERFILES C DE 2mm</h2>
                    </div>
                    <div class="contenedor-tabla">
                        <table class="text-center">
                            <thead>
                                <tr>
                                    <th>
                                        PERFIL C GALVANIZADO 2mm ESPESOR
                                    </th>
                                    <th>
                                        LUZ MAXIMA (METROS APROX)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>C80</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>C100</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>C120</td>
                                    <td>5.5</td>
                                </tr>
                                <tr>
                                    <td>C140</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>C160</td>
                                    <td>6.5</td>
                                </tr>
                                <tr>
                                    <td>C180</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>C240</td>
                                    <td>8</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="d-flex col-md-6 col-sm-12 text-center align-items-center m-sm-3 m-md-0">
                    <p><span class="fw-bold">Nota: </span> Los datos proporcionados son orientativos y deben ser
                        considerados como una guía general. Es importante tener en cuenta que las condiciones pueden
                        variar significativamente entre entornos urbanos y rurales. Para un análisis preciso y adaptado
                        a cada situación específica, se recomienda consultar a un profesional cualificado.</p>
                </div>
            </div>

            <div>
                <h2 class="text-center mt-5">Galería de Proyectos</h2>
                <div class="galeria-de-imagenes">
                    <img src="./img/especificaciones/perfil c/ejemplo1.jpeg" alt="">
                    <img src="./img/especificaciones/perfil c/ejemplo2.jpeg" alt="">
                    <img src="./img/especificaciones/perfil c/ejemplo3.jpeg" alt="">
                    <img class="img-fea" src="./img/especificaciones/perfil c/ejemplo4.jpeg" alt="">
                </div>
            </div>
        </div>

        `
    },
    {
        titulo: "BABETAS",
        frase: "Optimiza la estabilidad y el acabado de tu estructura con la babeta: refuerza, protege y embellece tu hogar, galpon o tinglado.",
        LDKey: "babetas",
        codigo: `
            <section>

        <section class="row p-5 text-center text-uppercase">
            <div class="col-sm-12 col-md-4 p-sm-3 p-md-0">
                <h5 class="fw-bold fs-5">Babeta frontal</h5>
                <div class="px-2">
                    <img class="img-fluid border rounded shadow-sm border-1"
                        src="./img/especificaciones/babetas/RC babeta frontal.png" alt="">
                </div>
            </div>
            <div class="col-sm-12 col-md-4 p-sm-3 p-md-0">
                <h5 class="fw-bold fs-5">Babeta lateral lisa</h5>
                <div class="px-2">
                    <img class="img-fluid border rounded shadow-sm border-1"
                        src="./img/especificaciones/babetas/RC babeta lisa.png" alt="">
                </div>
            </div>
            <div class="col-sm-12 col-md-4 p-sm-3 p-md-0">
                <h5 class="fw-bold fs-5">Babeta cubrepretil</h5>
                <div class="px-2">
                    <img class="img-fluid border rounded shadow-sm border-1"
                        src="./img/especificaciones/babetas/RC babeta cubrepretil.png" alt="">
                </div>
            </div>
        </section>
        <section class="p-5">
            <div class="card">
                <div class="card-body">
                    <h5 class="text-uppercase">Babeta Frontal</h5>
                    <p>Dato: Ancho 0,20 metros. Largo 3 metros<br>Aluminizada y de colores</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="text-uppercase">Babeta Lateral</h5>
                    <p><strong>CHICA:</strong> 0.13 metros de ancho por lado por 3 metros de
                        largo.<br><strong>GRANDE:</strong> 0.20 metros de ancho por lado por 3 metros de largo.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="text-uppercase">Babeta Cubrepretil</h5>
                    <p><strong>CHICA:</strong> Ancho 0.15 metros por 3 metros de largo.<br><strong>GRANDE:</strong>
                        Ancho
                        0.20 metros por 3 metros de largo aluminizada y de colores.</p>
                </div>
            </div>

        </section>


        <div>
            <h2 class="text-center mt-5">Galería de Proyectos</h2>
            <div class="galeria-de-imagenes-babetas">

                <img src="./img/especificaciones/babetas/galeria/imgGaleria1.jpeg" alt="">
                <img src="./img/especificaciones/babetas/galeria/imgGaleria4.jpeg" alt="">

                <div>
                    <img src="./img/especificaciones/babetas/galeria/imgGaleria2.jpeg" alt="">
                    <img src="./img/especificaciones/babetas/galeria/imgGaleria3.jpeg" alt="">
                </div>
            </div>
        </div>

    </section>
        `
    },
    {
        titulo: "CUMBRERAS",
        frase: "Protege contra filtraciones, asegura una unión impecable y aporta un toque final de sofisticación a tu hogar, galpón o tinglado.",
        LDKey: "cumbreras",
        codigo: `

                <section>

        <section class="row p-5 text-center text-uppercase">
            <div class="col-sm-12 col-md-4 p-sm-3 p-md-0">
                <h5 class="fw-bold fs-5">Cumbrera Lisa</h5>
                <div class="px-2">
                    <img class="img-fluid border rounded shadow-sm border-1 cumbreras"
                        src="./img/especificaciones/cumbreras/SN cumbrera img1.png" alt="">
                </div>
            </div>
            <div class="col-sm-12 col-md-4 p-sm-3 p-md-0">
                <h5 class="fw-bold fs-5">Cumbrera trapezoidal</h5>
                <div class="px-2">
                    <img class="img-fluid border rounded shadow-sm border-1 cumbreras"
                        src="./img/especificaciones/cumbreras/SN cumbrera img2.png" alt="">
                </div>
            </div>
            <div class="col-sm-12 col-md-4 p-sm-3 p-md-0">
                <h5 class="fw-bold fs-5">Cumbrera ondulada común</h5>
                <div class="px-2">
                    <img class="img-fluid border rounded shadow-sm border-1 cumbreras"
                        src="./img/especificaciones/cumbreras/SN cumbrera img3.png" alt="">
                </div>
            </div>
        </section>
        <section class="p-5">
            <div class="card">
                <div class="card-body">
                    <h5 class="text-uppercase">Cumbrera lisa aluminizada</h5>
                    <p>Dato: Largo 3 metros, Ancho por lado 0.30 metros.<br>Aluminizada y de colores</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="text-uppercase">Cumbrera trapezoidal</h5>
                    <p>Dato: Cubre 0.95 metros, ancho por lado 0.30 metros. <br>Aluminizada y de colores. Por ser
                        fabricada con la misma chapa posee cierre totalmente hermético.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="text-uppercase">Cumbrera ondulada común</h5>
                    <p>Dato: cubre 1 metro, ancho por lado 0.30 metros. <br>Aluminizada y de colores. Por ser fabricada
                        con la misma chapa posee cierre totalmente hermético.</p>
                </div>
            </div>
        </section>

        <div class="container d-flex justify-content-center aling-items-center">
            <div class="w-75">
                <img class="img-fluid" src="./img/especificaciones/cumbreras/SN cumbreras img 4.png" alt="">
            </div>

        </div>


    </section>

        `
    },
    {
        titulo: "CHAPA TITAN",
        frase: "Chapa económica para cubiertas livianas con largos prácticos y terminación aluminizada.",
        LDKey: "chapa titan",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/chapa titan.png",
            alt: "Chapa Titan aluminizada",
            descripcion: "La chapa Titan es una alternativa liviana para techos y cerramientos donde se busca una solución práctica, económica y fácil de montar.",
            datos: ["Ancho aproximado: 0.80 m.", "Largos habituales: 8, 10, 12 y 15 pies.", "Disponible en versión aluminizada y trapezoidal económica."],
            usos: ["Cubiertas livianas.", "Cerramientos secundarios.", "Depósitos, anexos y estructuras de bajo peso."],
            formatos: ["Se trabaja por unidad.", "Puede combinarse con accesorios de fijación y terminaciones.", "Consultar disponibilidad de largos antes de presupuestar."],
            recomendaciones: ["Verificar pendiente y estructura de apoyo antes de instalar.", "Usar tornillería adecuada con arandela para evitar filtraciones.", "Consultar por cortes o alternativas si el largo requerido no coincide con stock."],
            galeria: galeriaChapasCommons
        })
    },
    {
        titulo: "CANALONES PLUVIALES",
        frase: "Sistema de desagüe para conducir el agua de lluvia y proteger cubiertas, fachadas y accesos.",
        LDKey: "canalones",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/Canalones pluviales en pvc.png",
            alt: "Canalones pluviales de PVC y accesorios",
            descripcion: "Los canalones pluviales ayudan a ordenar la descarga de agua del techo, reduciendo salpicaduras, humedad en muros y acumulación en zonas de paso.",
            datos: ["Sistema compuesto por canalón y accesorios.", "Incluye soportes, gomas, embudos, tapas y esquineros.", "Solución liviana y resistente a la intemperie."],
            usos: ["Viviendas.", "Galpones y tinglados.", "Locales comerciales y ampliaciones."],
            formatos: ["Se presupuesta según metros lineales y accesorios necesarios.", "Permite armar recorridos con esquinas y bajadas.", "Consultar compatibilidad entre piezas del sistema."],
            recomendaciones: ["Definir caídas y puntos de descarga antes de comprar.", "Colocar soportes con separación pareja.", "Limpiar periódicamente para evitar obstrucciones."]
        })
    },
    {
        titulo: "ACCESORIOS PARA TECHOS",
        frase: "Fijaciones y complementos para instalar chapas con terminación firme y prolija.",
        LDKey: "accesorios techos",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/accesorios para techos.png",
            alt: "Accesorios para techos de chapa",
            descripcion: "Conjunto de fijaciones y complementos para montar chapas, resolver encuentros y mejorar la vida útil de la cubierta.",
            datos: ["Tornillos punta mecha.", "Ganchos, clavos de techo y soportes.", "Tacos plásticos y complementos de fijación."],
            usos: ["Instalación de chapas.", "Reparaciones de cubiertas existentes.", "Terminaciones en techos livianos."],
            formatos: ["Disponibles por unidad o cantidad según producto.", "Compatibles con distintas chapas y estructuras.", "Consultar medida de tornillo según soporte."],
            recomendaciones: ["Elegir fijación según estructura: madera, hierro o perfil.", "No reutilizar fijaciones dañadas.", "Acompañar la compra de chapa con la tornillería correspondiente."]
        })
    },
    {
        titulo: "CHAPA TRAPEZOIDAL",
        frase: "Cubierta de chapa con perfil trapezoidal, buena rigidez y terminación moderna.",
        LDKey: "chapa trapezoidal",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/chapa trapezoidal.png",
            alt: "Chapa trapezoidal aluminizada",
            descripcion: "La chapa trapezoidal es una opción resistente y estética para cubiertas y cerramientos, con buena evacuación de agua y montaje simple.",
            datos: ["Ancho aproximado: 1 m.", "Cubre aproximadamente 0.94 m.", "Calibres habituales: 26 y 24.", "Aluminizada y de colores."],
            usos: ["Techos de viviendas y galpones.", "Cerramientos laterales.", "Obras nuevas y recambios de cubierta."],
            formatos: ["Se fabrica a medida.", "Disponible en largos según necesidad de obra.", "Compatible con cumbreras y babetas."],
            recomendaciones: ["Calcular solapes según pendiente.", "Usar fijaciones con arandela de neopreno.", "Consultar color y calibre disponibles antes de definir la compra."],
            galeria: galeriaChapasCommons
        })
    },
    {
        titulo: "CHAPA ONDA COMUN",
        frase: "Chapa ondulada tradicional para techos, cerramientos y soluciones de uso general.",
        LDKey: "chapa onda comun",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/chapa onda comun.png",
            alt: "Chapa ondulada común",
            descripcion: "La chapa onda común es una solución clásica para cubiertas livianas, con amplia disponibilidad y fácil reposición.",
            datos: ["Ancho aproximado: 1.10 m.", "Cubre aproximadamente 1 m.", "Calibres habituales: 26 y 24.", "Aluminizada y de colores."],
            usos: ["Techos de viviendas.", "Galpones, cocheras y anexos.", "Cerramientos y reparaciones."],
            formatos: ["Se fabrica a medida.", "Compatible con cumbreras onduladas.", "Se complementa con tornillos, ganchos y babetas."],
            recomendaciones: ["Considerar solape lateral y longitudinal.", "Evitar perforaciones innecesarias.", "Revisar apoyos y separación de clavadores antes de instalar."],
            galeria: galeriaChapasCommons
        })
    },
    {
        titulo: "CHAPA CHARRUA",
        frase: "Chapa económica aluminizada para cubiertas livianas de rápida instalación.",
        LDKey: "chapa charrua",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/chapa charrua.png",
            alt: "Chapa económica Charrúa aluminizada",
            descripcion: "La chapa Charrúa es una alternativa práctica para obras que requieren cubrir superficies con una inversión controlada.",
            datos: ["Ancho aproximado: 1.10 m.", "Cubre aproximadamente 1 m.", "Largos habituales: 6 a 15 pies.", "Terminación aluminizada."],
            usos: ["Depósitos y anexos.", "Cubiertas secundarias.", "Soluciones económicas para techos livianos."],
            formatos: ["Disponible por largo.", "Consultar stock por medida.", "Se instala con accesorios estándar para chapa."],
            recomendaciones: ["Usar pendiente suficiente para una buena evacuación.", "Calcular cantidad considerando solapes.", "Evitar usar en estructuras sin apoyo adecuado."],
            galeria: galeriaChapaCharrua
        })
    },
    {
        titulo: "CHAPA TRANSLUCIDA",
        frase: "Chapa para sumar iluminación natural en cubiertas y cerramientos.",
        LDKey: "chapa translucida",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/chapa translucida onda comun o trapezoidal.png",
            alt: "Chapa translúcida ondulada o trapezoidal",
            descripcion: "La chapa translúcida permite incorporar luz natural en sectores puntuales del techo sin reemplazar toda la cubierta.",
            datos: ["Disponible en onda común o trapezoidal.", "Largos habituales: 6 a 15 pies.", "Pensada para combinar con chapas metálicas."],
            usos: ["Iluminación de galpones.", "Sectores de trabajo o paso.", "Cubiertas donde se busca reducir iluminación artificial."],
            formatos: ["Elegir perfil compatible con la chapa instalada.", "Se coloca como paño intercalado.", "Consultar largo y disponibilidad."],
            recomendaciones: ["No usar como elemento estructural.", "Asegurar solapes y fijaciones correctas.", "Evitar apoyos o cargas directas sobre la chapa."]
        })
    },
    {
        titulo: "CHAPA TEJA COLONIAL",
        frase: "Chapa con estética de teja para cubiertas visibles y terminaciones residenciales.",
        LDKey: "chapa teja",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/chapa teja colonial.png",
            alt: "Chapa teja colonial",
            descripcion: "La chapa teja combina la rapidez de montaje de una chapa con una terminación visual similar a la teja tradicional.",
            datos: ["Largos habituales: 6, 8, 10, 12 y 15 pies.", "Ancho aproximado: 1.10 m.", "Cubre aproximadamente 1 m.", "Calibre 24.", "Colores: bordeux y gris."],
            usos: ["Viviendas.", "Quinchos y galerías.", "Cubiertas visibles donde importa la estética."],
            formatos: ["Se trabaja por largo.", "Compatible con terminaciones y cumbreras específicas.", "Consultar color disponible."],
            recomendaciones: ["Cuidar alineación de paños para mantener el dibujo.", "Usar fijaciones acordes al color si están disponibles.", "Prever remates laterales y frontales."]
        })
    },
    {
        titulo: "MEMBRANA ASFALTICA",
        frase: "Impermeabilización práctica para cubiertas, encuentros y reparaciones.",
        LDKey: "membrana asfaltica",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/membrana asfaltica.png",
            alt: "Membrana asfáltica en rollo",
            descripcion: "La membrana asfáltica se utiliza para impermeabilizar superficies expuestas al agua y resolver filtraciones en cubiertas.",
            datos: ["Rollo de 1 m de ancho.", "Largos habituales: 5 y 10 m.", "Aplicación en superficies preparadas."],
            usos: ["Azoteas y cubiertas.", "Reparación de filtraciones.", "Encuentros y zonas críticas."],
            formatos: ["Se vende en rollos.", "Puede requerir imprimación o calor según el tipo.", "Consultar terminación disponible."],
            recomendaciones: ["Limpiar y preparar la superficie antes de aplicar.", "Solapar correctamente las uniones.", "Evitar aplicar sobre humedad atrapada o superficies flojas."]
        })
    },
    {
        titulo: "SOLERAS, MONTANTES Y OMEGAS",
        frase: "Perfiles livianos para sistemas de yeso, cielorraso y revestimientos interiores.",
        LDKey: "soleras montantes omegas",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/solera.png",
            alt: "Soleras, montantes y omegas galvanizados",
            descripcion: "Perfiles galvanizados livianos para armar estructuras interiores, cielorrasos y revestimientos con placas.",
            datos: ["Soleras para guías perimetrales.", "Montantes para estructura vertical.", "Omegas para revestimientos y cielorrasos."],
            usos: ["Tabiques interiores.", "Cielorrasos.", "Revestimientos y nivelaciones."],
            formatos: ["Se combinan según sistema constructivo.", "Consultar largos y medidas disponibles.", "Compatibles con tornillería para construcción en seco."],
            recomendaciones: ["Definir modulación antes de comprar.", "Usar fijaciones adecuadas al soporte.", "Mantener perfiles protegidos de deformaciones durante acopio."]
        })
    },
    {
        titulo: "CAÑOS ESTRUCTURALES",
        frase: "Caños para estructuras metálicas, cerramientos, bastidores y trabajos de herrería.",
        LDKey: "caños estructurales",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/caños estructurales.png",
            alt: "Caños estructurales",
            descripcion: "Los caños estructurales se utilizan en proyectos metálicos donde se requiere rigidez, buena presentación y variedad de secciones.",
            datos: ["Disponibles en secciones cuadradas, rectangulares, redondas y oblongas.", "Variedad de medidas y espesores.", "Aptos para soldadura y corte."],
            usos: ["Portones y rejas.", "Estructuras livianas.", "Bastidores, soportes y mobiliario metálico."],
            formatos: ["Consultar medida y espesor según carga.", "Se presupuesta por unidad o largo disponible.", "Puede combinarse con planchuelas, ángulos y perfiles."],
            recomendaciones: ["Definir espesor según uso y solicitación.", "Proteger con pintura o tratamiento si queda expuesto.", "Consultar disponibilidad antes de presupuestar trabajos grandes."]
        })
    },
    {
        titulo: "CIELO RASO PVC",
        frase: "Tablillas de PVC para cielorrasos livianos, limpios y de bajo mantenimiento.",
        LDKey: "cielo raso pvc",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/cielo raso pvc.png",
            alt: "Cielo raso de PVC",
            descripcion: "El cielo raso de PVC es una solución liviana para mejorar terminaciones interiores con instalación rápida y limpieza sencilla.",
            datos: ["Ancho aproximado: 0.20 m.", "Largos habituales: 4 y 6 m.", "Espesor informado: 7 mm."],
            usos: ["Interiores de viviendas.", "Locales comerciales.", "Sectores donde se busca fácil mantenimiento."],
            formatos: ["Se instala con estructura y terminaciones.", "Puede complementarse con perfiles perimetrales.", "Consultar color/modelo disponible."],
            recomendaciones: ["Planificar dirección de colocación para minimizar desperdicio.", "Verificar nivelación de estructura.", "Evitar exposición a fuentes de calor no previstas."]
        })
    },
    {
        titulo: "PNI Y PNU",
        frase: "Vigas estructurales para proyectos que requieren resistencia y capacidad portante.",
        LDKey: "pni pnu",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/PNI.png",
            alt: "Perfiles PNI y PNU",
            descripcion: "Los perfiles PNI y PNU se utilizan como elementos estructurales en obras metálicas, refuerzos y sistemas de soporte.",
            datos: ["Perfiles de alta resistencia.", "Aptos para estructuras y refuerzos.", "Disponibles según medida y stock."],
            usos: ["Estructuras metálicas.", "Refuerzos de obra.", "Soportes, dinteles y proyectos de ingeniería."],
            formatos: ["Consultar largo y medida requerida.", "Puede requerir cálculo técnico según aplicación.", "Se trabaja con corte, soldadura y fijaciones específicas."],
            recomendaciones: ["Validar sección con profesional cuando haya carga estructural.", "Proteger contra corrosión si queda expuesto.", "No sustituir perfiles sin revisar equivalencia."]
        })
    },
    {
        titulo: "CHAPA LABRADA",
        frase: "Chapa con relieve antideslizante para pisos, escalones, rampas y protección.",
        LDKey: "chapa labrada",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/chapa labrada.png",
            alt: "Chapa labrada antideslizante",
            descripcion: "La chapa labrada ofrece una superficie texturada que mejora el agarre y aporta resistencia en zonas de tránsito o trabajo.",
            datos: ["Medidas habituales: 1.50 x 3 m y 1.50 x 6 m.", "Espesores: 2, 2.5 y 3 mm.", "Superficie con relieve."],
            usos: ["Escalones y rampas.", "Pisos técnicos.", "Plataformas, trailers y zonas de trabajo."],
            formatos: ["Se trabaja en planchas.", "Puede cortarse y soldarse según proyecto.", "Consultar espesor según exigencia de uso."],
            recomendaciones: ["Elegir espesor de acuerdo al tránsito.", "Proteger bordes cortados.", "Considerar peso y apoyo de la pieza completa."]
        })
    },
    {
        titulo: "PLANCHAS",
        frase: "Planchas metálicas para fabricación, refuerzos, bases y trabajos de herrería.",
        LDKey: "planchas",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/planchas.png",
            alt: "Planchas metálicas",
            descripcion: "Las planchas son una base versátil para cortes, refuerzos, tapas, bases y piezas a medida en trabajos metálicos.",
            datos: ["Espesores desde 1/8 hasta 3/4.", "Disponibles según stock.", "Aptas para corte, perforación y soldadura."],
            usos: ["Bases y refuerzos.", "Piezas de herrería.", "Tapas, placas y soportes."],
            formatos: ["Se trabaja en planchas.", "Consultar espesor y medida.", "Puede requerir equipo de corte según espesor."],
            recomendaciones: ["Definir espesor por carga y uso.", "Prever peso para traslado y manipulación.", "Proteger contra oxidación si queda expuesta."]
        })
    },
    {
        titulo: "CHAPA BOBINA",
        frase: "Chapa en rollo para cortes a medida y trabajos con largos especiales.",
        LDKey: "chapa bobina",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/chapa bobina.png",
            alt: "Chapa bobina aluminizada o galvanizada",
            descripcion: "La chapa bobina permite resolver largos especiales y cortes a medida para trabajos que no se adaptan a medidas estándar.",
            datos: ["Rollos hasta 100 m.", "Cortes a medida.", "Terminación aluminizada o galvanizada según disponibilidad."],
            usos: ["Fabricación de piezas.", "Cubiertas y terminaciones especiales.", "Trabajos con desarrollo a medida."],
            formatos: ["Se corta según requerimiento.", "Consultar ancho, espesor y terminación.", "Apta para plegados y fabricación."],
            recomendaciones: ["Definir medidas exactas antes del corte.", "Confirmar tolerancias necesarias.", "Manipular con cuidado para evitar marcas en el material."]
        })
    },
    {
        titulo: "CHAPA DECAPADA",
        frase: "Chapa lisa para trabajos donde se necesita superficie uniforme y buena terminación.",
        LDKey: "chapa decapada",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/chapa decapada.png",
            alt: "Chapa decapada",
            descripcion: "La chapa decapada se utiliza en fabricación metálica, plegados, cortes y piezas que requieren una superficie limpia y regular.",
            datos: ["Disponible en varias medidas y espesores.", "Superficie lisa.", "Apta para corte, plegado y soldadura."],
            usos: ["Fabricación de piezas.", "Plegados y terminaciones.", "Trabajos de herrería y metalúrgica."],
            formatos: ["Se trabaja en planchas.", "Consultar espesor y medida disponible.", "Puede combinarse con procesos de pintura o protección."],
            recomendaciones: ["Definir espesor según rigidez requerida.", "Proteger el material si queda expuesto.", "Evitar almacenamiento en zonas húmedas."]
        })
    },
    {
        titulo: "CHAPA PERFORADA",
        frase: "Chapa con perforaciones para ventilación, protección, filtros y usos decorativos.",
        LDKey: "chapa perforada",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/chapa perforada.png",
            alt: "Chapa perforada",
            descripcion: "La chapa perforada combina resistencia con paso de aire o luz, útil para protecciones, ventilaciones y detalles visuales.",
            datos: ["Perforaciones 0.3 y 0.4 mm según disponibilidad.", "Diseños tipo trébol y combinadas.", "Material apto para cortes y marcos."],
            usos: ["Rejillas y ventilaciones.", "Protecciones.", "Paneles decorativos o funcionales."],
            formatos: ["Se trabaja en planchas.", "Consultar patrón de perforación.", "Puede montarse en bastidores."],
            recomendaciones: ["Elegir perforación según caudal o estética requerida.", "Proteger bordes de corte.", "Considerar marco de soporte para evitar deformación."]
        })
    },
    {
        titulo: "METAL DESPLEGADO",
        frase: "Malla metálica rígida para cerramientos, protecciones y superficies ventiladas.",
        LDKey: "metal desplegado",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/metal desplegado.png",
            alt: "Metal desplegado",
            descripcion: "El metal desplegado ofrece resistencia y paso de aire, con una trama útil para cerramientos, protecciones y aplicaciones industriales.",
            datos: ["Variedad de medidas y espesores.", "Trama abierta.", "Material apto para corte y soldadura."],
            usos: ["Protecciones y cerramientos.", "Rejas livianas.", "Plataformas, filtros y divisiones."],
            formatos: ["Se trabaja en planchas.", "Consultar abertura y espesor.", "Puede montarse con marco perimetral."],
            recomendaciones: ["Definir abertura según seguridad o ventilación.", "Usar marco para piezas grandes.", "Proteger con pintura si queda a la intemperie."]
        })
    },
    {
        titulo: "TODO INOXIDABLE",
        frase: "Materiales inoxidables para trabajos que requieren terminación, higiene y resistencia a la corrosión.",
        LDKey: "inoxidable",
        codigo: crearFichaProducto({
            imagen: "./imagenes para promocion/todo inoxidable.png",
            alt: "Materiales de acero inoxidable",
            descripcion: "La línea inoxidable reúne materiales para trabajos donde se busca buena terminación, resistencia a la corrosión y mantenimiento simple.",
            datos: ["Caños, ángulos y planchuelas.", "Chapas, curvas y accesorios.", "Materiales para terminaciones y fabricación."],
            usos: ["Gastronomía y comercios.", "Barandas y terminaciones visibles.", "Ambientes húmedos o de mayor exigencia estética."],
            formatos: ["Consultar medida, espesor y disponibilidad.", "Puede requerir consumibles específicos para soldadura.", "Apto para pulido y terminación fina."],
            recomendaciones: ["Evitar contaminación con herramientas usadas en acero común.", "Elegir calidad y espesor según ambiente.", "Limpiar con productos compatibles con inoxidable."]
        })
    }

]

document.addEventListener('DOMContentLoaded', () => {
    cargarPagina();
})

function cargarPagina() {
    let especificacion = JSON.parse(localStorage.getItem('especificacion'));
    let paginaEncontrada = false;

    for (let i of paginas) {
        if (i.LDKey == especificacion) {
            cargarTitulo(i);
            cargarCodigo(i);
            paginaEncontrada = true;
        }
    }

    if (!paginaEncontrada) {
        cargarTitulo({
            titulo: "Selecciona un artículo",
            frase: "Volvé al catálogo y elegí una card para ver sus especificaciones."
        });
        cargarCodigo({
            codigo: `
                <section class="spec-producto contenedor-principal">
                    <div class="spec-note">
                        <h3>No hay especificación seleccionada</h3>
                        <p>Esta página carga la ficha técnica desde el artículo seleccionado en el catálogo.</p>
                        <a class="btn btn-danger" href="Catalogo">Ir al catálogo</a>
                    </div>
                </section>
            `
        });
    }
}

const cargarCodigo = (objeto) => {
    const main = Array.from(document.getElementsByTagName('main'))[0];
    main.innerHTML = "";
    main.innerHTML = objeto.codigo;
}

const cargarTitulo = (objeto) => {
    const titulo = document.getElementById('titulo');
    const frase = document.querySelector('h2');
    frase.textContent = objeto.frase
    titulo.textContent = objeto.titulo
}
