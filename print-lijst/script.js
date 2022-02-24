var Acteur1 = {Name: "Tom Holland" , leeftijd: "25j" , Studio: "Marvel Studios" , film: "Spider Man No Way Home" , Genre: "Action , Aventure , Comedy" }

var Acteur2 = {Name: "Mark Ruffalo" , Leeftijd: "54j" , Studio: "Marvel Studios" , film: "Avengers EndGame" , Genre: "Action , Drama , Romance" }

var Acteur3 = {Name: "Denzel Washington" , Leeftijd: "67j" , Studio: "Universal" , film: "Equalizer" , Genre: "Action , Drama , History "  }

var lijstActeur = [Acteur1, Acteur2, Acteur3];

for (let Acteur of lijstActeur) {

    console.log(Acteur);
}

const namen = ["Dirk", "Sandy", "Tormund", "Dahlia"];

for (let i = 0; i < namen.length; i++) {
    // Gebruik de teller i als index van de array
    // Elke iteratie wordt er dus een nieuw element aangesproken
    console.log(namen[i]);
}