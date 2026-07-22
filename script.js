const InputBtn = document.getElementById('input');
const AumentaBtn = document.getElementById('aumenta');
const ResettaBtn = document.getElementById('resetta');
const DiminuisciBtn = document.getElementById('Diminuisci');

let count = 0;

function updateDisplay() {
    InputBtn.textContent = count;

    InputBtn.classList.remove('positive', 'negative', 'pop');
    if (count > 0) InputBtn.classList.add('positive');
    else if (count < 0) InputBtn.classList.add('negative');

    InputBtn.classList.add('pop');
    setTimeout(() => InputBtn.classList.remove('pop'), 200);
}

AumentaBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

ResettaBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

DiminuisciBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});