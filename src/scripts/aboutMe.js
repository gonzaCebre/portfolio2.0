const vamosButton = document.getElementById('vamosButton');
const subite = document.getElementById('subite');

vamosButton.addEventListener('click', () => {
    subite.classList.add('noMostrar')
})

const vamos = () => {
    setTimeout(()=> {
        subite.classList.add('noMostrar')
    }, 3000)
}

vamos()

