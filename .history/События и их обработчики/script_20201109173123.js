const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert('Click');
// };

btn.addEventListener('click', (e) => {
    e.target.remove();
    // console.log('hover');
});