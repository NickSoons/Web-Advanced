let tijdstip = new Date().getHours();
let dagDeel;


// switch (tijdstip) {
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//         dagDeel = "Goedemorgen";
//         break;
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//         dagDeel = "Goede dag";
//         break;
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         dagDeel = "Goede avond";
//
// }

if (tijdstip >=18){
    dagDeel = "Goede avond";
}
if (tijdstip >=12 && tijdstip < 18){
    dagDeel = "Goede dag";

}
else{
    dagDeel = "Goede morgen";

}

document.getElementById("welkom").innerHTML= dagDeel + " het is " + tijdstip + " uur. ";

console.log(tijdstip + " " + dagDeel);