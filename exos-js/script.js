console.log("Hello world!");

// Exercice 1 : Interaction simple (click)

const containerCouleur = document.getElementById("container-couleur");

containerCouleur.addEventListener("click", () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    containerCouleur.style.backgroundColor = randomColor;
});

// Exercice 2 : Suivi de la souris (mousemove)

const containerSouris = document.getElementById("container-mouse-position");
const coordonnees = document.getElementById("coordonnees");
const objet = document.getElementById("objet");

containerSouris.addEventListener("mousemove", (event) => {
    console.log(event);

    const x = event.pageX;
    const y = event.pageY;
    coordonnees.textContent = `X: ${x}, Y: ${y}`;

    // On va déplacer l'objet en fonction de la position de la souris
    objet.style.left = `${x-12.5}px`;
    objet.style.top = `${y-12.5}px`;
});

// Exercice 3 : Réaction au scroll (scroll)

const header = document.getElementById("header");

window.addEventListener("scroll", (event) => {
    const scrollY = window.scrollY;
    
    // On change la couleur du header aléatoirement en fonction du scroll

    
});

// Exercice 4 : 