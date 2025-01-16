/*
Markus PIlv
1.14.2025 10:43
hajr11
*/
const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

function haamrigaLoomine(nimed) {
    const korrastatudNimed = nimed.map(nimi => {
        const osad = nimi.split(' ');
        const eesnimi = osad[0].charAt(0).toUpperCase() + osad[0].slice(1);
        const perenimi = osad[1].toLowerCase();
        const email = `${perenimi}@metshein.com`;
        return `${eesnimi} ${perenimi} (${email})`;
    });
    return korrastatudNimed;
}

const haamrigaLoomine2 = haamrigaLoomine(nimed);
console.log("Korrastatud nimed ja emailid:");
console.log(haamrigaLoomine2);

function otsiNimi(nimi, nimed) {
    const leitudNimed = nimed.filter(n => n.toLowerCase().includes(nimi.toLowerCase()));
    return leitudNimed.length > 0 ? leitudNimed : "Nime pole";
}

const Nig1 = "Pede";
const leitudNimed = otsiNimi(Nig1, nimed);
console.log(`Nimi "${Nig1}" `);
console.log(leitudNimed);
//___________________________________________________________________-
const isikandmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    { nimi: "Markus Pilv", isikukood: "50604062013" },
];

isikandmed.forEach(function (isik) {
    const sünnikuupäev = isik.isikukood.slice(5, 7) + '/' + isik.isikukood.slice(3, 5) + '/' + isik.isikukood.slice(1, 3);
//parseInt teeb stringi numbriks
    const sünniaasta = parseInt(isik.isikukood.slice(1, 3), 10) > 21 ? 1900 + parseInt(isik.isikukood.slice(1, 3), 10) : 2000 + parseInt(isik.isikukood.slice(1, 3), 10);
    const praeguneAasta = new Date().getFullYear();
    const vanus = praeguneAasta - sünniaasta;

    isik.vanus = vanus;
    isik.sünnikuupäev = sünnikuupäev;
});

isikandmed.forEach(function (isik) {
    console.log(`${isik.nimi}: Isikukood ${isik.isikukood}, Vanus ${isik.vanus}, Sünnikuupäev ${isik.sünnikuupäev}`);
});
//_____________________________________________________________________________________________________________________________________________
const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

function keskmineTulemus(tulemused) {
    const summa = tulemused.reduce((a, b) => a + b, 0);
    return (summa / tulemused.length).toFixed(2);
}

opilased.forEach(function (opilane) {
    const paremTulemus = Math.max(...opilane.tulemused);
    const keskmine = keskmineTulemus(opilane.tulemused);
    console.log(`Nimi: ${opilane.nimi}`);
    console.log(`Tulemused: ${opilane.tulemused.join(", ")}`);
    console.log(`Parem tulemus: ${paremTulemus}`);
    console.log(`Keskmine tulemus: ${keskmine}`);
    console.log();
});
//vaga palju paska