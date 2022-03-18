/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/
let container = document.getElementById("container");
let sum;

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let askEvenOdd = prompt("pari o dispari?");
let askNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}
//Sommiamo i due numeri
sum = askNumber + randomNumber();
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        console.log("pari")
        return "pari"
    } else {
        console.log("dispari")
        return "dispari"
    }
}
//Dichiariamo chi ha vinto.
if (askEvenOdd == isEvenOrOdd(sum)) {
    container.innerHTML += `<div>hai vinto!</div>`
} else {
    container.innerHTML += `<div>hai perso!</div>`
}
