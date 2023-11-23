/*MILESTONE 1
Per prima cosa, creiamo il markup statico: l’html con tutto il necessario perchè funzioni il carosello.
(Se su qualche parte del layout vedete che ci state perdendo troppo tempo tralasciate i dettagli e passate alla parte logica il prima possibile).
MILESTONE 2
Al click dell’utente sulle frecce (sia Prev che Next), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/

// dichiariamo quante immagini abbiamo
var n_img = 5;

// dichiariamo la prima immagine da visualizzare
var corrente = 1;

// creazione funzione per mandare avanti le immagini
function succ(){
    corrente++;
    if(corrente>n_img){
        corrente = 1;
    };
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i +")").style.display ="none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente +")").style.display ="block";
}

// creazione funzione per mandare in dietro le immagini
function prec(){
    corrente--;
    if(corrente == 0){
        corrente = 1;
    };
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i +")").style.display ="none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente +")").style.display ="block";
};
