'use strict';

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click', ()=> {
    // const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);
});

function logger () {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('text');
    i++;
}

const id = setTimeout(function log(){

});