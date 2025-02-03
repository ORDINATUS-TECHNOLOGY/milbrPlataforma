
const div = document.getElementById('tremor');

const startShaking = () => {
    div.classList.add('shake');
    shakeTimeout = setTimeout(stopShaking, 2000);  // Treme por 2 segundos
};

const stopShaking = () => {
    div.classList.remove('shake');
    shakeTimeout = setTimeout(startShaking, 5000);
};

div.addEventListener('mouseover', () => {
    div.classList.remove('shake');
    clearTimeout(shakeTimeout);
});

div.addEventListener('mouseout', () => {
    stopShaking();
    setTimeout(startShaking, 5000);
});

let shakeTimeout = setTimeout(startShaking, 0);