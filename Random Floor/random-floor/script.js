let geheelGetal = 4.33;

// Math.floor() zal het getal tussen de haakjes afronden

console.log('geheel getal ' + geheelGetal)

let geheelGetalAfgerond = Math.floor(geheelGetal);
console.log('geheel getal afgerond ' + geheelGetalAfgerond)

let randomGetal = Math.random();
// Math.random() maakt een willekeurig getal tusen 0 en 1 tot 17 cijfers na de komma
console.log('random nummer tussen 0 en 1 ' + randomGetal)

// om een willekeurige waarde te verkrijgen tussen 0 en een maximum waarde
// moet je Math.random() vermenigvuldigen met de maximum waarde
// dus bv om een getal tussen 0 en 200 te krijgen, doe je Math.random() * 200
let randomGetal10 = Math.random() * 200;
console.log('random nummer tussen 0 en 200 ' +  randomGetal200)

// hier gaan we het random getal tussen 0 en 200 afronden
let randomGetal10Afgerond = Math.floor(randomGetal200);
console.log('geheel getal afgerond ' + randomGetal200Afgerond)

// OPDRACHT
// hier zie je hoe je een willekeurig getal uitprint tussen 0 en 200
// en dan zie je hoe we dat getal afronden (cijfers na de komma weghalen)
// 1. een willekeurig getal uitprinten die tussen 0 en 255 is > gebruik Math.random()
// 2. en dan van dat getal, alle cijfers na de komma wegdoen > gebruik Math.floor()

