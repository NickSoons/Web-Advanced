let nieuweParagraaf = document.createElement("p");
nieuweParagraaf.id = "tweede";
let teksParagraaf = document.createTextNode("Dit is een tweede paragraaf");
nieuweParagraaf.appendChild(teksParagraaf);
// document.getElementById("header").appendChild(nieuweParagraaf);
document.getElementById("header").insertBefore(nieuweParagraaf, document.getElementById("eerste"));

// Verwijder de laatste paragraaf in de header uit het DOM
let header = document.getElementById("header");
let paragraaf = header.querySelectorAll("p:last-child")[0];
header.removeChild(paragraaf);