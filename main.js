const grid = new Muuri('.grid',{
    layout: {
        rounding: false 
    }
});
// Agregamos los listeners de los enlaces para filtrar por categoria.
window.addEventListener('load', () => {
    grid.refreshItems().layout();     
    document.getElementById('grid').classList.add('imagenes-cargadas')

    const enlaces = document.querySelectorAll('#categories a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('active'))
            evento.target.classList.add('active');

            const categoria = evento.target.innerHTML.toLowerCase(); 
            categoria === 'all projects' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        })
    }); 

// Agregamos los listeners para la barra de busqueda

    document.querySelector('#search-bar').addEventListener('input',(evento) => {
        const busqueda = evento.target.value;  
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda))
    });

    //Agragaremos un listener para las imagenes
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid.item img').forEach((elemento) =>{
        const ruta = elemento.getAttribute('src');
        const descripcion = elemento.parentNode.parentNode
    });
});