function provaIF(){
    var prova1 = 23
    var prova2 = '23'

    // Test uguaglianza
    if(prova1 == prova2){
        alert('Prima condizione OK')
    }

    // Test uguaglianza ESATTA
    if(prova1 === prova2){
        alert('Seconda condizione OK')
    }

    if(prova2 === 'Pippo'){
        alert('Sono Pippo')
    } else {
        alert('Mi chiamo Mario & Pippo')
    }

    let prova3 = (prova1 === 23) ? "Valgo 23" : "Valgo un'altra cifra"
    alert("prova3 => " + prova3)
}

function provaSwitch(){
    var test = 1

    switch (test) {
        case 1:
            alert("test = 1")
            break;

        case 2:
            alert("test = 2")
            break;
    
        default:
            alert('test = ALTRO')
            break;
    }

}

function provaFor(){
    console.log('Inizio metodo provaFor')
    const max = 10;

    for(var i = 0; i < max; i++){
        console.log('Valore di i => ' + i)
    }
    console.log('Fine metodo provaFor')
}

function provaForEach(){
    const utente1 = {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 24
    }

    const utente2 = {
        nome: 'Danilo',
        cognome: 'Grasso',
        eta: 41
    }

    const utente3 = {
        nome: 'Marcello',
        cognome: 'Ascanio',
        eta: 12
    }

    // Popolamento array 1
    const arrayUtenti = []
    arrayUtenti.push(utente1)
    arrayUtenti.push(utente2)
    arrayUtenti.push(utente3)

    // Popolamento array 2
    // const arrayUtenti = [utente1, utente2, utente3]

    console.log('1) Lista username utente (nome + eta)')

    for(let index in arrayUtenti){
        console.log('- ' + arrayUtenti[index].nome + arrayUtenti[index].eta)
    }

    console.log('2) Lista username utente (cognome + eta)')

    arrayUtenti.forEach( (utente) => 
        console.log('- ' + utente.cognome + utente.eta)
    )
}

function provaBlockScope(){
    var x = 'fuori'

    function faiQualcosa(){
        var x = "dentro"
        console.log(x)
    }

    faiQualcosa();
    console.log(x);
}