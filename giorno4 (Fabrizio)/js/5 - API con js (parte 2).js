function aggiungiProdotto(){
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;

    if( title && title !== '' && 
        price && price > 0 && 
        description && description !== '' ){

            fetch('https://fakestoreapi.com/products', {
                method: "POST",
                body: JSON.stringify(
                    {
                        title: title,
                        price : price,
                        description: description,
                        image: 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg',
                        category: 'electronic'
                    }
                )
            })
            .then(responseObject => responseObject.json())
            .then((prodotto) => {
                document.getElementById("titolo").innerHTML = '<h2>Inserimento eseguito.</h2>'
                document.getElementById('lista').innerHTML += '<div> Il prodotto da te richiesto e\' stato inserito.</div>'
                document.getElementById('lista').innerHTML += '<div> ID assegnato al prodotto: ' + prodotto.id + '</div>'
            })
            .catch(err => console.log('Errore generico', err))

    } else {
        alert('Dati del prodotto non validi.')
    }
}

function modificaProdotto(){
    const idMod = document.getElementById('idMod').value;
    const titleMod = document.getElementById('titleMod').value;
    const priceMod = document.getElementById('priceMod').value;
    const descriptionMod = document.getElementById('descriptionMod').value;


    if( idMod && idMod > 0 && 
        titleMod && titleMod !== '' && 
        priceMod && priceMod > 0 && 
        descriptionMod && descriptionMod !== '' ){

        fetch('https://fakestoreapi.com/products/' + idMod, {
            method: "PUT",
            body: JSON.stringify(
                {
                    title: titleMod,
                    price : priceMod,
                    description: descriptionMod,
                    image: 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg',
                    category: 'electronic'
                }
            )
        })
        .then(responseObject => responseObject.json())
        .then((prodotto) => {
            document.getElementById("titolo").innerHTML = '<h2>Modifica eseguita.</h2>'
            document.getElementById('lista').innerHTML += '<div> Il prodotto da te richiesto e\' stato modificato.</div>'
            document.getElementById('lista').innerHTML += '<div> ID del prodotto modificato: ' + prodotto.id + '</div>'
        })
        .catch(err => console.log('Errore generico', err))

    } else {
        alert('Dati del prodotto non validi.')
    }
}

function ripulisci(){
    document.getElementById("titolo").innerHTML = '';
    document.getElementById("lista").innerHTML = '';
}