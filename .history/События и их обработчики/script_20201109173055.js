const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert('Click');
// };

btn.addEventListener('mouseenter', (e) => {
    console.log(e.target);
    e.target
    // console.log('hover');
});