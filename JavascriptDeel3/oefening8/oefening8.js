let datum = new Date();
let uur = datum.getHours();
let minuten = datum.getMinutes();
let dag = datum.getDay();
let uitkomst = "";

switch (dag){
    case 0:
        uitkomst = "zondag";
        break;
    case 1:
        uitkomst = "maandag";
        break;
    case 2:
        uitkomst = "dinsdag";
        break;
    case 3:
        uitkomst = "woensdag";
        break;
    case 4:
        uitkomst = "donderdag";
        break;
    case 5:
        uitkomst = "vrijdag";
        break;
    case 6:
        uitkomst = "zaterdag";
}

if (uur >=18){
    document.getElementById("boodschap").innerHTML = "Het is momenteel " + uitkomst + ", " + uur + "u" + minuten + " goede avond";
}
if (uur >=12 && uur < 18){
    document.getElementById("boodschap").innerHTML = "Het is momenteel " + uitkomst + ", " + uur + "u" + minuten + " goede dag";
}
else{
    document.getElementById("boodschap").innerHTML = "Het is momenteel " + uitkomst + ", " + uur + "u" + minuten + " goede morgen";

}
