const fruits1 = ["Apple", "Banana", "Orange", "Mango"];

for (let i = 0; i < fruits1.length;i++ ){
    console.log(fruits1[i])
}

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i<10; i++){
    if (i === 2) {
        break;
    }
    console.log(numbers[i])
}

//let counter = 0;
//const products = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];
//products.forEach((product, index2) => {
//  if (counter >= 10) return;
//  console.log(`${index2 + 1}. ${product}`);
//   counter++;
// });


let counter2 = 0
const products2 = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];
products2.forEach((products2, index) => {
    if (counter2 >= 12) return
    console.log(`${index}. ${products2}`)
    counter2++
})