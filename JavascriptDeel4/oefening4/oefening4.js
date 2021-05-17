let boeklijst = [
    { titel: "The theory of everything", auteur: "Stephen Hawking", gelezen: "ja" },
    { titel: "12 rules for life", auteur: "Jordan Peterson", gelezen: "nee" }
]

for (teller = 0; teller <= boeklijst.length; teller++){
    let nieuwBoek = document.createElement("li");
    nieuwBoek.id = "boek" + (teller+1);
    let nieuwBoekInhoud = document.createTextNode("Titel: " + boeklijst[teller].titel + ", auteur " + boeklijst[teller].auteur + ", gelezen : " + boeklijst[teller].gelezen);
    nieuwBoek.appendChild(nieuwBoekInhoud);
    document.getElementById('boekenlijst').appendChild(nieuwBoek);
}