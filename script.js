const questions = document.querySelectorAll('.questions');

questions.forEach((question) => {
    question.addEventListener('click', ()=> {
        question.classList.toggle('clicked');
    });
});

const buttonTarif = document.querySelector('#buttonTarif');
const beforeTarif = document.querySelector('.before__tarifs');

buttonTarif.addEventListener('click', ()=> {
    beforeTarif.classList.add('clicked');
});