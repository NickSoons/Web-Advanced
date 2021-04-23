//Object
let mezelf = {
    naam : "Soons",
    voornaam : "Nick",
    telefoonnummer : "+32494841299",
    email : "Nick.Soons@student.pxl.be",
    gbdatum : "11/12/1998"
};

//toevoegen van bepaalde objecten
mezelf.lengte = "1.75 m";
mezelf.gewicht = "60 kg";
mezelf.leeftijd = "22";
mezelf.huidskleur = "Blank";
mezelf.oogkleur ="Bruin";


//verwijderen van eigenschappen en waarden
delete mezelf.lengte;
delete mezelf.gewicht;

//omzetten naar Array
let mezelfArray = Object.values(mezelf);

//tonen in de console
console.log(mezelfArray)