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

let uitkomst = "";
let eigenschap;

for (eigenschap in mezelf){
    uitkomst = uitkomst + mezelf[eigenschap] + ", ";
}

document.getElementById('overview').innerHTML = uitkomst;
//weergeven op webpagina
