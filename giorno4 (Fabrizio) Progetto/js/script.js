riempiTabella();

function generaTabella(){
    document.getElementById("divTable").innerHTML = '<table class="container">' + 
                                                        '<thead>' + 
                                                            '<tr>' + 
                                                                '<th>Id</th>' + 
                                                                '<th>Nome</th>' + 
                                                                '<th>Email</th>' + 
                                                                '<th>Telefono</th>' + 
                                                                '<th>Azienda</th>' + 
                                                                '<th></th>' + 
                                                            '</tr>' + 
                                                        '</thead>' + 
                                                        '<tbody></tbody>' + 
                                                    '</table>'
}

function riempiTabella(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responseObject => responseObject.json())
    .then((listaDipendenti) => {
        ripulisci();
        generaTabella();

        listaDipendenti.forEach((dipendente) => {
            document.getElementsByTagName('tbody')[0].innerHTML += 
            '<tr>' + 
                '<td class="padding-left-8">' +  dipendente.id + '</td>' + 
                '<td>' +  dipendente.name + '</td>' + 
                '<td>' +  dipendente.email + '</td>' + 
                '<td>' +  dipendente.phone + '</td>' + 
                '<td>' +  dipendente.company.name + '</td>' + 
                '<td>' + 
                    '<button class="button button-green" onclick="dettaglioDipendente(' + dipendente.id + ')">' + 
                        'Dettaglio' + 
                    '</button>' + 
                '</td>' + 
            '</tr>'
        });

    })
    .catch(err => console.log('Errore generico', err));
}

function dettaglioDipendente(idDipendente){
    fetch('https://jsonplaceholder.typicode.com/users/' + idDipendente)
    .then(responseObject => responseObject.json())
    .then((dipendente) => {
        ripulisci();

        document.getElementById('divDetail').innerHTML += '<p class="text-center"><b>ID: </b>' + dipendente.id + '</p>'
        document.getElementById('divDetail').innerHTML += '<p class="text-center"><b>Name: </b>' + dipendente.name + '</p>'
        document.getElementById('divDetail').innerHTML += '<p class="text-center"><b>Email: </b>' + dipendente.email + '</p>'
        document.getElementById('divDetail').innerHTML += '<p class="text-center"><b>Phone: </b>' + dipendente.phone + '</p>'
        document.getElementById('divDetail').innerHTML += '<p class="text-center"><b>Company: </b>' + dipendente.company.name + '</p>'
        document.getElementById('divDetail').innerHTML += '<br>'

        document.getElementById("divDetail").innerHTML += '<button class="button button-red" onclick="riempiTabella()">' + 
                                                                'Indietro' + 
                                                          '</button>'
    })
    .catch(err => console.log('Errore generico', err));
}

function ripulisci(){
    document.getElementById("divTable").innerHTML = '';
    document.getElementById("divDetail").innerHTML = '';
}