const selectVoorAchtergrondKleur = document.querySelector('#achtergrond');
const selectVoorTekstKleur = document.querySelector('#tekstkleur');

const html = document.querySelector('html');
document.body.style.padding = '10px';

/**
 * deze functie gaat de tekstkleur aanpassen
 * @param {*} textColor 
 */
function updateTextColor(textColor) {
  html.style.color = textColor;
}

/**
 * deze functie gaat de achtergrondkleur aanpassen
 * @param {*} achtergrondKleur 
 */
function updateBackgroundColor(achtergrondKleur) {
  html.style.backgroundColor = achtergrondKleur;
}

// je moet opnieuw linken aan de juiste select (dus selectVoorAchtergrondKleur of selectVoorTekstKleur)
// door een functie gelijk te stellen aan (naam van de select).onchange = ... (zie oefening zwart/wit of weather switch)

selectVoorAchtergrondKleur.onchange = function () {
  console.log('huidige waarde van de select / dropdown:', selectVoorAchtergrondKleur.value);
  if (selectVoorAchtergrondKleur.value === 'green') {
    updateBackgroundColor('green', 'Orange');
  } else if (selectVoorAchtergrondKleur.value === 'Orange') {
    updateBackgroundColor('Orange', 'green');
  }
}

selectVoorTekstKleur.onchange = function () {
  console.log('huidige waarde van de select / dropdown:', selectVoorTekstKleur.value);
  if (selectVoorTekstKleur.value === 'purple') {
    updateTextColor('purple', 'blue');
  } else if (selectVoorTekstKleur.value === 'blue') {
    updateTextColor('blue', 'purple');
  }
}


