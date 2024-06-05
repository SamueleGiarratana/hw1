
fetch("http://localhost/hw1/abbonamento.php").then(onResponse, onError).then(Vis_Abbonamento);

function onResponse(response) {       
    if(!response.ok) {
        console.log('Problema con la risposta');
        return null;
    }
    return response.json();
  }

  function onError(error){ 
    console.log('Errore' + error); 
}

function Vis_Abbonamento(json){
    if(!json) {
        console.log('Nessun json ritornato');
        return;
    }
    console.log(json);

const cont_abbonamento=document.querySelector('#abbonamento')

//3Mesi

const mese1=document.createElement('div');
mese1.classList.add('month');

const img1=document.createElement('img');
img1.src=json[0].immagine;

const tit1=document.createElement('span');
tit1.textContent=json[0].titolo;

mese1.appendChild(img1);
mese1.appendChild(tit1);

cont_abbonamento.appendChild(mese1);
//6Mesi

const mese2=document.createElement('div');
mese2.classList.add('month');

const img2=document.createElement('img');
img2.src=json[1].immagine;

const tit2=document.createElement('span');
tit2.textContent=json[1].titolo;

mese2.appendChild(img2);
mese2.appendChild(tit2);

cont_abbonamento.appendChild(mese2);

//12Mesi

const mese3=document.createElement('div');
mese3.classList.add('month');

const img3=document.createElement('img');
img3.src=json[2].immagine;

const tit3=document.createElement('span');
tit3.textContent=json[2].titolo;

mese3.appendChild(img3);
mese3.appendChild(tit3);

cont_abbonamento.appendChild(mese3);

/*(nascondi abbonamento selezionato)*/
const abb_list=document.querySelector("#abb_list");
abb_list.classList.add('hidden');


//funzioni che aggiungono l'abbonamento al db

//3Mesi

tit1.addEventListener('click',aggiungi_abbonamento1);

function aggiungi_abbonamento1(){
    const abbonamento = {
        'abbonamento': '3 mesi'
    }


        fetch('http://localhost/hw1/fetch_abbonamento.php',{
         method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(abbonamento)}).then(handler).then(ins_in_db)


        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }


        function ins_in_db(ritorno){
            const a=ritorno;
            console.log(a);
            abb_list.classList.remove('hidden');
            abb_list.textContent='Abbonamento 3 mesi selezionato';
            tit1.removeEventListener('click', aggiungi_abbonamento1);
            tit2.addEventListener('click', aggiungi_abbonamento2);
            tit3.addEventListener('click', aggiungi_abbonamento3);
        }
    }
//6Mesi

function aggiungi_abbonamento2(){
    const abbonamento = {
        'abbonamento': '6 mesi'
    }


        fetch('http://localhost/hw1/fetch_abbonamento.php',{
         method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(abbonamento)}).then(handler).then(ins_in_db)


        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }


        function ins_in_db(ritorno){
            const a=ritorno;
            console.log(a);
            abb_list.classList.remove('hidden');
            abb_list.textContent='Abbonamento 6 mesi selezionato';
            tit1.addEventListener('click', aggiungi_abbonamento1);
            tit2.removeEventListener('click', aggiungi_abbonamento2);
            tit3.addEventListener('click', aggiungi_abbonamento3);
        }
}


//12Mesi
function aggiungi_abbonamento3(){
    const abbonamento = {
        'abbonamento': '12 mesi'
    }


        fetch('http://localhost/hw1/fetch_abbonamento.php',{
         method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(abbonamento)}).then(handler).then(ins_in_db)


        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }


        function ins_in_db(ritorno){
            const a=ritorno;
            console.log(a);
            abb_list.classList.remove('hidden');
            abb_list.textContent='Abbonamento 12 mesi selezionato';
            tit1.addEventListener('click', aggiungi_abbonamento1);
            tit2.addEventListener('click', aggiungi_abbonamento2);
            tit3.removeEventListener('click', aggiungi_abbonamento3);
        }
}


}


