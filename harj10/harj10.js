/*
Markus PIlv
1.14.2025 10:43
hajr10
*/

let toode = [
    { mark: 'Toyota', kogus: 20, aasta: 2007 },
    { mark: 'Honda', kogus: 10, aasta: 2012 },
    { mark: 'Tesla', kogus: 1, aasta: 2019 }
  ];
  
  
  toode.forEach((auto) => {
    console.log(`
      Mark: ${auto.mark},
      kogus: ${auto.kogus},
      Aasta: ${auto.aasta}
      `);
  });

  const ostukorv = {
    tooted: [
        { nimi:'Piim', hind:3.60, kogus:2 },
        { nimi:'Leib', hind:2.00, kogus:1 },
        { nimi:'Munad', hind:1.50, kogus:6 },
        { nimi:'Juust', hind:4.20, kogus:1 },
        { nimi:'Tomatid', hind:2.30, kogus:3 },
      ]};

//ostukorv.tooted.push({ mark: 'BMW', mudel: '320i', aasta: 2015 })
//kui see valja kommenteerida siis ei toota kogu summa asi
ostukorv.tooted.forEach(toode => {
    console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
    });
    //https://stackoverflow.com/questions/16449295/how-to-sum-the-values-of-a-javascript-object
const sumValues = arr => arr.reduce((summa, toode) => summa + (toode.hind * toode.kogus), 0);
console.log('Ostukorvi kogu summa:', sumValues(ostukorv.tooted));