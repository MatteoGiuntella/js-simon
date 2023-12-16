// -Visualizzare in pagina 5 numeri casuali. 
// - far partire  un timer di 30 secondi. 
// - Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// -Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// let flag = true

// let numberVisual = [];
// console.log(numberVisual)

// setInterval(function(){ 
//     prompt("inserisci i tuoi numeri"); 
// }, 32000);

// var timeleft = 30;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Finished";
//   } else {
//     document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//   }
//   timeleft -= 1;
// }, 1000);


//  qui sopra ho creato una flag e tramite la funzione ho generato 5 numeri random che successivamente ho pushato nel array vuoto e poi stampato in html


let flag = false

let numberList = [];

let visual = document.getElementById('number')

for (let i = 0; i < 5; i++) {
  
  let createNumber = randonNumber(1, 100);
  numberList.push(createNumber);
  console.log(numberList[i])
  if ( i < 5 -1 ) {
    visual.innerHTML +=  createNumber + ', '
  }
  else{
    visual.innerHTML +=  createNumber 
  }
}

// creo un array vuoti do un assegnazione a createNumber nel' id del mio html;
// con il ciclo pusho 5 numeri nel mio array, random da 1 a 100, e li stampo in html dandogli come indicazione che se entra nel ciclo if avranno spazio e virgola mentre per l'ultimo numero non avrà virgola perchè entra nel ciclo else

setTimeout(displaynone, 5000);
// add funzione setTimeout con display none su visual che farà sparire i numeri stampati precendetemente dopo 30 secondi

let saveNumber = [];

setTimeout(insertNumber, 5010);
 // creato un timeout dove innescherà la fuznione che chioederà i numeri all' utente e poi verranno salvati e pushati nell' array vuoto
 










// funzioni

function randonNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function displaynone () {
    visual.classList.add('none')
  }
  // creo funzione che add classe display none

  function insertNumber (){
    for (let i = 0; i < 5; i++) {  
      let numeriUtente = parseInt(prompt('inserisci i 5 numeri visualizzati:'))
      saveNumber.push(numeriUtente)
    }
    console.log(saveNumber)
  //  creo una funzione dove chiedo all' utente di inserire i 5 numeri visualizzati e li pusho dentro l'array
  }