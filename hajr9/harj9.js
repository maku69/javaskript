/*
Markus PIlv
1.14.2025 10:43
hajr9
*/

var tervita = function() {
    console.log("Markus Pilv");
    };
    tervita();

const noolFunktsioon = () => {
    console.log("Markus PIlv")
    };
    noolFunktsioon();
//__________________________________________________________

function kuupaev(kuupaev) {
    const kuud = ["JAANUAR", "VEEBRUAR", "MÄRTS", "APRILL", "MAI", "JUUNI", "JUULI", "AUGUST", "SEPTEMBER", "OKTOOBER", "NOVEMBER", "DETSEMBER"];
    const kuupaev1 = new Date(kuupaev);
    console.log(`${kuupaev1.getDate()}. ${kuud[kuupaev1.getMonth()]} ${kuupaev1.getFullYear()}`);
}

kuupaev("2023-07-19");

//_____________________________________________________________

function arvudKogusJaKeskmine(arvud) {
    let kogusumma = 0;
    for (let i = 0; i < arvud.length; i++) {
        kogusumma += arvud[i];
    }
    let keskmine = kogusumma / arvud.length;
    console.log("KOGUSUMMA:", kogusumma);
    console.log("KESKMINE:", keskmine);
}

arvudKogusJaKeskmine([5, 10, 15, 20]);

//_____________________________________________________________

const salajaneSonum = (sonum) => {
    return sonum.replace(/[aeiouõöü]/gi, '*');
};

console.log(salajaneSonum("TERE, MAAILM!"));

//_____________________________________________________________

const leiaUnikaalsedNimed = (nimed) => {
    return [new Set(nimed)];
};

console.log(leiaUnikaalsedNimed(["KATI", "MATI", "KATI", "MARI", "MATI", "JÜRI"]));
