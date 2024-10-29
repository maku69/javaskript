/*
Markus Pilv
19.10.2024 09:07
hajr2
*/

//Näitab et kell on 2:38:59PM
const tund = 2;
minutid = 38;
sekundid = 59;
let kell = ` ${tund}:${minutid}:${sekundid}PM`;
console.log(kell);

//Output on "Jüri Jurakas nimetähed on J.J"
let nimi1 = "Jüri"
let nimi2 = "Jurakas"
let esimeneMark = nimi1[0];
let esimeneMark1 = nimi2[0];
let lause = `${nimi1} ${nimi2} nimetähed on ${esimeneMark}.${esimeneMark1}`;
console.log(lause);

// Oodatav tulemus: "karrolk@gmail.com"
let epost = "karrolk@netlog.com";
console.log(epost.replaceAll("netlog", "gmail")); 

//Tulemus on "mmartinovic0 40.19.226.175"
let andmed = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
console.log((andmed.split(",")[3]).split("@")[0]+" "+andmed.split(",")[5] );
