'use strict'
console.log('Josue oefening werkt');

let h1Element = document.querySelector('.h1'); 
console.log(h1Element);
h1Element.style.backgroundColor = "yellow"

let josue = document.querySelector ('#Josue');
josue.style.textDecoration = "underline";


let klasseNaam = 'derderij' ; 



const collection = document.getElementsByClassName("derde-rij");
for (let element of collection) {
  element.style.backgroundColor = "yellow";
}

