'use strict'

/*-----------------------------------*
 *  Constantes / Variables globales  *
 *-----------------------------------*/
// Referencia al botón y al número random
const button = document.querySelector('.btn');
const numberToGuess = getRandomNumber(100);
console.log(`El número aleatorio es: ${numberToGuess}`); //  para verificar

// Variables para la función checkNumber
let attemptMesg = document.querySelector('.attempts');
let attempts = 0;
let userNumber;

/*-----------------------------------*
 *   Función para número aleatorio   *
*------------------------------------*/
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


/*-----------------------------------*
 *   Función para comparar números   *
 *-----------------------------------*/
function checkNumber() {
    attempts++;
    // Constantes / Variables locales
    userNumber = document.querySelector('#chosen-number');
    let hint = document.querySelector('.hint');

    hint.className = 'hint'; // quitar todas las clases extra de hint

    // Error!
    if (userNumber.value < 1 || userNumber.value > 100) {
        hint.innerHTML = "El número debe estar entre 1 y 100.";
        hint.classList.add('alert-msg');
    // Acierto!
    } else if (parseInt(userNumber.value) === parseInt(numberToGuess)) {
        hint.innerHTML = "Has ganado campeona!!!🎉";
        hint.classList.add('special-msg');
        startAgain(); // Reinicia el juego
    // Demasiado bajo! 
    } else if (userNumber.value < numberToGuess) {
        hint.innerHTML = 'Demasiado bajo. <span id="icon"></span>'; // crea icono
        iconHint(); // Aporta ayuda extra (cliente/frío)
    // Demasiado alto!
    } else if (userNumber.value > numberToGuess) {
        hint.innerHTML = 'Demasiado alto. <span id="icon"></span>'; // crea icono
        iconHint(); // Aporta ayuda extra (cliente/frío)
    }

    attemptMesg.innerHTML = `Número de intentos: ${attempts}`;

    /*-----------------------------------------------*
    *   Extra: icono cuando se está frío/caliente   *
    *-----------------------------------------------*/
    // Esta funcionalidad extra añade un icono de fuego cuando el número elegido por el usuario es cercano al número aleatorio (10) y un icono de hielo cuando hay más de 20 números de diferencia.
    // Para ello creo nueva variable que será la diferencia entre el número elegido y el random:
    function iconHint() {
        let icon = document.querySelector('#icon'); // icono dentro de hint
        const numberDif = Math.abs(numberToGuess - userNumber.value); 
        console.log("La diferencia entre el número elegido y el aleatorio es de: " + numberDif);
        
        // Calentito!
        if (numberDif <= 10) {
            icon.innerHTML = '🔥';
            hint.classList.add('hot');
            console.log("Caliente, caliente");

        // Frío!
        } else if (numberDif > 20) {
            icon.innerHTML = '🧊';
            hint.classList.add('cold');
            console.log("¡Frío!");
        
        // Templado!
        } else {
            icon.innerHTML = '';
        }
    }

}
    


// Event Listener en el botón
button.addEventListener('click', checkNumber);





/*-----------------------------------------------*
 *          Extra: volver a empezar              *
 *-----------------------------------------------*/
// Que cuando el usuario acierte y presione sobre el botón, la página se refresque para volver a jogar
function startAgain() {
    button.innerHTML = "Vuelve a empezar";
    button.addEventListener('click', () => {
        location.reload();
        userNumber.value = '';
    });

    
}
