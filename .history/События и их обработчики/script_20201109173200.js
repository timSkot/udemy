const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert('Click');
// };

const delete =(e) => {
    e.target.remove();
};

btn.addEventListener('click', (e) => {
    e.target.remove();
});