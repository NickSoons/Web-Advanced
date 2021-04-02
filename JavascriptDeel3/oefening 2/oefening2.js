let antwoord = prompt("Vertel ons eens, sport je graag?", "Ja - Nee?");

if (antwoord === "Ja") {
    document.getElementById("antwoord").innerHTML="Just do it!";
}
else {
    document.getElementById("antwoord").innerHTML="Jammer, blijf dan maar liggen!";
}
