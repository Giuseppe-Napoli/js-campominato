/* **Consegna**
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

var limit = 100;
var numb_bombe = 16;
var nTentativi = limit - numb_bombe;
var arr_boom = bombaList(numb_bombe,limit)
console.log(arr_boom + '+++++++++++++')
var arr_estratti = [];
//var gen_number = GeneretorNum(limit); -- ho dichiarato questa variabile fuori dal ciclo e sono entrato in un loop ATTENZIONE --




var finish_game = false; false; //su questo baso il mio ciclo, ogni volta che il ciclo è false il mio game finisce.
while(finish_game === false){

  var richiesta_number = parseInt(prompt("Inserisci un numero"));

  if(arr_estratti.includes(richiesta_number) === true){

     alert("Attenzione! Hai gia inserito questo numero. Riprova!")
  }else if(arr_boom.includes(richiesta_number) ===true )  {

     alert("Hai perso! Hai fatto "+ arr_estratti.length + " tentativi");
     
     finish_game = true;

  }else if( richiesta_number > limit ){

    alert("Attenzione! Il numero è superiore a "+limit+" .Riprova!")

  }else if( richiesta_number < 1 ){ 

    alert("Attenzione! Il numero è inferiore a 1. Riprova!")

  }else if( isNaN(richiesta_number) === true ){ 

    alert("Attenzione! Non hai inserto nessun numero. Riprova!")

  }
  else{ 

    arr_estratti.push(richiesta_number); 
    if(nTentativi === arr_estratti.length) 
    {
      alert("COMPLIMENTI, HAI VINTO!");
      finish_game = true;
    }

  }
}




function bombaList(nboom , max){
  var arr_boom = [];
  //creo un ciclo che mi consenta di inserire le bombe all'interno dell array
  while(arr_boom.length < nboom){
    var boom = GeneretorNum (max);
    if(arr_boom.includes(GeneretorNum (max))=== false){
      arr_boom.push(GeneretorNum (max));
      //console.log("+++++++++++++" + arr_boom);
    }
  }
  
  return arr_boom
}






// con una funzione vado a generare dei numeri casuali del computer


function GeneretorNum (max){

  var pc_num = Math.ceil(Math.random() * max);
  return pc_num

  
}