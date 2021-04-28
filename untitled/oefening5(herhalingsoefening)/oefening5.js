let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
];

// oefening 1
function filterGenk(){
    if (klanten.stad === "Genk"){
        let personenGenk = Object.values(klanten);
        console.log(personenGenk);
    }
}

//aanroepen functie 1
filterGenk();