function provaFind(){
    const arrayStudenti = [
        {nome: 'Girolamo', cognome: 'Seghetta', matricola: 105648},
        {nome: 'Gianfranco', cognome: 'Manolo', matricola: 105649},
        {nome: 'Alda', cognome: 'Aldi', matricola: 105650}
    ]

    const matricolaScelta = arrayStudenti.find( (studente) => studente.matricola ===  105650 )
    console.log('matricolaScelta => ' + JSON.stringify(matricolaScelta))
}

function provaFilter(){
    // Esempio array di stringhe
    const arrayCittaItaliane = ['Roma', 'Milano', 'Napoli', 'Palermo', 'Gubbio', 'Firenze', 'Bologna', 'Venezia'];

    // Restituisco solo le citta' il cui nome e' di 6 lettere
    const cittaFiltrate = arrayCittaItaliane.filter( (citta) => citta.length === 6 )
    console.log('Le citta\' italiane il cui nome e\' di 6 lettere sono => ' + cittaFiltrate)
}

function provaIncludes(){
    // Esempio array di stringhe
    const astuccio = ['gomma', 'panna', 'matita'];
    console.log("L'astuccio contiene la gomma? " + (astuccio.includes('gomma') ? 'Si' :'No'))
}

function provaIndexOf(){
    const lista = ['Mario', 'Paolo', 'Giovanna']
    console.log('La prima occorrenza dell\'elemento Mario e\': ' + (lista.indexOf("Mario") + 1))
}

function provaMap(){
    // Esempio array di stringhe
    const arrayCitta = ['Tokyo', 'Londra', 'Barcellona', 'Berlino', 'Roma']

    const listaCittaMaiuscole = arrayCitta.map( (citta) => {
        return citta.toUpperCase()
    })

    console.log('listaCittaMaiuscole => ' + listaCittaMaiuscole)

    // Esempio array di oggetti
    let supereroi = [
        {nome: 'Peter', cognome: 'Parker', alias: 'Spiderman'},
        {nome: 'Tony', cognome: 'Stark', alias: 'Iron-Man'},
        {nome: 'Steven', cognome: 'Strange', alias: 'Doctor Strange'},
        {nome: 'Bruce', cognome: 'Wayne', alias: 'Batman'}
    ]

    const listaSupereori = supereroi.map( (supereroe) => {
        return supereroe.alias + ' (' + supereroe.nome + ' ' + supereroe.cognome + ')'
    })

    console.log('listaSupereroi => ' + listaSupereori)
}

function provaSlice(){
    // Slice di una stringa
    let stringa = 'Mai una gioia'
    console.log('1) stringa => ' + stringa.slice(4))
    console.log('2) stringa => ' + stringa.slice(1, 3))

    // Slice di un array
    let array = ['A', 'B', 'C', 'D']
    console.log('1) array => ' + array.slice(1))
    console.log('2) array => ' + array.slice(1, 3))
}

function provaSort(){
    // Ordinamento alfabetico
    let array1 = ['B', 'C', 'A']
    console.log('array1 ordinato ASC => ' + array1.sort())

    // Ordinamento numerico
    let array2 = [21, 2, 4, 1, 0, 11, 6]

    let array2Ordinato = array2.sort(function(a, b) {
        return a - b;
    });

    console.log('array2 ordinato ASC => ' + array2Ordinato)
}