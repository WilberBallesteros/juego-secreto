let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//interactuando con botones
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',  `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //al acertar podemos hacer un juego nuevo con el voton gris
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1; //nos va a dar el valor 

    // console.log(numeroGenerado);
    // console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado esta incluido en la lista
    //includes es un metodo de js q revisa si un numero esta en una lista o arreglo
    if (listaNumerosSorteados.includes(numeroGenerado)) {  
        return generarNumeroSecreto();
        
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto actual');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();

