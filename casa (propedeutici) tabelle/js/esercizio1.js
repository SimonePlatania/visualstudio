// Array globale per mantenere gli studenti
let studenti = [];
let id = 0;

function aggiungiStudente() {
    const nome = document.getElementById('nome').value.trim();
    const eta = document.getElementById('eta').value.trim();
    const corso = document.getElementById('corso').value.trim();

    // Validazioni
    if (!nome || !eta || !corso) {
        alert("Devi compilare tutti i campi del form");
        return;
    } 

    if (nome.length < 3 || nome.length > 15) {
        alert("Il nome deve contenere tra 3 e 15 caratteri");
        return;
    }

    if (eta >= 100 || eta == 0 || eta < 0) {
        alert("Età non valida")
    }

    if (corso.length < 3 || corso.length > 30) {
        alert("Il corso deve contenere tra 3 e 30 caratteri");
        return;
    }

    id++;
    studenti.push({id, nome, eta: parseInt(eta), corso});

    aggiornaTabella();

    document.getElementById('nome').value = '';
    document.getElementById('eta').value = '';
    document.getElementById('corso').value = '';
}

function aggiornaTabella() {
    const tabella = document.getElementById('tabellina');
    
    tabella.innerHTML = `
        <tr>
            <td>Id</td>
            <td>Nome</td>
            <td>Eta</td>
            <td>Corso</td>
        </tr>
    `;

    studenti.forEach(studente => {
        const riga = `
            <tr>
                <td>${studente.id}</td>
                <td>${studente.nome}</td>
                <td>${studente.eta}</td>
                <td>${studente.corso}</td>
            </tr>
        `;
        tabella.innerHTML += riga;
    });
}
