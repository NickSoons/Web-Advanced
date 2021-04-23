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


// oplossing met parameter
// let grootsteGetal = 0;
// let inputBezoeker = prompt("Geef een geheel getal (boven 0) in of, vanaf poging twee, het woord \'stop\'.");
// do
//     console.log(grootsteNummer(inputBezoeker));
// }
// while (inputBezoeker.toUpperCase() !== "STOP");
// function grootsteNummer(inputBezoeker) {
//     if (parseInt(inputBezoeker) > grootsteGetal) {
//         grootsteGetal = inputBezoeker;
//         return grootsteGetal;
//     }
// else {
//         return grootsteGetal;
//     }