// let leeftijd = parseInt(prompt("Hoe oud ben je?"));
// let honger = "Ja";
//
// if (leeftijd <= 12 && honger === "Ja"){
//     console.log("Je krijgt een Happy Meal!");
// }
// else{
//     console.log("Je krijgt geen Happy Meal!");
// }

// let huidigeDag = new Date().getDay();
// let dag;
//
// switch (huidigeDag) {
//     case 0:
//         dag = "zondag";
//         break;
//     case 1:
//         dag = "maandag";
//         break;
//     case 2:
//         dag = "dinsdag";
//         break;
//     case 3:
//         dag = "woensdag";
//         break;
//     case 4:
//         dag = "donderdag";
//         break;
//      case 5:
//         dag = "vrijidag";
//         break;
//     case 6:
//         dag = "zaterdag";
// }
//
// console.log("Vandaag zijn we " + dag + "!");

// let bulldogBraaf = prompt("Is mijn pup vandaag braaf?",'Ja of nee?');
// let uitkomst;
// switch (bulldogBraaf) {
//     case 'Ja':
//         uitkomst = "GOOOOOOODD BOIIIII";
//         break;
//     case "Nee":
//         uitkomst = "BAAAAAASSS BOIII";
//         break;
//     default:
//         uitkomst = "Sorry het was ni duidelijk genoeg voor mij";
// }
//
// console.log(uitkomst);


// let teller = 1;
// let uitkomst = "";
//
// while (teller <= 10){
//     uitkomst = uitkomst +"<br>De teller staat op " + teller + ".<br>";
//     teller++;
// }
// console.log(uitkomst);
// document.getElementById("uitkomst").innerHTML = uitkomst;

// let teller = 15;
// let uitkomst = "";
//
// do {
//     uitkomst = uitkomst +"<br>De teller staat op " + teller + ".<br>";
//     teller++;
// }
// while (teller < 10);
// document.getElementById("uitkomst").innerHTML = uitkomst;

let uirkomst = "";
for (let teller = 0; teller <= 10; teller++){
    uitkomst = uitkomst +"<br>De teller staat op " + teller + ".<br>";
}
document.getElementById("uitkomst").innerHTML = uitkomst;
