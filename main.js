const grid = new Muuri('.grid',{
    layout: {
        rounding: false 
    }
});
// Agregamos los listeners de los enlaces para filtrar por categoria.
window.addEventListener('load', () => {
    grid.refreshItems().layout();     
    document.getElementById('grid').classList.add('imagenes-cargadas')
    document.getElementById('header').classList.add('visible')

    const enlaces = document.querySelectorAll('#categories a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('active'))
            evento.target.classList.add('active');

            const categoria = evento.target.innerHTML.toLowerCase(); 
            categoria === 'all projects' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
;        })
    }); 

 // Agregamos los listeners para la barra de busqueda

    document.querySelector('#search-bar').addEventListener('input',(evento) => {
        const busqueda = evento.target.value;  
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda))
    });

    //Agragaremos un listener para las imagenes
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) =>{
        
        elemento.addEventListener('click',() =>{
            overlay.classList.add('activo');
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
        })

    });

    //Eventlistener del boton de cerrar 
    document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
        overlay.classList.remove('activo')
    });

    //EventListener del overlay
    overlay.addEventListener('click', (evento) => {
        // overlay.classList.remove('activo')
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : "";
    });
});