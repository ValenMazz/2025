let boton = document.getElementById('modoOscuro');
let body = document.body;
let tarjeta = document.querySelector('.tarjeta');
let boton2 = document.querySelector ('.btn-info')

boton.onclick = function() {

    body.classList.toggle('modo-oscuro');
    if (body.classList.contains('modo-oscuro')) {
        boton.innerHTML = 'Modo Claro';
        body.style.backgroundColor = 'black';
        tarjeta.style.backgroundColor = '#fff';

    } else {
        boton.innerHTML = '🌞';
        body.style.backgroundColor = 'white';
        tarjeta.style.backgroundColor = '#fff';
    }
}

boton2.onclick = function(){

    
}
