const btn = document.querySelector('button');
      overlay = document.query

// btn.onclick = function() {
//     alert('Click');
// };
let i = 0
const deleteElement =(e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);