const bottoneInserisci = document.getElementById('inserisci');
const tabellaUtenti = document.getElementById('tabella-utenti').getElementsByTagName('tbody')[0];

bottoneInserisci.addEventListener('click', function () {
    const nome = document.getElementById('nome').value.trim();
    const cognome = document.getElementById('cognome').value.trim();
    const eta = document.getElementById('eta').value.trim();
    const data = document.getElementById('data').value;
    const nazionalita = document.getElementById('nazionalita').value.trim();

    if (!nome || !cognome || !eta || !data || !nazionalita) {
        alert("Compila tutti i campi del form!");
        return;
    }

    const nuovaRiga = tabellaUtenti.insertRow();

    const cellaNome = nuovaRiga.insertCell(0);
    const cellaCognome = nuovaRiga.insertCell(1);
    const cellaEta = nuovaRiga.insertCell(2);
    const cellaData = nuovaRiga.insertCell(3);
    const cellaNazionalita = nuovaRiga.insertCell(4);
    const cellaAzioni = nuovaRiga.insertCell(5);

    cellaNome.textContent = nome;
    cellaCognome.textContent = cognome;
    cellaEta.textContent = eta;
    cellaData.textContent = data; 
    cellaNazionalita.textContent = nazionalita;

    const bottoneRimuovi = document.createElement('button');
    bottoneRimuovi.textContent = "Rimuovi";
    bottoneRimuovi.classList.add('rimuovi');
    bottoneRimuovi.addEventListener('click', function() {
        tabellaUtenti.deleteRow(nuovaRiga.rowIndex - 1);
    });

    cellaAzioni.appendChild(bottoneRimuovi);

    document.getElementById('registrazione').reset();
});