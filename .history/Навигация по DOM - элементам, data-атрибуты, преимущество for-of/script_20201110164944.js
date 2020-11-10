"use strict";
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName)
    console.log(node);
};