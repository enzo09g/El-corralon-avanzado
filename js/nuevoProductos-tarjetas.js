function trasladarse(event){
    
    const elementoPadre = event.target.closest('.shadow');
    let dataNombre = elementoPadre.getAttribute("data-catNombre");
    let dataValue = event.target.getAttribute("data-tipo");


    localStorage.setItem('catNombre', dataNombre)
    localStorage.setItem('tipoNombre', dataValue);
    window.location = "productos-info";
  }