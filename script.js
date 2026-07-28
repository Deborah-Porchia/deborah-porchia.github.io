const InputBtn = document.getElementById('input');
const AumentaBtn = document.getElementById('aumenta');
const ResettaBtn = document.getElementById('resetta');
const DiminuisciBtn = document.getElementById('diminuisci');
const savedCount = localStorage.getItem('count');

let count = savedCount !== null
    ? parseInt(savedCount, 10)
    : 0;

function render() {
    InputBtn.textContent = count;
    InputBtn.classList.remove('positive', 'negative');
    if (count > 0) InputBtn.classList.add('positive');
    else if (count < 0) InputBtn.classList.add('negative');
}

function playPop() {
    InputBtn.classList.remove('pop');
    void InputBtn.offsetWidth;
    InputBtn.classList.add('pop');
    setTimeout(() => InputBtn.classList.remove('pop'), 200);
}

function saveCount() {
    localStorage.setItem('count', count);
}

function onCountChange() {
    render();
    playPop();
    saveCount();
}

AumentaBtn.addEventListener('click', () => {
    count++;
    onCountChange();
});

ResettaBtn.addEventListener('click', () => {
    count = 0;
    onCountChange();
});

DiminuisciBtn.addEventListener('click', () => {
    count--;
    onCountChange();
});

onCountChange();