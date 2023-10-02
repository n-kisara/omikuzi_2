'use strict';

const fortune = ['大吉','中吉','小吉','凶'];

function omikizi() {
    let num =  Math.floor(Math.random() * fortune.length);
    const result = document.getElementById('result');
    result.textContent = fortune[num];
    const btn = document.getElementById('btn');
}

btn.addEventListener('click',omikizi);