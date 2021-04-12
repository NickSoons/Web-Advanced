function verwijderTeken(){
    let gesplitst;
    let zin = prompt("Geef een random zin in");
    let lengteZin = zin.length;

    let getal = parseInt(prompt("Geef een random getal in van 0 tot " + lengteZin));

    if (getal > lengteZin){
        alert("Sorry, het opgegeven getal is groter dan de lengte van de zin");
    }
    else{
        gesplitst = zin.slice(getal);
        alert(gesplitst);
    }
}
verwijderTeken();

