function cercaProdotti() {
    fetch('https://fakestoreapi.com/products')
        .then(responseObject => responseObject.json())
        .then((listaProdotti) => {
            document.getElementById("titolo").innerHTML = '<h2>Lista prodotti</h2>'
            
            listaProdotti.forEach(prodotto => {
                document.getElementById('lista').innerHTML += '<div> - ' + prodotto.title + ' (' + prodotto.price +  '$)</div>'
            });
        })
        .catch(err => console.log('Errore generico', err))
}

function cercaSingoloProdotto(){
    let idProdotto = document.getElementById('idProdotto').value;

    if(idProdotto && idProdotto !== '' && idProdotto > 0){

        fetch('https://fakestoreapi.com/products/' + idProdotto, {
            method: "GET"
        })
            .then(responseObject => responseObject.json())
            .then((prodotto) => {
                document.getElementById("titolo").innerHTML = '<h2>Dettaglio prodotto</h2>'
                document.getElementById('lista').innerHTML += '<div> - ' + prodotto.title + ' (' + prodotto.price +  '$)</div>'
            })
            .catch(err => console.log('Errore generico', err))

    } else {
        alert('Inserire un id prodotto valido.')
    }
}

function ripulisci(){
    document.getElementById("titolo").innerHTML = ''
    document.getElementById('lista').innerHTML = ''
}