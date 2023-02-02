/*#region       FAQ  */
function toggleRadio(buttonRadio) {
    buttonRadio.classList.toggle('revealTarif');
}
/* #endregion */
/*#region       TARIFS  */
const beforeTarif = document.querySelector('.before__tarifs');
const tarifSection = document.querySelector('#tarifs');

function openTarif() {
    beforeTarif.classList.add('clicked');
    tarifSection.classList.add('explored');
}


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







