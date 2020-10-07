'use strict';

function learn(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learn('JavaScript', done);