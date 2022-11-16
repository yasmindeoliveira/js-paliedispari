/* 
Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata
*/

// -------------------PALINDROMA ---------------------------

let parolaScelta = prompt("Inserisca una parola:");

parolaScelta = parolaScelta.toLowerCase();



let risultato = parolaPalindroma(parolaScelta);

if (risultato){
    console.log("La parola scelta è palindroma");
} else {
    console.log("La parola scelta non è palindroma");
};

// Raggionamento per trovare soluzione

/* if (parola[i] == parola[parola.length - 1 - i]){
    console.log("è palindromo:");
    
} else {
    console.log("Non è palindromo:");
    break;
} */


/* 
Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// ----------------------- PARI E DISPARI ----------------------------

/* let pariDispari = prompt("Scegli pari o dispari?");
let numeroUtente */


// -------------- FUNZIONI ----------------------

function parolaPalindroma (parola){

    for (let i = 0; i<parola.length; i++){

        if (parola[i] != parola[parola.length - 1 -i]){
            
            return false;
        };
    };

    return true;

};

    
