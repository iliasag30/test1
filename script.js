// Sélectionner tous les éléments <li>
var liElements = document.querySelectorAll('li');

// Fonction pour convertir les coordonnées polaires en coordonnées cartésiennes
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

// Fonction pour mettre à jour la position d'un élément en fonction de l'angle
function updatePosition(element, angle, radius) {
    var center = {
        x: element.offsetWidth / 2,
        y: element.offsetHeight / 2
    };
    var newPosition = polarToCartesian(center.x, center.y, radius, angle);
    element.style.left = newPosition.x + 'px';
    element.style.top = newPosition.y + 'px';
}

// Parcourir tous les éléments <li> et ajouter des gestionnaires d'événements pour le survol de la souris
liElements.forEach(function(li, index) {
    var angle = (360 / liElements.length) * index;
    var radius = 100; // Rayon du cercle

    // Mettre à jour la position initiale de chaque élément
    updatePosition(li, angle, radius);

    // Ajouter un gestionnaire d'événements pour le survol de la souris
    li.addEventListener('mouseover', function() {
        li.style.backgroundColor = 'brown'; // Changer la couleur de fond au survol de la souris
        li.style.zIndex = 1; // Assurer que l'élément survolé est au-dessus des autres
        li.style.transition = 'transform 0.5s ease'; // Ajouter une transition pour l'animation
        li.style.transform = 'scale(1.2)'; // Appliquer un effet de mise à l'échelle
    });

    // Ajouter un gestionnaire d'événements pour restaurer la couleur d'origine lorsque la souris quitte l'élément
    li.addEventListener('mouseout', function() {
        li.style.backgroundColor = ''; // Réinitialiser la couleur de fond
        li.style.zIndex = ''; // Réinitialiser l'ordre z-index
        li.style.transform = ''; // Réinitialiser l'effet de mise à l'échelle
    });
});

