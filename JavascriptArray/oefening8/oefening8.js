let vandaag = new Date();
let vandaagMaand = vandaag.getMonth();
let vandaagJaar = vandaag.getFullYear();
let uitkomst = "";

let arrayDagenPerMaand = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31" , "30", "31"];

for (let dagen = 1; dagen <= arrayDagenPerMaand[vandaagMaand]; dagen++){
    uitkomst = uitkomst + dagen + "/" + (vandaagMaand + 1) + "/" + vandaagJaar + "<br>";
}
document.getElementById("datum").innerHTML = uitkomst;