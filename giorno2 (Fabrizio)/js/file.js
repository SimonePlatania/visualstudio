function rendiMinuscolo(){
    var titolo = document.getElementById("titolo").innerHTML;
    var titoloMinuscolo = titolo.toLowerCase();

    document.getElementById("titolo").innerHTML = titoloMinuscolo;
}