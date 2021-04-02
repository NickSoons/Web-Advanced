let getal = parseInt(prompt("Geef een getal in van 1 tot 10.","1....10"));
let telling;
let uitkomst = "";



if (getal > 10){
    console.log("Niet mogelijk! Te groot ");
}
else if(getal < 0){
    console.log("Niet mogelijk! Te klein");
}
else{
    for (let teller = 0; teller <= 10; teller++){
        telling = getal * teller;
        uitkomst = uitkomst + "<br>" + getal + " * " + teller + " = " + telling + ".<br>";
    }
    document.getElementById("uitkomst").innerHTML = uitkomst;
}
