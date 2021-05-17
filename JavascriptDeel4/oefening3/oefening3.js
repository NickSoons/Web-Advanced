document.getElementById("red").style.color = "#8b0000";

let parentMain = document.getElementById("main");
let childWeg = document.getElementById("weg");
parentMain.removeChild(childWeg);

let nieuweH1 = document.createElement("h1");
nieuweH1.id = "NieuweH1";
let tekstH1 = document.createTextNode("Welkom PandiX");
nieuweH1.appendChild(tekstH1);
document.getElementById("header").appendChild(nieuweH1);

let asideAdres = document.createElement("div");
asideAdres.id = "aside";
document.getElementById("main").appendChild(asideAdres);
let adres = document.createElement("p");
let adresTekst : document.createTextNode("Elfde-Liniestraat 24, 3500 Hasselt");
adres.appendChild((adresTekst));
document.getElementById("aside").appendChild(adres);