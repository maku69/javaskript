/*
Markus Pilv
19.10.2024 09:40
hajr3
*/

//Kiirus on 100KM/H kaugus on 100KM, jõuad kohale 1 tunni pärast
let kiirus = 100;
let pikkus = 100;
console.log(`Kiirus on ${kiirus}KM/H kaugus on ${pikkus}KM, jõuad kohale ${kiirus/pikkus} tunni pärast`); 

//Lehti tuleb 14 ja viimasele lehele jääb 
let postitused = 137
let postLehel = 10
console.log(`Lehti tuleb ${Math.round(postitused/postLehel,0)} ja viimasele lehele jääb 7 postitust`)


voimsus = 400;
hind = 6.69;
let voolutarbimine = voimsus / 1000;
let tookulu = voolutarbimine * hind
console.log(tookulu+`€ on töökulu tunnis`);