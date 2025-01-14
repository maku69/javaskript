/*
Markus PIlv
1.14.2025 10:43
hajr12
*/
const ostukorv = {
    tooted: [
        { nimi: 'Piim', hind: 3.60, kogus: 2 },
        { nimi: 'Leib', hind: 2.00, kogus: 1 },
        { nimi: 'Munad', hind: 1.50, kogus: 6 },
        { nimi: 'Juust', hind: 4.20, kogus: 1 },
        { nimi: 'Tomatid', hind: 2.30, kogus: 3 },
    ]
};

function kuvaOstukorv() {
    const ostukorvElement = document.getElementById('ostukorv');
    const kogusummaElement = document.getElementById('kogusumma');
    let kogusumma = 0;

    ostukorv.tooted.forEach(item => {
        //https://stackoverflow.com/questions/65782965/how-can-i-display-bullet-points-properly-from-a-string
        const tapploend = document.createElement('li');
        tapploend.textContent = `${item.nimi} - Hind: ${item.hind}€, Kogus: ${item.kogus}`;
        ostukorvElement.appendChild(tapploend);
        kogusumma += item.hind * item.kogus;
    });

    kogusummaElement.textContent = `Kogusumma: ${kogusumma.toFixed(2)}€`;
}

kuvaOstukorv();