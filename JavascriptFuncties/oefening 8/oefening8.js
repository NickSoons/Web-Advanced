//Mijn Oplossing
// function telDeKlinkers() {
//     let woorden = prompt("Geef een random zin in");
//     let klinkers = 'aeiou';
//     let aantalKlinkers = 0;
//     for(let teller = 0; teller < woorden.length ; teller++)
//     {
//         if (klinkers.indexOf(woorden[teller]) !== -1)
//         {
//             aantalKlinkers++;
//         }
//     }
//     alert("Het aantal klinkers in deze zin is: " + aantalKlinkers);
// }
// telDeKlinkers();

// oplossing
function telDeKlinkers() {
    let woorden = prompt("Geef een random zin in");
    let uitkomst = 0;
    for(let teller = 0; teller < woorden.length ; teller++){
        if (zin[teller] === "a" || zin[teller] === "e" || zin[teller] === "i" || zin[teller] === "u" || zin[teller] === "o"){
            uitkomst++;
        }
    }
    alert("Het aantal klinkers in deze zin is: " + uitkomst);
}
telDeKlinkers();