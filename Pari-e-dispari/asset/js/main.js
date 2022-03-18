/*1) L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
2) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
3) Sommiamo i due numeri
4) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
5) Dichiariamo chi ha vinto.*/

//✊
let prova = document.getElementById("prova");
let prova2 = document.getElementById("prova2");

let myContainer = document.getElementById("my-container");
let pcContainer = document.getElementById("pc-container");
//variabili che mi servono per trasferire al loro interno il .value dei button
let askEvenOdd;
let askNumber;
//gli Id dei container di label, input e button
let containerAskEvenOdd = document.getElementById("container-ask-even-odd");
let containerAskNumber = document.getElementById("container-ask-number");
//gli input dei button
let evenOddInput = document.getElementById("even-odd-input");
let numberChoiceInput = document.getElementById("number-choice-input");
//
let numRandom;
let sum;

//1.1) L’utente sceglie pari o dispari (quindi sblocco con remove(v_hiden) il passaggio successivo).
function avantiOne() {
    containerAskNumber.classList.remove("v_hidden");
    askEvenOdd = evenOddInput.value;
    return askEvenOdd;
}

//1.2) L’utente inserisce un numero da 1 a 5 (poi quando schiaccia avanti fa partire tutte le operazioni).
function avantiTwo() {
    askNumber = parseInt(numberChoiceInput.value);
    if (askNumber === 5) {
        myContainer.innerHTML = `<div>🖐</div>`
    } else if (askNumber === 4) {
        myContainer.innerHTML = `<div>✌✌</div>`
    } else if (askNumber === 3) {
        myContainer.innerHTML = `<div>🤟</div>`
    } else if (askNumber === 2) {
        myContainer.innerHTML = `<div>✌</div>`
    } else if (askNumber === 1) {
        myContainer.innerHTML = `<div>☝</div>`
    }
    console.log(askNumber);

    //2) Generiamo (QUA LO STO RICHIAMANDO) un numero random (sempre da 1 a 5) per il computer (usando una funzione)
    randomNumber();
    if (numRandom === 5) {
        pcContainer.innerHTML = `<div>🖐</div>`
    } else if (numRandom === 4) {
        pcContainer.innerHTML = `<div>✌✌</div>`
    } else if (numRandom === 3) {
        pcContainer.innerHTML = `<div>🤟</div>`
    } else if (numRandom === 2) {
        pcContainer.innerHTML = `<div>✌</div>`
    } else if (numRandom === 1) {
        pcContainer.innerHTML = `<div>☝</div>`
    }
    console.log(numRandom);

    //3) Sommiamo i due numeri
    sum = askNumber + numRandom;
    if (sum % 2 === 0) {
        prova.innerHTML = `${sum}, pari`;
    } else {
        prova.innerHTML = `${sum}, dispari`;
    }

    //5) Dichiariamo chi ha vinto.
    if (askEvenOdd == isEvenOrOdd(sum)) {
        prova2.innerHTML = `<div>hai vinto!</div>`
    } else {
        prova2.innerHTML = `<div>hai perso!</div>`
    }
}

//2) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber() {
    numRandom = Math.floor(Math.random() * 5) + 1;
    return numRandom;
}

//4) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}