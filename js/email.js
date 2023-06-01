console.log('JS email OK');


// Recupero elemento dal DOM
const emailInput = document.getElementById('email-input');
const enterEmail = document.getElementById('enter-email');
const listResult = document.getElementById('list-result');
//Variabile per verificare la presenza nella lista
let signUp = false;

// Creare un array con la lista delle email
const emailList = ['riccardo@email.com', 'elon@email.com', 'jeff@email.com', 'jhonny@email.com'];
console.table(emailList);
//Al click del bottone
enterEmail.addEventListener('click', function(){

    //Recuperare input inserito
    const userEmail = emailInput.value.trim();
    console.log('Email inserita dall\' UTENTE', userEmail)

    for(let i = 0; i < emailList.length && !signUp; i++){

        if(emailList[i] === userEmail){
            signUp = true;
        }
    }

    // Messaggio
    let message = signUp ? 'Benvenuto!' : 'Non sei iscritto';
    listResult.innerText = message;
})