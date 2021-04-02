let antwoord = prompt("Vertel ons eens, sport je graag?", "Ja - Nee?");
switch (antwoord){
    case "Ja":
        antwoord = "Just do it!";
        break;
    case "Nee":
        antwoord = "Jammer, blijf dan maar liggen!";
        break;
    default:
        antwoord = "Dat was niet duidelijk, antwoord je vanuit je luie zetel";
}

document.getElementById("boodschap").innerHTML = antwoord;