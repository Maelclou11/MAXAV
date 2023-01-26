const questions = document.querySelectorAll('.questions');

questions.forEach((question) => {
    question.addEventListener('click', ()=> {
        question.classList.toggle('clicked');
    });
});