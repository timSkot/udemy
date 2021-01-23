'use strict';

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click', ()=> {
    // const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 2000);
});

clearInterval(timerId);

function logger () {
    if (i )
    console.log('text');
    i++;
}