var acteur1 = {Name: "Tom Holland" , leeftijd: "25j" , Studio: "Marvel Studios" , film: "Spider Man No Way Home" , Genre: "Action , Aventure , Comedy" }

var acteur2 = {Name: "Mark Ruffalo" , Leeftijd: "54j" , Studio: "Marvel Studios" , film: "Avengers EndGame" , Genre: "Action , Drama , Romance" }

var acteur3 = {Name: "Denzel Washington" , Leeftijd: "67j" , Studio: "Universal" , film: "Equalizer" , Genre: "Action , Drama , History "  }

var lijstActeur = [acteur1, acteur2, acteur3];

console.log(lijstActeur.length);


for (let i = 0; i < lijstActeur.length; i++) {
    acteurPrinten(lijstActeur[i]);
}
 
function acteurPrinten(parameter) {
    console.log(parameter.Name + ' ' + parameter.leeftijd + ' ' + parameter.Studio + ' ' + parameter.film + ' ' + parameter.Genre);
}

