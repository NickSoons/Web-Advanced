let aantalLijnen = parseInt(prompt("uit hoeveel lijnen moet het bestaan?"));
if(aantalLijnen >= 0 && aantalLijnen <= 10){
    for (let teller =0; teller < aantalLijnen; teller++){
        let uitkomst = "";
        for (let teller2 =0; teller2 < aantalLijnen-teller; teller2++){
            uitkomst = uitkomst + " ";
        }
        for (let teller3 = 1; teller3 <= (teller+1); teller3++)
        {
            uitkomst = uitkomst + "#";
        }
        console.log(uitkomst);
    }
}
else
{
    console.log("Geef een getal in tussen 0 en 10");
}