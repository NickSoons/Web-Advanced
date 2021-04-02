let aantalLijnen = 7;
let uitkomst = "";

for (let teller =0; teller < aantalLijnen; teller++){
        for (let teller2 = 0; teller2 < teller; teller2++){
                uitkomst = uitkomst + "#";
        }
        uitkomst = uitkomst + "\n";
}
console.log(uitkomst);