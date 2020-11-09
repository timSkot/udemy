const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert('Click');
// };

const deleteElement =(e) => {
    console.log(e.target);
};

btn.addEventListener('click', deleteElement);
btn.removeEventListener('click', deleteElement);