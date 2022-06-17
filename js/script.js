// Descrizione:
// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.  

// Creo l'array per i numeri random
const alertArrayNumbers = [];
// Creo l'array per i numeri che ha inserito l'utente
const userArrayNumbers = [];
// Creo l'array per i numeri che ha azzeccato l'utente
const userArrayNumberGuess = [];

// Genero i 5 numeri random   
let num = genNum(5, 1, 100);
// Mostro al utente i numeri random
alert( 'I numeri sono ' + alertArrayNumbers);

// Imposto a 30 secondi di intervallo tra la conferma della visione dei numeri e la richiesta dei numeri visionati
setTimeout(userValue, 30000)
    function userValue() {
        // Genero 5 prompt con il ciclo for
        for(let i = 0; i < 5; i++) {
            // Chiedo al utente di inserire un numero 
            const userNumbers = parseInt(prompt('Inserisci i numeri che hai visto'));
            // Tutti i numeri che mi da l'utente li pusho in un array apposito
            userArrayNumbers.push(userNumbers);
            // Se il numero dato dal utente è nel array dei numeri generati random
              // Pusho in un array conteneti i numeri azzeccati dal utente
            if (alertArrayNumbers.includes(userNumbers)) {
                userArrayNumberGuess.push(userNumbers);
                
            }     
 
        }

        // Comunico il risulto di quanti e quali numeri ha azzeccato l'utente
        alert('Hai indovino ' + '' + userArrayNumberGuess.length + 'numeri. E i numeri sono ' + '' + userArrayNumberGuess  )  
        console.log(userArrayNumbers);
        console.log(userArrayNumberGuess);  
               
}

//----------------------------------------------------------------------------------
// FUNZIONE PER GENERARE BOMBE
//-------------------------------------------------------
// Genero 16 bombe del tutto casuali e li inserisco in una array ma non possono essere duplicati   
function genNum(numElements, rangeMin, rangeMax) {

    while(alertArrayNumbers.length < numElements) {
    // Genero i numeri dal min al max in base ai range
    const numElement = randomNum(rangeMin, rangeMax );
    // Inserisco nel array solo i numeri non preesenti nel array
    if(!alertArrayNumbers.includes(numElement)) {
        alertArrayNumbers.push(numElement);
                
                
       }
            
    }
        
    return alertArrayNumbers;
}

console.log(alertArrayNumbers);

// Funzione che genera i numeri delle bombe randomiche
function randomNum(min, max) {
     return Math.floor(Math.random() * (max - min + 1) ) + min;
}