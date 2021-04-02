let vandaag = new Date();
let vandaagMaand = vandaag.getMonth();
let vandaagJaar = vandaag.getFullYear();
let uitkomst = "";

let arrayDagenPerMaand = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31" , "30", "31"];
let arrayWeekdagen = ["zondag", "maandag", "dinsdag", "woensdag", "dondedag", "vrijdag","zaterdag"];
for (let dagen = 1; dagen <= arrayDagenPerMaand[vandaagMaand]; dagen++){
    let datum = new Date(vandaagJaar, vandaagMaand, dagen);
    let weekdag = datum.getDay();
    uitkomst = uitkomst + arrayWeekdagen[weekdag] + ", " + dagen + "/" + (vandaagMaand+1) + "/" + vandaagJaar + "<br>";
}
document.getElementById("datum").innerHTML = uitkomst;