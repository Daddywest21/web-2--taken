var bodyColor = prompt("geef me kleur voor de body"); // we zetten woord gekregen van de gebruiker in de variabele color (zie beetje als lege doos)
// we gaan een nieuwe variabele declareren genoemd bodyElement
// en daarin gaan we het HTML-element steken met de naam body
var bodyElement = document.getElementsByTagName("body")[0];
// dit stuk code gaat van het body element, de style opvragen (bodyElement.style)
// vervolgens gaat dit de backgroundColor van het body element aanpassen
bodyElement.style.backgroundColor = bodyColor;0