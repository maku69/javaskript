let külalised = 2;
switch (külalised) {
    //Kui broneeringu arv on 1 või 2, väljasta teade: “Valige laud kahele inimesele.”
    case 1:
    külalised = "Valige laud kahele inimesele.";
    break;
    case 2:
    külalised = "Valige laud kahele inimesele.";
    break;

//Kui broneeringu arv on 3 või 4, väljasta teade: “Valige laud neljale inimesele.”
  case 3:
    külalised = "Valige laud neljale inimesele";
    break;
    case 4:
    külalised = "Valige laud neljale inimesele";
    break;

//Kui broneeringu arv on 5 või 6, väljasta teade: “Valige laud kuuele inimesele.”
  case 5:
    külalised = "Valige laud kuuele inimesele";
    break;
    case 6:
    külalised = "Valige laud kuuele inimesele";
    break;

 //Kui broneeringu arv on rohkem kui 6, väljasta teade: “Valige suur laud.”
  default:
    külalised = "Valige suur laud";
}
 
 
console.log(külalised);
//Kirjuta switch-case programm, mis kontrollib, kas sisestatud number on positiivne, negatiivne või null. Programm peaks väljastama vastava teate vastavalt sisestatud numbri väärtusele
let number = 0;

switch (true) {
  case (number > 0):
    console.log("Positiivne number");
    break;
  case (number < 0):
    console.log("Negatiivne number");
    break;
  case (number == 0):
    console.log("Null");
    break;

}

 