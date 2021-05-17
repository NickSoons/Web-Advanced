//Voobeeld 1
let aantalClicks = 0;

document.getElementById("klikken").addEventListener("click", aantalKeerKlikken);

function aantalKeerKlikken(){
    aantalClicks++;
    document.getElementById("uitkomst").innerHTML = "Je hebt " + aantalClicks +  " keer geklikt!"
}

//voorbeeld 2
let box = document.getElementById("box");
let uitkomst = document.getElementById("output");

box.addEventListener("mouseover",  inDeBox);
box.addEventListener("mouseout",  uitDeBox);

function inDeBox(){
    uitkomst.innerHTML += "<br> De muis is in de box."
}

function uitDeBox(){
    uitkomst.innerHTML += "<br> De muis is uit de box."

}

//Voorbeeld 3
document.getElementById("waardetonen").addEventListener("click", toonDeWaarde);

function toonDeWaarde(){
    waarde = document.getElementById("tekstvlak").value();
    document.getElementById("boodschap").innerHTML = "Welkom " + waarde;
}