// let geboorteJaar = parseInt(prompt("Wat is je geboortejaar?"));
// let jaar = new Date().getFullYear();
// let uitkomst = jaar - geboorteJaar;
//
//
// if (uitkomst > 20) {
//     alert("Je bent oud genoeg om de informatie op deze webpagina te bekijken");
// }
//
// console.log(uitkomst);

let huidigeDatum = new Date();
let geboorteDatum = new Date(prompt("Wat is uw geboortedatum?", "yyyy/mm/dd"));

let leeftijd = huidigeDatum.getFullYear() - geboorteDatum.getFullYear();

let verschilMaand = huidigeDatum.getMonth() - geboorteDatum.getMonth();
if (verschilMaand < 0){
    leeftijd --;
}
else if(verschilMaand === 0){
    let verschilDag = huidigeDatum.getDate() - geboorteDatum.getDate();
    if (verschilDag < 0){
        leeftijd--;
    }
}

if (leeftijd >= 20){
    document.getElementById("boodschap").innerHTML = "je bent oud genoeg om deze informatie te bezichtigen";
}
else if (leeftijd < 20){
    document.getElementById("boodschap").innerHTML = "je bent te jong om deze informatie te bezichtigen";
}
else{
    document.getElementById("boodschap").innerHTML = "geef een geldig geboorte jaar in";

}