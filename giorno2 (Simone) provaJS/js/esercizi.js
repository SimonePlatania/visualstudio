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
        return stringa.split("").reverse().join(""); //split divide in caratteri in un array di caratteri, reverse li gira e join li unisce in stringa nuovamente
    }

      function invertiStringa() {
        var stringa = document.getElementById("stringa").value;
        stringa = reverseString(stringa);
        document.getElementById("risultatoE3").innerHTML = stringa;

       }

       function convertiInOre() {
        var numero = document.getElementById("numeroInOre").value;
        var ore = (numero/60);
        var arrotondaOre = Math.round(ore);

        var minuti = (ore - arrotondaOre) * 60;
        var arrotondaMinuti = Math.round(minuti);
        document.getElementById("risultatoE4").innerHTML = arrotondaOre + " ora/e " + arrotondaMinuti + " minuto/i"

       }

       function concatenazione() {
        var stringa1 = document.getElementById("stringa1").value;
        var stringa2 = document.getElementById("stringa2").value;

        var stringa1rotta = stringa1.slice(1, 2) + stringa1.slice(3);
        var stringa2rotta = stringa2.slice(1, 2) + stringa2.slice(3);
        var stringaSplittata = stringa1rotta.concat(stringa2rotta);

        document.getElementById("risultatoE6").innerHTML = stringaSplittata;

       }

       //Scrivete un programma JavaScript per creare una stringa usando i tre caratteri centrali di una data stringa di lunghezza dispari.
       //La lunghezza della stringa deve essere maggiore o uguale a tre.

       function nuovaStringa() {
            var stringaE7 = document.getElementById("stringaE7").value;

            if (stringaE7.length % 2 === 0 || stringaE7.length < 3) {
                alert("La stringa deve essere dispari")


            } else {
        //midpoint con MathFloor, prendendo la lunghezza e dividendo a metà.
        var midpoint = Math.floor(stringaE7.length/2);
        var primoCarattere = stringaE7[midpoint - 1];
        var secondoCarattere = stringaE7[midpoint];
        var terzoCarattere = stringaE7[midpoint + 1];

        var stringResult = primoCarattere + secondoCarattere + terzoCarattere;

        document.getElementById("risultatoE7").innerHTML = stringResult;

            }

       }

       
        function kesimo() {
            // Converti gli input in numeri
            const input1 = parseFloat(document.getElementById("array1").value);
            const input2 = parseFloat(document.getElementById("array2").value);
            const input3 = parseFloat(document.getElementById("array2").value);
            const input4 = parseFloat(document.getElementById("array4").value);
            const input5 = parseFloat(document.getElementById("array5").value);

            const numeri = [input1, input2, input3, input4, input5];

            const numeriOrdinati = numeri.sort((a,b) => b-a);

            const terzoNumero = numeriOrdinati[2];

            document.getElementById("risultatoE8").innerHTML = terzoNumero;
            
        }


    


