'use strict';

const timerId = setTimeout(logger, 2000);

clearInterval(timerId, 3000)

function logger () {
    console.log('text');
}