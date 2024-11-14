const products = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];

// Läbime tooted ja kuvame 10 esimest, aga jätame vahele "Muna", "Sibul" ja "Riis"
let counter = 0; // Loendur, et piirata 10 esimese tootega

products.forEach((product, index) => {
  if (counter >= 10) return;  // Kui oleme kuvamise piiri saavutanud, siis lõpetame
  if (product === "Muna" || product === "Sibul" || product === "Riis") {
    return; //jätame need tooted vahele
  }
  
  console.log(`${index + 1}. ${product}`);
  counter++; //suurendame loendurit iga kuvatud toote puhul
});

const temperatures = [
    [5, 8, 12, 10, 7, 9, 11, 14, 16, 13, 10, 6, 4, 3, 2, 4, 6, 8, 10, 12, 15, 17, 18, 16, 13, 10],
    [1, 4, 6, 7, 9, 11, 13, 15, 12, 9, 7, 5, 3, 2, 3, 6, 8, 10, 12, 15, 17, 19, 18, 16, 13, 11],
    [8, 10, 13, 15, 16, 18, 19, 20, 17, 15, 13, 11, 10, 9, 8, 10, 12, 14, 16, 18, 20, 22, 21, 18, 16, 14],
    [2, 5, 7, 9, 12, 15, 17, 18, 15, 13, 11, 8, 6, 5, 4, 7, 9, 12, 14, 16, 19, 21, 20, 18, 16, 13],
    [6, 8, 11, 14, 16, 18, 20, 21, 18, 15, 12, 10, 8, 6, 5, 8, 10, 13, 15, 18, 20, 22, 21, 19, 16, 13],
    [11, 14, 17, 19, 21, 23, 24, 22, 19, 16, 13, 11, 10, 9, 9, 12, 15, 18, 20, 23, 25, 27, 26, 24, 21, 18],
    [9, 11, 14, 16, 18, 20, 22, 21, 18, 16, 13, 11, 9, 8, 7, 10, 13, 16, 18, 21, 23, 24, 23, 21, 18, 15],
    [7, 10, 13, 15, 17, 20, 22, 23, 20, 17, 14, 12, 10, 9, 8, 11, 14, 17, 19, 22, 24, 26, 25, 23, 20, 17],
    [3, 6, 9, 11, 13, 15, 17, 18, 16, 14, 11, 9, 7, 6, 5, 8, 10, 13, 15, 17, 19, 21, 20, 18, 15, 12],
    [1, 3, 5, 7, 9, 11, 13, 15, 12, 9, 7, 5, 3, 2, 3, 6, 8, 10, 12, 15, 17, 19, 18, 16, 13, 11],
    [6, 8, 11, 14, 16, 18, 20, 21, 18, 15, 12, 10, 8, 6, 5, 8, 10, 13, 15, 18, 20, 22, 21, 19, 16, 13],
    [10, 13, 16, 18, 20, 22, 23, 24, 21, 18, 15, 13, 11, 10, 9, 12, 15, 18, 20, 23, 25, 27, 26, 24, 21, 18]
  ];
  
  const months = "Jaanuar, Veebruar, Märts, Aprill, Mai, Juuni, Juuli, August, September, Oktoober, November, Detsember";
  
  // Eraldame kuude nimed massiiviks
  const monthsArray = months.split(", ");
  
  // Loendame iga kuu keskmise temperatuuri
  for (let i = 0; i < temperatures.length; i++) {
    let monthTemps = temperatures[i];
    let sum = 0;
  
    // Summeerime igapäevased temperatuurid
    for (let temp of monthTemps) {
      sum += temp;
    }
  
    // Arvutame keskmise temperatuuri
    let averageTemp = sum / monthTemps.length;
  
    // Kuvame kuu ja keskmise temperatuuri
    console.log(`${monthsArray[i]}: Keskmine temperatuur on ${averageTemp.toFixed(2)}°C`);
  }
  
  // Leida kuud, kus oli kõige kõrgem ja madalaim temperatuur ilma Math.max ja Math.min kasutamiseta
  let highestTemp = -Infinity;
  let lowestTemp = Infinity;
  let highestMonth = "";
  let lowestMonth = "";
  
  for (let i = 0; i < temperatures.length; i++) {
    let monthTemps = temperatures[i];
  
    // Eeldame, et esimene temperatuur on kõige kõrgem ja madalaim
    let maxTemp = monthTemps[0];
    let minTemp = monthTemps[0];
  
    // Läbime kõik kuus olevad temperatuurid ja määrame kõrgeima ja madalaima
    for (let temp of monthTemps) {
      if (temp > maxTemp) {
        maxTemp = temp;
      }
      if (temp < minTemp) {
        minTemp = temp;
      }
    }
  
    // Kontrollime, kas see kuu on kõige kuumem või külmem
    if (maxTemp > highestTemp) {
      highestTemp = maxTemp;
      highestMonth = monthsArray[i];
    }
    if (minTemp < lowestTemp) {
      lowestTemp = minTemp;
      lowestMonth = monthsArray[i];
    }
  }
  
  console.log(`Kõige kõrgem temperatuur oli kuus ${highestMonth}, temperatuuriga ${highestTemp}°C.`);
  console.log(`Kõige madalam temperatuur oli kuus ${lowestMonth}, temperatuuriga ${lowestTemp}°C.`);
  