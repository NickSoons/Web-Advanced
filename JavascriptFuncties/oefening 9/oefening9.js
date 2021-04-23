// oplossing
function grootsteGetal(){
    let inputBezoeker= prompt("geef een geheel getal (boven 0) in");
    let grootsteGetal = 0;

    while (inputBezoeker.toUpperCase() !== "STOP"){
        if (parseInt(inputBezoeker) > grootsteGetal){
            grootsteGetal = inputBezoeker;
             inputBezoeker= prompt("geef een geheel getal (boven 0) in of het woord \'stop\'.");
        }
        else {
             inputBezoeker= prompt("geef een geheel getal (boven 0) in of het woord \'stop\'.");
        }
    }
    console.log(grootsteGetal);
}
grootsteGetal();