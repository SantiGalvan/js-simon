console.log('JS OK');


// - 1 Recupero gli elementi dal DOM
const numberBox = document.getElementById('number-list');
const buttonStart = document.getElementById('btn-start');
const formField = document.getElementById('form');
const inputGroup = document.getElementById('input-group');
const timerField = document.getElementById('timer');
const textElement = document.getElementById('text');
const endText = document.getElementById('end-text');
console.log(numberBox, buttonStart, formField, inputGroup, textElement, endText);

// - 2 Creo delle variabili per i dati
const min = 1;
const max = 100;
const totalNumber = 5;

//? FUNZIONI
// - 8 Creo la funzione per i numeri random
const getRandomNumber = (min, max, totalNumber) => {
    numbers = [];

    // - 9 Creo un ciclo while per estrarre finché tutti i numeri sono diversi
    while (numbers.length < totalNumber) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // - 10 Creo un if per inserire nell'array solo i numeri che non sono già stati inseriti
        if (!numbers.includes(randomNumber)) numbers.push(randomNumber);
    }

    return numbers;
}

// - 6 Creo la variabile di appoggio per il timer e la stampo in pagina
let time = 10;
timerField.innerText = time;

// - 3 Creo un event listener sul bottone start
buttonStart.addEventListener('click', () => {

    // - 7 Creo la funzione per decrementare il tempo
    const getTimer = () => {
        timerField.innerText = --time;

        // - 12 Creo un if per quando il timer arriva a zero, rimuovo i numeri e cambio il testo
        if (time === 0) {
            clearInterval(timer);
            numberBox.innerHTML = '';
            textElement.innerText = 'Inserisci i numeri che ti ricordi';

            // - 13 Inserisco gli input 
            inputGroup.innerHTML = `
             <input type="number" class="form-control" required min=${min} max=${max}>
             <input type="number" class="form-control" required min=${min} max=${max}>
             <input type="number" class="form-control" required min=${min} max=${max}>
             <input type="number" class="form-control" required min=${min} max=${max}>
             <input type="number" class="form-control" required min=${min} max=${max}>
        `;

            // - 14 Mostro il form
            formField.classList.remove('d-none');
        }
    };

    // - 4 Rimuovo il tasto start
    buttonStart.classList.add('d-none');

    // - 5 Faccio partire il timer
    const timer = setInterval(getTimer, 1000);

    // - 11 Inserisco i numeri random in pagina
    const randomNumbers = getRandomNumber(min, max, totalNumber);
    let numbersItems = ``;
    for (let number of randomNumbers) {
        numbersItems += `
    <li class="numbers">${number}</li>
    `;
    }
    numberBox.innerHTML = numbersItems;

    // - 13 Inserisco gli input 
    inputGroup.innerHTML = `
<input type="number" class="form-control" required min=${min} max=${max}>
<input type="number" class="form-control" required min=${min} max=${max}>
<input type="number" class="form-control" required min=${min} max=${max}>
<input type="number" class="form-control" required min=${min} max=${max}>
<input type="number" class="form-control" required min=${min} max=${max}>
    `;
});