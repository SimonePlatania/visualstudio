function minuscolo() {
    var titolo = document.getElementById("ciao").innerHTML;
    var titoloMinuscolo = titolo.toLowerCase();

    document.getElementById("ciao").innerHTML = titoloMinuscolo;

}

function maiuscolo() {
    var titolo = document.getElementById("ciao").innerHTML;
    var titoloMaiuscolo = titolo.toUpperCase();

    document.getElementById("ciao").innerHTML = titoloMaiuscolo;
}