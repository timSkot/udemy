const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert('Click');
// };
let i = 0
const deleteElement =(e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        
    }
};

btn.addEventListener('click', deleteElement);
btn.removeEventListener('click', deleteElement);