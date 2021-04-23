// function verwijderTeken(){
//     let gesplitst;
//     let zin = prompt("Geef een random zin in");
//     let lengteZin = zin.length;
//
//     let getal = parseInt(prompt("Geef een random getal in van 0 tot " + lengteZin));
//
//     if (getal > lengteZin){
//         alert("Sorry, het opgegeven getal is groter dan de lengte van de zin");
//     }
//     else{
//         gesplitst = zin.slice(getal);
//         alert(gesplitst);
//     }
// }
// verwijderTeken();

// oplossing
function verwijderTeken() {
    let zin = rompt("Geef een random zin in");
    let aantalTekens = zin.length;

    let nummersSplitsen = parseInt(prompt("Geef een random getal in van 0 tot " + aantalTekens + "in."));
    if(nummersSplitsen >= 1 && nummersSplitsen <= aantalTekens){
        let deel1 = zin.substring(0, nummersSplitsen);
        let deel2 = zin.substring(nummersSplitsen+1, aantalTekens);
        let teVerwijderenTeken = zin.substring(nummersSplitsen, nummersSplitsen+1);

        alert("Deel 1 van de zin is \"" + deel1 + "\"\"Deel 2 van de zin is \"" + deel2 + "\"" + "\nHet verwijderde teken is \"" + teVerwijderenTeken + "\"");
    }
    else{
        alert("Dit is geen goede waarde!")
    }

}
verwijderTeken();