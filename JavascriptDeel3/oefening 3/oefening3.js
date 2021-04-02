let tijdstip = new Date().getHours();
let dagDeel;

if(tijdstip <= 12){
    dagDeel = "Voormiddag";
}
else {
    dagDeel = "Namiddag";
}
// switch (tijdstip) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//         dagDeel = "Voormiddag";
//         break;
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//         dagDeel = "Namidag";
// }

document.getElementById("welkom").innerHTML="Welkom het is " + tijdstip + " uur in de " + dagDeel;

console.log(tijdstip + " " + dagDeel);