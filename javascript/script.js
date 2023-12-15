// -Visualizzare in pagina 5 numeri casuali. 
// - far partire  un timer di 30 secondi. 
// - Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// -Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let flag = true

let numberVisual = [];
console.log(numberVisual)

setInterval(function(){ 
    prompt("inserisci i tuoi numeri"); 
}, 32000);

var timeleft = 30;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);


for (let i = 0; i < 5; i++) {

    let numberList = (randonNumber(1, 5))
    numberVisual.push(numberList)

    if((downloadTimer > 0) && ( downloadTimer < 30)){
        flag = true
        document.write(numberVisual[i])
    }
    else{
        flag  = false
        document.write('')
    }
}

//  qui sopra ho creato una flag e tramite la funzione ho generato 5 numeri random che successivamente ho pushato nel array vuoto e poi stampato in html












// funzioni

function randonNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
