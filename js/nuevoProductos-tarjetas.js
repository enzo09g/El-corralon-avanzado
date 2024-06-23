function trasladarse(event){
    
    const elementoPadre = event.target.closest('.shadow');
    let dataNombre = elementoPadre.getAttribute("data-catNombre");
    let dataValue = elementoPadre.getAttribute("data-tipo");

    console.log(dataValue)
    localStorage.setItem('catNombre', dataNombre)
    localStorage.setItem('tipoNombre', dataValue);
    window.location = "productos-info.html";
  }