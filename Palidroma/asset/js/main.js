/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/
let container = document.getElementById("container");

let ask = prompt("inserisci una parola");

function parolaPalindroma(parola) {
    if (parola == parola.split("").reverse().join("")) {
        container.innerHTML = `${parola} è una parola palindroma`;
    } else {
        container.innerHTML = `${parola} NON è una parola palindroma`;
    }
}

parolaPalindroma(ask);