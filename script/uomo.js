

fetch("http://localhost/hw1/prodotti_uomo.php").then(onResponse, onError).then(vis_prod);

function onResponse(response) {
    if(!response.ok) {
        console.log('Problema con la risposta');
        return null;
    }
    return response.json();
}

function onError(error) {
    console.log('Errore: '+ error);
}


function vis_prod(json){
    if(!json) {
        console.log('Nessun json ritornato');
        return;
    }
    console.log(json);

    const lista_prodotti=document.querySelector('#lista_prodotti');

    //prodotto 1
    const prod=document.createElement('div');
    prod.classList.add('prodotto');

    const img_prod=document.createElement('img');
    img_prod.src=json[0].immagine;  

    const descr=document.createElement('span');
    descr.textContent=json[0].descrizione;

    const carrello=document.createElement('a');
    carrello.textContent=json[0].carrello;

    prod.appendChild(img_prod);
    prod.appendChild(descr);
    prod.appendChild(carrello);
    lista_prodotti.appendChild(prod);

    //prodotto 2

    const prod2=document.createElement('div');
    prod2.classList.add('prodotto');

    const img_prod2=document.createElement('img');
    img_prod2.src=json[1].immagine;  

    const descr2=document.createElement('span');
    descr2.textContent=json[1].descrizione;

    const carrello2=document.createElement('a');
    carrello2.textContent=json[1].carrello;


    prod2.appendChild(img_prod2);
    prod2.appendChild(descr2);
    prod2.appendChild(carrello2);

    lista_prodotti.appendChild(prod2);

       //prodotto 3

       const prod3=document.createElement('div');
       prod3.classList.add('prodotto');
   
       const img_prod3=document.createElement('img');
       img_prod3.src=json[2].immagine;  
   
       const descr3=document.createElement('span');
       descr3.textContent=json[2].descrizione;
   
       const carrello3=document.createElement('a');
       carrello3.textContent=json[2].carrello;
   
   
       prod3.appendChild(img_prod3);
       prod3.appendChild(descr3);
       prod3.appendChild(carrello3);

   
       lista_prodotti.appendChild(prod3);
    
        //prodotto 4

        const prod4=document.createElement('div');
        prod4.classList.add('prodotto');
    
        const img_prod4=document.createElement('img');
        img_prod4.src=json[3].immagine;  
    
        const descr4=document.createElement('span');
        descr4.textContent=json[3].descrizione;
    
        const carrello4=document.createElement('a');
        carrello4.textContent=json[3].carrello;

    
        prod4.appendChild(img_prod4);
        prod4.appendChild(descr4);
        prod4.appendChild(carrello4);
    
        lista_prodotti.appendChild(prod4);

         //prodotto 5

       const prod5=document.createElement('div');
       prod5.classList.add('prodotto');
   
       const img_prod5=document.createElement('img');
       img_prod5.src=json[4].immagine;  
   
       const descr5=document.createElement('span');
       descr5.textContent=json[4].descrizione;
   
       const carrello5=document.createElement('a');
       carrello5.textContent=json[4].carrello;

    
   
       prod5.appendChild(img_prod5);
       prod5.appendChild(descr5);
       prod5.appendChild(carrello5);
   
       lista_prodotti.appendChild(prod5);

       //prodotto 6

       const prod6=document.createElement('div');
       prod6.classList.add('prodotto');
   
       const img_prod6=document.createElement('img');
       img_prod6.src=json[5].immagine;  
   
       const descr6=document.createElement('span');
       descr6.textContent=json[5].descrizione;
   
       const carrello6=document.createElement('a');
       carrello6.textContent=json[5].carrello;

    
   
       prod6.appendChild(img_prod6);
       prod6.appendChild(descr6);
       prod6.appendChild(carrello6);
   
       lista_prodotti.appendChild(prod6);



    //funzioni che aggiungono prodotto al db

    carrello.addEventListener('click',aggiungi_prodotto);    

    function aggiungi_prodotto(){
        carrello.classList.add('Risposta_selezionata');
        const parametri={
            'abbigliamento': 'Maglia nera'
        }

        fetch('http://localhost/hw1/fetch_aggiungiProdotto.php',{
            method: 'POST',
           headers: {
               'Content-Type': 'application/json'
         },  body: JSON.stringify(parametri)}).then(handler).then(ins_in_db)
   
   
           function handler(response) {
               const ritorno = response.text();
               return ritorno;
           }
        function ins_in_db(ritorno){
            const a=ritorno;
            console.log(a);
            carrello.removeEventListener('click', aggiungi_prodotto);
            
        }
    }

    




    carrello2.addEventListener('click',aggiungi_prodotto2);    

    function aggiungi_prodotto2(){
        carrello2.classList.add('Risposta_selezionata');
        const parametri={
            'abbigliamento': 'Maglia bianca'
        }

        fetch('http://localhost/hw1/fetch_aggiungiProdotto.php',{
            method: 'POST',
           headers: {
               'Content-Type': 'application/json'
         },  body: JSON.stringify(parametri)}).then(handler).then(ins_in_db)
   
   
           function handler(response) {
               const ritorno = response.text();
               return ritorno;
           }
        function ins_in_db(ritorno){
            const a=ritorno;
            console.log(a);
            carrello2.removeEventListener('click', aggiungi_prodotto2);
            
        }
    }

    




    carrello3.addEventListener('click',aggiungi_prodotto3);    

    function aggiungi_prodotto3(){
        carrello3.classList.add('Risposta_selezionata');
        const parametri={
            'abbigliamento': 'Maglia blu'
        }

        fetch('http://localhost/hw1/fetch_aggiungiProdotto.php',{
            method: 'POST',
           headers: {
               'Content-Type': 'application/json'
         },  body: JSON.stringify(parametri)}).then(handler).then(ins_in_db)
   
   
           function handler(response) {
               const ritorno = response.text();
               return ritorno;
           }
        function ins_in_db(ritorno){
            const a=ritorno;
            console.log(a);
            carrello3.removeEventListener('click', aggiungi_prodotto3);
            
        }
    }

    
    carrello4.addEventListener('click',aggiungi_prodotto4);    

    function aggiungi_prodotto4(){
        carrello4.classList.add('Risposta_selezionata');
        const parametri={
            'abbigliamento': 'Maglia rossa'
        }

        fetch('http://localhost/hw1/fetch_aggiungiProdotto.php',{
            method: 'POST',
           headers: {
               'Content-Type': 'application/json'
         },  body: JSON.stringify(parametri)}).then(handler).then(ins_in_db)
   
   
           function handler(response) {
               const ritorno = response.text();
               return ritorno;
           }
        function ins_in_db(ritorno){
            const a=ritorno;
            console.log(a);
            carrello4.removeEventListener('click', aggiungi_prodotto4);
            
        }
    }

    


    carrello5.addEventListener('click',aggiungi_prodotto5);    

    function aggiungi_prodotto5(){
        carrello5.classList.add('Risposta_selezionata');
        const parametri={
            'abbigliamento': 'Maglia azzurra'
        }

        fetch('http://localhost/hw1/fetch_aggiungiProdotto.php',{
            method: 'POST',
           headers: {
               'Content-Type': 'application/json'
         },  body: JSON.stringify(parametri)}).then(handler).then(ins_in_db)
   
   
           function handler(response) {
               const ritorno = response.text();
               return ritorno;
           }
        function ins_in_db(ritorno){
            const a=ritorno;
            console.log(a);
            carrello5.removeEventListener('click', aggiungi_prodotto5);
           
        }
    }

    
    

    carrello6.addEventListener('click',aggiungi_prodotto6);    

    function aggiungi_prodotto6(){
        carrello6.classList.add('Risposta_selezionata');
        const parametri={
            'abbigliamento': 'Maglia grigia'
        }

        fetch('http://localhost/hw1/fetch_aggiungiProdotto.php',{
            method: 'POST',
           headers: {
               'Content-Type': 'application/json'
         },  body: JSON.stringify(parametri)}).then(handler).then(ins_in_db)
   
   
           function handler(response) {
               const ritorno = response.text();
               return ritorno;
           }
        function ins_in_db(ritorno){
            const a=ritorno;
            console.log(a);
            carrello6.removeEventListener('click', aggiungi_prodotto6);
            
        }
    }

    

}
