const btnOpenModal = document.querySelectorAll('.blog__card-btn');
const btnCloseModal = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');

const closeModal = function() {
    modal.classList.add('hidden');
}

const openModal = function() {
    modal.classList.remove('hidden');
}

for(let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);    
}

btnCloseModal.addEventListener('click', closeModal);