let coins = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
let coinArray = [];
let sum = 0;
let coinCount = 0;
let i = 0;

while (i < coins.length) {
    coinArray.push(coins[i]);  // Lisa münt massiivi
    sum += coins[i];           // Liida summa
    coinCount++;               // Suurenda müntide arvu
    i++;
}

console.log("Mündid: " + coinArray);
console.log("Müntide arv: " + coinCount);
console.log("Kogusumma: " + sum);
