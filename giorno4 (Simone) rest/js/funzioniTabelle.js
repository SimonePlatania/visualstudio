
fetch('https://jsonplaceholder.typicode.com/users')
    .then((responseObject) => responseObject.json())
    .then((listaUser) => {
        const corpoTabella = document.getElementById('corpo-tabella');
        
        listaUser.forEach(utente => {
            const riga = document.createElement('tr');
            riga.innerHTML = `
                <td>${utente.id}</td>
                <td>${utente.name}</td>
                <td>${utente.email}</td>
                <td>${utente.phone}</td>
                <td>${utente.company.name}</td>
            `;
            corpoTabella.appendChild(riga);
        });
    })
    .catch(err => console.log('Errore generico', err));