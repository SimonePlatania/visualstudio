function natale() {

    var millisecondiPerGiorno = 1000 * 60 * 60 * 24;
    var oggi = new Date();
    
    var natale = new Date(oggi.getFullYear(), 11, 25);
    if (oggi > natale) {
        natale = new Date(oggi.getFullYear()+1, 11, 25)
    }
    var differenzaMillisecondi = natale - oggi;
    var differenzaGiorni = Math.ceil(differenzaMillisecondi / millisecondiPerGiorno);

    document.getElementById("esercizio1").innerHTML =  "Mancano " +differenzaGiorni+ " giorni a natale "
}

//2)	Scrivi un programma JavaScript per verificare se un dato numero positivo è un multiplo di 3 o un multiplo di 7.

function verificaMultiplo() {
    
    var numero = document.getElementById("numero").value;

    
    if (numero % 3 === 0 && numero % 7 === 0) {
        document.getElementById("risultato").innerHTML = "Il numero è multiplo sia di 3 che di 7.";
    } else if (numero % 3 === 0) {
        document.getElementById("risultato").innerHTML = "Il numero è multiplo di 3.";
    } else if (numero % 7 === 0) {
        document.getElementById("risultato").innerHTML = "Il numero è multiplo di 7.";
    } else if (numero < 0) {
        document.getElementById("risultato").innerHTML = "Il numero è negativo"
    
     } else {
        document.getElementById("risultato").innerHTML = "Il numero non è multiplo né di 3 né di 7.";
    }
}

//5)	Scrivi un programma JavaScript per contare il numero di vocali in una data stringa.

function prendiVocali() {

    var stringa = document.getElementById("vocali").value;


    var contaVocali = 0;

    for (var i = 0; i < stringa.length; i++) {
        // Controlla se il carattere è una vocale
        if ("aeiouàèùòéìAEIOU".includes(stringa[i])) {
            contaVocali++;
        }
    }
        document.getElementById("risultatoE5").innerHTML = "Questa frase contiene " +contaVocali+ " vocali";
      }

      

      function reverseString() {
        var stringa = document.getElementById("stringa").value;
        return stringa.split("").reverse().join("");
    }

      function invertiStringa() {
        var stringa = document.getElementById("stringa").value;
        stringa = reverseString(stringa);
        document.getElementById("risultatoE3").innerHTML = stringa;

       }

       function convertiInOre() {
        var numero = document.getElementById("numeroInOre").value;
        var ore = (numero/60);
        var arrotondaOre = Math.floor(ore);

        var minuti = (ore - arrotondaOre) * 60;
        var arrotondaMinuti = Math.floor(minuti);

        document.getElementById("risultatoE4").innerHTML = arrotondaOre + " ora/e " + arrotondaMinuti + " minuto/i"

       }


    
    
