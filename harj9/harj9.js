// ANONÜÜMNE FUNKTSIOON
var tervita = function() {
    console.log("MARKUS PILV");
};

// KUTSUMINE
tervita();

// NOOLEFUNKTSIOON
const noolFunktsioon = () => {
    console.log("MARKUS PILV");
};

// KUTSUMINE
noolFunktsioon();

//__________________________________________________________

// KUUPÄEV EESTI KEELES
function kuupaevEesti(kuupaevStr) {
    const kuud = ["JAANUAR", "VEEBRUAR", "MÄRTS", "APRILL", "MAI", "JUUNI", "JUULI", "AUGUST", "SEPTEMBER", "OKTOOBER", "NOVEMBER", "DETSEMBER"];
    const kuupaev = new Date(kuupaevStr);
    console.log(`${kuupaev.getDate()}. ${kuud[kuupaev.getMonth()]} ${kuupaev.getFullYear()}`);
}

// TESTIMINE
kuupaevEesti("2024-02-23");

//_____________________________________________________________

// ARVUD KOGUSUMMA JA KESKMINE
function arvudKogusJaKeskmine(arvud) {
    let kogusumma = 0;
    for (let i = 0; i < arvud.length; i++) {
        kogusumma += arvud[i];
    }
    let keskmine = kogusumma / arvud.length;
    console.log("KOGUSUMMA:", kogusumma);
    console.log("KESKMINE:", keskmine);
}

// NÄIDE KASUTAMISEST
arvudKogusJaKeskmine([5, 10, 15, 20]);

//_____________________________________________________________

// SALAJANE SÕNUM (TÄISHÄÄLIKUD TÄRNIGA)
const salajaneSonum = (sonum) => {
    return sonum.replace(/[aeiouõöü]/gi, '*');
};

// TESTIMINE
console.log(salajaneSonum("TERE, MAAILM!"));

//_____________________________________________________________

// UNIKAALSED NIMED
const leiaUnikaalsedNimed = (nimed) => {
    return [...new Set(nimed)];
};

// TESTIMINE
console.log(leiaUnikaalsedNimed(["KATI", "MATI", "KATI", "MARI", "MATI", "JÜRI"]));
