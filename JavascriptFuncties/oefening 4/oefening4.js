function startMetHallo(){
    let zin = prompt("Geef een random zin in");

    let eerstWoord = zin.substring(0 , 5);
    let zinKleineLetters = zin.toLowerCase();
    console.log(eerstWoord);
    if (eerstWoord === "Hallo"){
        console.log(zin);
    }
    else{
        console.log("Hallo, " + zinKleineLetters);
    }
}

startMetHallo();