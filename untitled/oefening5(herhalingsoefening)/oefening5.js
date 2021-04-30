let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
];

// functie 1
// function filterGenk(){
//     if (klanten.stad === "Genk"){
//         let personenGenk = Object.values(klanten);
//         console.log(personenGenk);
//     }
// }
// filterGenk();
// function wonendeTeGenk(){
//     let klantenGenk = [];
//     for (let teller =0; teller < klanten.length; teller++){
//         if (klanten[teller].stad === "Genk"){
//             klantenGenk.push(klanten[teller]);
//         }
//     }
//     console.log(klantenGenk);
// }
// wonendeTeGenk();

//functie 2
// function aantalLetters(){
//     let uitkomst = 0;
//     for (let teller =0; teller < klanten.length; teller++){
//         uitkomst = uitkomst + klanten[teller].naam.length;
//     }
//     console.log(uitkomst);
// }
// aantalLetters();

//oefening 3
// function stadAntwerpen(){
//     let nieuweStad = "Antwerpen";
//     for (let teller =0; teller < klanten.length; teller++){
//         klanten[teller].stad = nieuweStad;
//         nieuweStad += "-Antwerpen";
//     }
//     console.log(klanten);
// }
// stadAntwerpen();

//oefening 4
// function namenAchtetrElkaar(){
//     let uitkomst = "";
//     for (let teller =0; teller < klanten.length; teller++){
//         uitkomst = uitkomst + klanten[teller].voornaam;
//     }
//     if (uitkomst.length % 2 === 0){
//         let lengteLaatsteVoornaam = klanten[klanten.length-1].voornaam.length;
//         let uitkomstMetHoofdletters = uitkomst.substring(0, uitkomst.length-lengteLaatsteVoornaam).toLowerCase() + uitkomst.substring(uitkomst.length-lengteLaatsteVoornaam, uitkomst.length).toUpperCase();
//         console.log(uitkomstMetHoofdletters);
//     }
//     else {
//         console.log(uitkomst);
//     }
// }
// namenAchtetrElkaar()
// oefening 5
function maakParagraaf(){
    let uitkomt = "";
    for (let teller =0; teller < klanten.length; teller++){
        uitkomt = uitkomt + '<p>' + klanten[teller].voornaam + " " + klanten[teller].naam + " , wonende te " + klanten[teller].stad + '</p>';
    }
    document.getElementById("output").innerHTML = uitkomt;
}
maakParagraaf();
