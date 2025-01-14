//selekteeri sõlm
const containerElement = document.getElementById('container');

let uusTekst = "<p>Uus tekstilõik</p>";

// Uue lõigu loomine
const newParagraph1 = document.createElement('p');
newParagraph1.textContent = 'Uus lõik alguses';

// Uue lõigu2 loomine
const newParagraph2 = document.createElement('p');
newParagraph2.textContent = 'Uus lõik lõpus';

// Uue lõigu lisamine elemendi algusesse
containerElement.prepend(newParagraph1);

// Uue lõigu2 lisamine elemendi lõppu
containerElement.append(newParagraph2);