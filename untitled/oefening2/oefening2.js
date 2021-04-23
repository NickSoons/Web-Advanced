let mezelf = {
    naam : "Soons",
    voornaam : "Nick",
    telefoonnummer : "+32494841299",
    email : "Nick.Soons@student.pxl.be",
    gbdatum : "11/12/1998"
};

document.getElementById("name").innerHTML = mezelf.naam;
document.getElementById("fname").innerHTML = mezelf.voornaam;
document.getElementById("phone").innerHTML = mezelf.telefoonnummer;
document.getElementById("email").innerHTML = mezelf.email;
document.getElementById("birthday").innerHTML = mezelf.gbdatum;

document.getElementById("zin").innerHTML = "Mijn naam is " + mezelf.voornaam + " " + mezelf.naam + " en ik ben " +
    "geboren op" + mezelf.gbdatum + "." + " Mijn telefoonummer is " + mezelf.telefoonnummer + " en mijn email adres is" +
    mezelf.email + ". " + "Via deze gegevens kan je mij altijd contacteren!"