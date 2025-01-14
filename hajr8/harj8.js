/*
Markus PIlv
1.14.2025 10:43
hajr7
*/

const mündid = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20]
let coinnumber = 0;
let kokku = 0;
let i = 0;
while (i < mündid.length) {
    kokku += mündid[i];
    coinnumber++;
    i++;
}

console.log(`Kogus ${coinnumber} münti, kokku ${kokku} eurot.`);
