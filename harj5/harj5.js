/*
Markus Pilv
31.10.2024 10:30
hajr5
*/

temperatuur = 12;
if (temperatuur >25) {
    console.log("kuum ilm");
 } else if (temperatuur >= 15 && temperatuur<=25) {
    console.log("norm");
 } else if (temperatuur <15) {
    console.log("külm");
 } else {
    console.log("sured ära");
 }

 //kasutajanime kontroll

let kasutajanimi = "admin";
 if (kasutajanimi == `admin`){
    console.log("tervist adminn");
    } else {
    console.log("tervist külaline");
 }

//piletite värk
pileti_tüüp = "soodus";
vanus = 20;
if (vanus<18 && pileti_tüüp=="soodus"){
    console.log("pilet on 8");}
    else if (vanus<18){
        console.log("pilet on 10");
    }
 else if (vanus>18 && vanus<64 && pileti_tüüp=="soodus"){
    console.log("pilet on 15")
 }
    else if (vanus>18 && vanus<64){
        console.log("pilet on 20")
 }
 else if (vanus>64){
    console.log("pilet on 15")
 }
