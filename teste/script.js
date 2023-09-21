const btn = document.querySelector('.button')
const modal = document.querySelector('.modal')
const fecha = document.querySelector('.fecha')



function chamaFunc(){
    modal.style.opacity = 1
    modal.style.display = 'block';
}

function fechaModal(){
    modal.style.opacity = 0
    modal.style.display = 'none';
}
btn.addEventListener('click', chamaFunc)
fecha.addEventListener('click', fechaModal)