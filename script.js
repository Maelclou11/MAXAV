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
ScrollReveal().reveal('.contentAccueil p', { delay: 300, origin: 'right', interval: 400});
ScrollReveal().reveal('.boutonContainer', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.boutonContainer a', { delay: 400, origin: 'bottom', interval: 400});

// Menu
/* ScrollReveal().reveal('.ulNav li', { delay: 250, origin: 'left', interval: 150, distance: '30px'}); */


//Pourquoi nous?
ScrollReveal().reveal('.sectionWhy .titleWhy', { delay: 300, origin: 'left'});
ScrollReveal().reveal('.sectionWhy .contentWhy', { delay: 0, origin: 'left', interval: 200});

//points
ScrollReveal().reveal('#points .container.haut .carte', { delay: 0, origin: 'right', opacity: 1, distance: "150px"});
ScrollReveal().reveal('#points .container.haut img', { delay: 100, scale: 0.7, distance: '0px'});
ScrollReveal().reveal('#points .container.haut .bandes', { delay: 100, origin: 'right', interval: 100, opacity: 1});
ScrollReveal().reveal('#points .container.bas .carte', { delay: 0, origin: 'left', opacity: 1, distance: "150px"});
ScrollReveal().reveal('#points .container.bas img', { delay: 100, scale: 0.7, distance: '0px'});
ScrollReveal().reveal('#points .container.bas .bandes', { delay: 100, origin: 'left', interval: 100, opacity: 1});

//Nos tarifs
ScrollReveal().reveal('#tarifs .before__tarifs h3', { delay: 200, origin: 'top'});
ScrollReveal().reveal('#tarifs .before__tarifs h3', { delay: 0, origin: 'top'});
ScrollReveal().reveal('#tarifs a', { delay: 100, origin: 'top'});

//Questions
ScrollReveal().reveal('#faqSection .container__faq h1', {
  delay: 100, origin: 'left'
})
ScrollReveal().reveal('#faqSection .container__faq .faq--tab', {
  delay: 200, origin: 'left', interval: 100
})

//Nous Joindre
ScrollReveal().reveal('#contactUs .containerCU', {
  delay: 200, origin: 'bottom', distance: '150px'
})
/* #endregion */
/*#region       SCROLL HEIGHT   */
    document.querySelectorAll("a[href^='#']").forEach(function(link) {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          var headerHeight = 40;
          var targetId = link.getAttribute("href");
          var target = document.querySelector(targetId);
          var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
          var finalPosition = targetPosition - headerHeight;
          window.scrollTo({
            top: finalPosition,
            behavior: "smooth"
          });
        });
      });
/* #endregion */













