import css from './css/styles.css';

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

activateAttributeBtn(startBtn, 'enabled');

const interval = {
    intervalId: null,

    start() {
        deactAttrBtn(startBtn, 'enabled');
        activateAttributeBtn(startBtn, 'disabled');
        this.intervalId = setInterval(() => {
            body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length-1)]}`;
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        deactAttrBtn(startBtn, 'disabled');
        activateAttributeBtn(startBtn, 'enabled');
        ;
    },
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function activateAttributeBtn(btn, value) {
    return btn.setAttribute(value, '')
};
function deactAttrBtn(btn, value) {
    return btn.removeAttribute(value)
};

startBtn.addEventListener('click', interval.start.bind(interval));
stopBtn.addEventListener('click', interval.stop.bind(interval));
