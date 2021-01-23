'use strict';

const btn = document.querySelector('.btn');
let timerId,
    i

btn.addEventListener('click', ()=> {
    // const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 2000);
});

clearInterval(timerId);

function logger () {
    console.log('text');
}