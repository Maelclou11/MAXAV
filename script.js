/*#region       FAQ  */
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

/* #endregion */
/*#region       REVEAL ANIMATION  */
// Style Général
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2000,
    delay: 400
  })

// Reveal Accueil
ScrollReveal().reveal('.contentAccueil h1', { delay: 500, origin: 'top'});
ScrollReveal().reveal('.contentAccueil p', { delay: 800, origin: 'right', interval: 400});
ScrollReveal().reveal('.boutonContainer', { delay: 800, origin: 'top'});
ScrollReveal().reveal('.boutonContainer a', { delay: 800, origin: 'top', interval: 400});

// Menu
ScrollReveal().reveal('.ulNav li', { delay: 250, origin: 'left', interval: 200, distance: '30px'});
/* #endregion */







