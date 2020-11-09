const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert('Click');
// };

const deleteBtn =(e) => {
    e.target.remove();
};

btn.addEventListener('click');