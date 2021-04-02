let aantalLijnen = parseInt(prompt("Uit hoeveel lijnen moet de piramida bestaan?"));
let uitkomst = "";

if (aantalLijnen >= 0 && aantalLijnen <=10){
    for (let teller =0; teller < aantalLijnen; teller++){
        for (let teller2 = 0; teller2 < teller; teller2++){
            uitkomst = uitkomst + "#";
        }
        uitkomst = uitkomst + "\n";
    }
    console.log(uitkomst);
}
else{
    console.log("Geef een getal tussen 0 en 10 in!");
}

