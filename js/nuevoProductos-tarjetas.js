function trasladarse(event){
    
    const elementoPadre = event.target.closest('.shadow');
    let dataNombre = elementoPadre.getAttribute("data-catNombre");
    let dataValue = event.target.getAttribute("data-tipo");


    localStorage.setItem('catNombre', dataNombre)
    if (dataValue) {
        localStorage.setItem('tipoNombre', dataValue);
    } else {
        localStorage.removeItem('tipoNombre');
    }
    window.location = "productos-info";
  }
