

    fetch("http://localhost/hw1/prodotti_uomo.php").then(onResponse, onError).then(visualizzaProdotti);

    function onResponse(response) {
        if (!response.ok) {
            console.log('Problema con la risposta');
            return null;
        }
        return response.json();
    }

    function onError(error) {
        console.log('Errore: ' + error);
    }

    function visualizzaProdotti(json) {
        if (!json) {
            console.log('Nessun json ritornato');
            return;
        }
        console.log(json);

        const grid = document.querySelector('#grid');
        grid.innerHTML = ''; 

        json.forEach(prodotto => {
            const prod = document.createElement('div');
            prod.classList.add('prodotto');

            const descr = document.createElement('span');
            descr.textContent = prodotto.abbigliamento;

            prod.appendChild(descr);
            grid.appendChild(prod);
        });
    }

