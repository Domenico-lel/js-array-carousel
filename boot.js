/*MILESTONE 1
Per prima cosa, creiamo il markup statico: l’html con tutto il necessario perchè funzioni il carosello.
(Se su qualche parte del layout vedete che ci state perdendo troppo tempo tralasciate i dettagli e passate alla parte logica il prima possibile).
MILESTONE 2
Al click dell’utente sulle frecce (sia Prev che Next), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/

const items = document.getElementsByClassName('item');

let activeItem = 0;

// navigazione
const next = document.querySelector('.next');

next.addEventListener('click', function() {


    if (activeItem <  items.length - 1){
        // togliamo la classe active  all' elemento corrente
        items[activeItem].classList.remove('active');

        // incrementiamo l' indice dell' elemento da visualizzare
        activeItem++;

        // aggiungiamo la classe active all' elemento successivo 
        items[activeItem].classList.add('active');

        if (activeItem === items.length - 1){
            // siamo arrivati all' ultimo elemento
            next.classList.add('hidden')
        }
    }
})
