let getal1 = prompt("Geef uw eerste getal in");
let getal2 = prompt("geef uw tweede getal in");
let geheelgetal1 = parseInt(getal1);
let geheelgetal2 = parseInt(getal2);

let uitkomstMaal;
uitkomstMaal = geheelgetal1 * geheelgetal2;
document.getElementById("uitkomstMaal").innerHTML = "De uitkomst van de vermenigfuldeging is " + uitkomstMaal;

let uitkomstPlus;
uitkomstPlus = geheelgetal1 + geheelgetal2;
document.getElementById("uitkomstPlus").innerHTML = "De uitkomst van de optelling is " + uitkomstPlus;

let uitkomstMin;
uitkomstMin = geheelgetal1 - geheelgetal2;
document.getElementById("uitkomstMin").innerHTML = "De uitkomst van de aftrekking is " + uitkomstMin;


let uitkomstDeel;
uitkomstDeel = geheelgetal1 / geheelgetal2;
document.getElementById("uitkomstDeel").innerHTML = "De uitkomst van de deling is " + uitkomstDeel;

