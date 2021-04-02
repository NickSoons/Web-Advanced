let getal = parseInt(prompt("Geef een random getal in."));

if (getal < 50){
    document.getElementById("boodschap").innerHTML = "Jammer... het getal is te laag..." ;
}
else if (getal === 50){
    document.getElementById("boodschap").innerHTML = "Proficiat! U hebt goed gegokt!";
}
else if(getal > 50){
    document.getElementById("boodschap").innerHTML = "Jammer... het getal is te hoog...";
}