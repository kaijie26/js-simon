// Descrizione:
// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.  

// Creo l'array vuoto 
const alertArrayNumbers = [];
console.log(alertArrayNumbers);
// Creo l'array per i numeri che ha inserito l'utente
const userArrayNumbers = [];
console.log(userArrayNumbers);
// Creo l'array per i numeri che ha azzeccato l'utente
const userArrayNumberGuess = [];

// Genero i 5 numeri random   
let num = genNum(5, 1, 100);

alert( 'I numeri sono ' + alertArrayNumbers);

setTimeout(userValue, 3000)
    function userValue() {
        for(let i = 0; i < 5; i++) {
            const userNumbers = parseInt(prompt('Inserisci i numeri che hai visto'));
            userArrayNumbers.push(userNumbers);

            
        }    
        

        
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

// Funzione che genera i numeri delle bombe randomiche
function randomNum(min, max) {
     return Math.floor(Math.random() * (max - min + 1) ) + min;
}