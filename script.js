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
ScrollReveal().reveal('.contentAccueil h1', { delay: 200, origin: 'right'});
ScrollReveal().reveal('.contentAccueil p', { delay: 400, origin: 'right', interval: 400});
ScrollReveal().reveal('.boutonContainer', { delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.boutonContainer a', { delay: 600, origin: 'bottom', interval: 400});

// Menu
ScrollReveal().reveal('.ulNav li', { delay: 250, origin: 'left', interval: 150, distance: '30px'});


//Pourquoi nous?
ScrollReveal().reveal('.sectionWhy .titleWhy', { delay: 800, origin: 'left'});
ScrollReveal().reveal('.sectionWhy .contentWhy', { delay: 1000, origin: 'left', interval: 200});

//points
ScrollReveal().reveal('#points .container.haut .carte', { delay: 100, origin: 'right'});
ScrollReveal().reveal('#points .container.haut img', { delay: 400, scale: 0.7, distance: '0px'});
ScrollReveal().reveal('#points .container.haut .bandes', { delay: 400, origin: 'right', interval: 200});
ScrollReveal().reveal('#points .container.bas .carte', { delay: 100, origin: 'left'});
ScrollReveal().reveal('#points .container.bas img', { delay: 400, scale: 0.7, distance: '0px'});
ScrollReveal().reveal('#points .container.bas .bandes', { delay: 400, origin: 'left', interval: 200});

//Nos tarifs
ScrollReveal().reveal('#tarifs .before__tarifs h3', { delay: 300, origin: 'top'});
ScrollReveal().reveal('#tarifs .before__tarifs h3', { delay: 500, origin: 'top'});
ScrollReveal().reveal('#tarifs a', { delay: 600, origin: 'top'});















