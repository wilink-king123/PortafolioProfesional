const grid = new Muuri('.grid',{
    layout: {
        rounding: false 
    }
});

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
});