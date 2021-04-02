let aantalLijnen = 7;

for (let teller = 0; teller < aantalLijnen; teller++){
    let uitkomst = "";
    for(let teller2 = 1; teller2 < aantalLijnen-teller; teller2++){
        uitkomst = uitkomst + " ";
    }
    for (let teller3 = 1; teller3 <= (2*teller+1); teller3++){
        uitkomst = uitkomst + "#";
    }
    console.log(uitkomst);
}