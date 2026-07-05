const cuerpoTabla = document.getElementById('cuerpoTabla');
const carritoDiv = document.querySelector('.logoWhatsapp');
const WHATSAPP_NUMERO = '59898716205';

let carritoGlobal = leerCarrito();
let linkGlobal;
let tipos = [];
let arrayProductos;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function leerCarrito() {
  try {
    return JSON.parse(localStorage.getItem('carrito')) || [];
  } catch (e) {
    localStorage.removeItem('carrito');
    return [];
  }
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carritoGlobal));
}

function jsonNombre() {
  const catNombre = localStorage.getItem('catNombre') || 'caños';
  localStorage.setItem('catNombre', catNombre);
  return `json/${catNombre}.json`;
}

async function traerInfo(json) {
  try {
    cuerpoTabla.innerHTML = `
      <tr>
        <td class="loading-state" colspan="3">Cargando productos...</td>
      </tr>
    `;
    const response = await fetch(json);

    if (!response.ok) {
      throw new Error(`No se pudo cargar ${json}`);
    }

    const data = await response.json();
    arrayProductos = data;
    cambiarTitulo(data);
    actualizarTipos(data.objeto);
    actualizarOpciones();
    mostrarArticulos(data.objeto);
    preFiltro();
  } catch (error) {
    console.error(error);
    cuerpoTabla.innerHTML = `
      <tr>
        <td class="empty-state" colspan="3">No se pudieron cargar los productos. Volvé a intentar o elegí otra categoría.</td>
      </tr>
    `;
  }
}

function actualizarTipos(productos) {
  tipos = [...new Set(productos.map(producto => producto.tipo).filter(Boolean))];
}

function actualizarOpciones() {
  const selector = document.getElementById('selector-filtro');
  selector.innerHTML = "";

  const opcionDisable = document.createElement('option');
  opcionDisable.value = "";
  opcionDisable.selected = true;
  opcionDisable.textContent = "TIPO";
  opcionDisable.setAttribute("disabled", "disabled");
  selector.appendChild(opcionDisable);

  tipos.forEach(tipo => {
    const opcion = document.createElement('option');
    opcion.value = tipo.toLowerCase();
    opcion.textContent = tipo.toUpperCase();
    selector.appendChild(opcion);
  });
}

function preFiltro() {
  const selector = document.getElementById('selector-filtro');
  const selectOpcion = localStorage.getItem('tipoNombre');

  if (!selectOpcion || selector.options.length <= 1) {
    return;
  }

  const indiceTipo = tipos.findIndex(tipo => selectOpcion === tipo.toLowerCase());

  if (indiceTipo >= 0) {
    selector.selectedIndex = indiceTipo + 1;
    selector.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

function limpiarFIltros() {
  const buscador = document.getElementById('buscador');
  const selector = document.getElementById('selector-filtro');

  localStorage.removeItem('tipoNombre');
  buscador.value = "";
  selector.selectedIndex = 0;
  traerInfo(jsonNombre());
}

function mostrarLogo() {
  const btnWppModal = document.getElementById('wpButton');
  const menuCarrito = document.querySelector('.carrito-menu');
  const tieneProductos = carritoGlobal.length >= 1;

  menuCarrito.classList.toggle('carrito-con-productos', tieneProductos);
  carritoDiv.classList.toggle('d-none', !tieneProductos);

  if (tieneProductos) {
    btnWppModal.removeAttribute('disabled');
  } else {
    btnWppModal.setAttribute('disabled', "");
  }
}

function añadirEventoBtnModal() {
  const btnWppModal = document.getElementById('wpButton');
  btnWppModal.addEventListener('click', () => {
    window.open(linkGlobal, '_blank');
  });
}

function productoEnCarrito(nombre) {
  return carritoGlobal.find(producto => producto.nombre === nombre);
}

function crearFilaProducto(producto, index) {
  const productoGuardado = productoEnCarrito(producto.nombre);
  const fila = document.createElement('tr');
  fila.className = 'fila-producto';
  fila.dataset.descripcion = producto.tipo || '';
  fila.dataset.nombre = producto.nombre;

  const celdaNombre = document.createElement('td');
  celdaNombre.className = 'tabla-nombre';
  celdaNombre.dataset.label = 'Nombre';
  celdaNombre.textContent = producto.nombre;

  const inputCantidad = document.createElement('input');
  inputCantidad.min = '1';
  inputCantidad.type = 'number';
  inputCantidad.placeholder = 'Cantidad...';
  inputCantidad.className = 'form-control form-control-sm';
  inputCantidad.dataset.nombre = producto.nombre;
  inputCantidad.required = true;

  if (productoGuardado) {
    inputCantidad.value = productoGuardado.cantidad;
    inputCantidad.classList.add('is-valid');
  }

  const invalidFeedback = document.createElement('div');
  invalidFeedback.className = 'invalid-feedback';
  invalidFeedback.textContent = 'Ingrese una cantidad.';

  const celdaCantidad = document.createElement('td');
  celdaCantidad.dataset.label = 'Cantidad';
  const inputWrapper = document.createElement('div');
  inputWrapper.append(inputCantidad, invalidFeedback);
  celdaCantidad.appendChild(inputWrapper);

  const btnCarrito = document.createElement('i');
  btnCarrito.className = 'bi bi-cart3 carrito-vacio';
  btnCarrito.dataset.nombre = producto.nombre;
  btnCarrito.style.fontSize = '1.3rem';

  const btnBorrar = document.createElement('i');
  btnBorrar.className = 'bi bi-trash mx-5 borrar';
  btnBorrar.dataset.nombre = producto.nombre;
  btnBorrar.style.fontSize = '1.3rem';

  if (productoGuardado) {
    btnCarrito.style.color = 'cornflowerblue';
  } else {
    btnBorrar.classList.add('d-none');
  }

  const celdaAcciones = document.createElement('td');
  celdaAcciones.dataset.label = 'Lista de presupuesto';
  celdaAcciones.append(btnCarrito, btnBorrar);

  fila.append(celdaNombre, celdaCantidad, celdaAcciones);
  return fila;
}

function mostrarArticulos(productos) {
  mostrarLogo();
  cuerpoTabla.innerHTML = '';

  if (!productos || productos.length === 0) {
    cuerpoTabla.innerHTML = `
      <tr>
        <td class="empty-state" colspan="3">No hay productos para mostrar con este filtro.</td>
      </tr>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  productos.forEach((producto, index) => {
    fragment.appendChild(crearFilaProducto(producto, index));
  });

  cuerpoTabla.appendChild(fragment);
}

function obtenerElementosProducto(nombre) {
  const inputCantidad = document.querySelector(`input[data-nombre="${CSS.escape(nombre)}"]`);
  const btnCarrito = document.querySelector(`.carrito-vacio[data-nombre="${CSS.escape(nombre)}"]`);
  const btnBorrar = document.querySelector(`.borrar[data-nombre="${CSS.escape(nombre)}"]`);

  return { inputCantidad, btnCarrito, btnBorrar };
}

function marcarProductoAgregado(nombre, cantidad) {
  const { inputCantidad, btnCarrito, btnBorrar } = obtenerElementosProducto(nombre);

  if (!inputCantidad || !btnCarrito || !btnBorrar) {
    return;
  }

  inputCantidad.classList.remove('is-invalid');
  inputCantidad.classList.add('is-valid');
  inputCantidad.value = cantidad;
  btnCarrito.style.color = 'cornflowerblue';
  btnCarrito.style.fontSize = '1.3rem';
  btnBorrar.classList.remove('d-none');
}

function marcarProductoSinCantidad(nombre) {
  const { inputCantidad, btnCarrito, btnBorrar } = obtenerElementosProducto(nombre);

  if (!inputCantidad || !btnCarrito || !btnBorrar) {
    return;
  }

  inputCantidad.classList.remove('is-valid');
  inputCantidad.classList.add('is-invalid');
  btnCarrito.style.color = '';
  btnCarrito.style.fontSize = '1.3rem';
  btnBorrar.classList.add('d-none');

  setTimeout(() => {
    inputCantidad.classList.remove('is-invalid');
  }, 8000);
}

function manejarClickCarrito(nombre) {
  const { inputCantidad } = obtenerElementosProducto(nombre);
  const cantidad = inputCantidad ? inputCantidad.value : "";

  if (!cantidad || Number(cantidad) < 1) {
    borrarDelCarrito(nombre);
    marcarProductoSinCantidad(nombre);
  } else {
    enviarAlCarrito({ nombre, cantidad });
    marcarProductoAgregado(nombre, cantidad);
  }

  enviarAlModal();
  mostrarLogo();
}

function manejarClickBorrar(nombre) {
  const { inputCantidad, btnCarrito, btnBorrar } = obtenerElementosProducto(nombre);

  if (inputCantidad) {
    inputCantidad.value = "";
    inputCantidad.classList.remove('is-valid', 'is-invalid');
  }

  if (btnCarrito) {
    btnCarrito.style.color = '';
    btnCarrito.style.fontSize = '1.3rem';
  }

  if (btnBorrar) {
    btnBorrar.classList.add('d-none');
  }

  borrarDelCarrito(nombre);
  enviarAlModal();
  mostrarLogo();
}

function enviarAlCarrito(producto) {
  const indice = carritoGlobal.findIndex(element => element.nombre === producto.nombre);

  if (indice >= 0) {
    carritoGlobal.splice(indice, 1, producto);
  } else {
    carritoGlobal.push(producto);
  }

  modificarPrespuesto();
  guardarCarrito();
}

function borrarDelCarrito(nombre) {
  const index = carritoGlobal.findIndex(element => element.nombre === nombre);

  if (index < 0) {
    return;
  }

  carritoGlobal.splice(index, 1);
  modificarPrespuesto();
  guardarCarrito();
}

const vaciarContenedor = (contenedor) => {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
}

function enviarAlModal() {
  const contenedorModal = document.getElementById('contenedor-modal');
  vaciarContenedor(contenedorModal);

  carritoGlobal.forEach((producto, index) => {
    contenedorModal.appendChild(crearProductoModal(producto, index));
  });
}

function manejarEliminarModal(nombre) {
  borrarDelCarrito(nombre);
  enviarAlModal();
  quitarBtnEliminar(nombre);
  mostrarLogo();
}

function manejarInputModal(nombre, cantidad) {
  enviarAlCarrito({ nombre, cantidad });

  const { inputCantidad } = obtenerElementosProducto(nombre);
  if (inputCantidad && inputCantidad.classList.contains('is-valid')) {
    inputCantidad.value = cantidad;
  }
}

function quitarBtnEliminar(nombre) {
  const { inputCantidad, btnCarrito, btnBorrar } = obtenerElementosProducto(nombre);

  if (btnBorrar) {
    btnBorrar.classList.add('d-none');
  }

  if (btnCarrito) {
    btnCarrito.style.color = '';
    btnCarrito.style.fontSize = '1.3rem';
  }

  if (inputCantidad) {
    inputCantidad.value = "";
    inputCantidad.classList.remove('is-valid', 'is-invalid');
  }
}

function crearProductoModal(producto, index) {
  const div = document.createElement('div');
  div.className = "row my-2 producto-modal fs-6";

  const nombre = document.createElement('div');
  nombre.className = 'col-6 d-flex align-items-center';
  nombre.dataset.nombre = producto.nombre;
  nombre.textContent = producto.nombre;

  const cantidadWrapper = document.createElement('div');
  cantidadWrapper.className = 'col-4 d-flex align-items-center';
  const cantidad = document.createElement('input');
  cantidad.dataset.nombre = producto.nombre;
  cantidad.min = '1';
  cantidad.className = 'form-control inputModal';
  cantidad.type = 'number';
  cantidad.value = producto.cantidad;
  cantidadWrapper.appendChild(cantidad);

  const eliminar = document.createElement('div');
  eliminar.className = 'col-2 d-flex justify-content-center producto-modal-btnEliminar';
  eliminar.dataset.nombre = producto.nombre;
  eliminar.innerHTML = `<i id="${index}" class="bi bi-x fs-2 producto-modal-eliminar"></i>`;

  div.append(nombre, cantidadWrapper, eliminar);
  return div;
}

function modificarPrespuesto() {
  const mensaje = carritoGlobal.map(objeto => `${objeto.cantidad} ${objeto.nombre}`).join('; ');
  const mensajeCodificado = encodeURIComponent(mensaje);
  const link = document.getElementById('link');
  linkGlobal = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensajeCodificado}`;
  link.href = linkGlobal;
}

function cambiarTitulo(data) {
  const titulo = document.getElementById('titulo');
  titulo.textContent = data.titulo.toUpperCase();
}

function buscar() {
  const buscador = document.getElementById('buscador');
  const texto = buscador.value.toLowerCase();
  let visibles = 0;

  $$('.fila-producto').forEach(fila => {
    const coincide = fila.textContent.toLowerCase().includes(texto);
    fila.style.display = coincide ? "table-row" : "none";
    if (coincide) {
      visibles++;
    }
  });

  const emptyRow = document.getElementById('busqueda-vacia');

  if (visibles === 0 && texto) {
    if (!emptyRow) {
      const fila = document.createElement('tr');
      fila.id = 'busqueda-vacia';
      fila.innerHTML = `<td class="empty-state" colspan="3">No encontramos productos con esa búsqueda.</td>`;
      cuerpoTabla.appendChild(fila);
    }
  } else if (emptyRow) {
    emptyRow.remove();
  }
}

function aplicarFiltroTipo() {
  const selectorFiltro = document.getElementById('selector-filtro');
  const filtro = selectorFiltro.value.toLowerCase();
  const productos = Array.from(arrayProductos.objeto);
  const productosFiltrados = productos.filter(producto => producto.tipo && producto.tipo.toLowerCase() === filtro);
  mostrarArticulos(productosFiltrados);
}

document.addEventListener('DOMContentLoaded', () => {
  modificarPrespuesto();
  añadirEventoBtnModal();
  traerInfo(jsonNombre());
  enviarAlModal();

  document.getElementById('buscador').addEventListener('keyup', buscar);

  document.getElementById('selector').addEventListener('change', (event) => {
    localStorage.setItem('catNombre', event.target.value);
    localStorage.removeItem('tipoNombre');
    traerInfo(jsonNombre());
  });

  document.getElementById('selector-filtro').addEventListener('change', aplicarFiltroTipo);

  document.getElementById('btn-quitar-filtro').addEventListener('click', limpiarFIltros);

  cuerpoTabla.addEventListener('click', (event) => {
    const btnCarrito = event.target.closest('.carrito-vacio');
    const btnBorrar = event.target.closest('.borrar');

    if (btnCarrito) {
      manejarClickCarrito(btnCarrito.dataset.nombre);
    }

    if (btnBorrar) {
      manejarClickBorrar(btnBorrar.dataset.nombre);
    }
  });

  document.getElementById('contenedor-modal').addEventListener('click', (event) => {
    const btnEliminar = event.target.closest('.producto-modal-btnEliminar');

    if (btnEliminar) {
      manejarEliminarModal(btnEliminar.dataset.nombre);
    }
  });

  document.getElementById('contenedor-modal').addEventListener('input', (event) => {
    if (event.target.classList.contains('inputModal')) {
      manejarInputModal(event.target.dataset.nombre, event.target.value);
    }
  });
});
