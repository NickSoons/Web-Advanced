//Enkel het tellen vanaf 1 moet nog gebeuren

let hondenrassen = ["Beagle", "Labrador", "Duitse Herder", "Franse Bulldog", "Golden Retriever", "Berner Sennenhond", "Teckel", "Jack Russel", "Bordercollie" , "Chihuahua", "Vlinderhondje"];

let getal = parseInt(prompt("geef een getal in tussen 1 en 10", "1 ... 10"));
let nieuwGetal = getal++;

if (getal > 0 && getal <= 10){
    document.getElementById("hondenras").innerHTML = hondenrassen[nieuwGetal];
}
else{
    document.getElementById("hondenras").innerHTML = "Sorry, katten zijn niet toegelaten";
}