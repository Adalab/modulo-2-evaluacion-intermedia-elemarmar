'use strict'

// generar un número al azar entre 1 y 100, y la jugadora tiene que adivinarlo.

// El juego da pistas sobre si el nº que prueba es demasiado alto o bajo y contabiliza el nº de intentos hasta que al final la jugadora acierta el juego


// Cuando la jugadora introduzca un número mayor que el aleatorio y pulse en Prueba: 

// Cuando la jugadora no introduzca un número válido y pulse en Prueba: El número debe estar entre 1 y 100.
const button = document.querySelector('.btn');



const numberToGuess = getRandomNumber(100);
console.log(numberToGuess);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
let userNumber;
function checkNumber() {
    const userNumber = document.querySelector('#chosen-number');
    let attempts;
    let hint = document.querySelector('.hint');


    if (userNumber.value < 1 || userNumber.value > 100) {
        hint.innerHTML = "El número debe estar entre 1 y 100.";
    } else if (userNumber.value == numberToGuess) {
        hint.innerHTML = "Has ganado campeona!!!";
    } else if (userNumber.value < numberToGuess) {
        hint.innerHTML = "Demasiado bajo.";
    } else if (userNumber.value > numberToGuess) {
        hint.innerHTML = "Demasiado alto.";

    }



}
    




button.addEventListener('click', checkNumber);

