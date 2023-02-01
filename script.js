const questions = document.querySelectorAll('.questions');

questions.forEach((question) => {
    question.addEventListener('click', ()=> {
        question.classList.toggle('clicked');
    });
});

const buttonTarif = document.querySelector('#buttonTarif');
const beforeTarif = document.querySelector('.before__tarifs');

function clicked() {
    beforeTarif.classList.add('clicked');
};
/* buttonTarif.addEventListener('click', ()=> {
}); */