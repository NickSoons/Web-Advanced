// function alleWoordenStartenMetHoofdletter(){
//     let zin = "Deze oefeningen zijn héél leuk."
//     let uitkomst = "";
//
//     document.getElementById("uitkomst").innerHTML = uitkomst;
//
// }
// alleWoordenStartenMetHoofdletter();

//oplossing
function alleWoordenStartenMetHoofdletter(zin){
    let woorden = zin.toLowerCase().split(" ");
    for(let teller =0; teller < woorden.length; teller++){
        woorden[teller] = woorden[teller].charAt(0).toUpperCase() + woorden[teller].substring(1).toLowerCase();
    }
    return woorden.join(" ");
}
document.getElementById("uitkomst").innerHTML = alleWoordenStartenMetHoofdletter("Deze oefeningen zijn héél leuk");