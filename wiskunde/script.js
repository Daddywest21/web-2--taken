// met alert zal er een Popup komen met een bericht erop 
// in het bericht zal de som komen van 12 + 13 
let getal1 = prompt('geef het eerste getal');

let getal2 = prompt('geef het 2de');

// let som = (getal1*1) + (getal2*1); 

//alert(som);

// we moeten getal1 en getal2 vergelijken
let isGetal1KleinerDanGetal2 = getal1 < getal2
  // bij 'if' we controleren of het juist of onjuist is 
if (isGetal1KleinerDanGetal2) {
    // dit voeren we uit indien juist 
    alert('getal1 is kleiner dan getal 2 ');
} else {
    // dit voeren we uit indien fout 
    alert('getal1 is kleiner dan getal 2 ');
}
