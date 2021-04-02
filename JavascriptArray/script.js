// manier 1
// let werkdag = new Array();
// werkdag[0] = "maandag";
// werkdag[1] = "dinsdag";
// werkdag[2] = "woensdag";
// werkdag[3] = "donderdag";
// werkdag[4] = "vrijdag";

//manier 2
// let werkdag = new Array("maandag", "dinsdag" , "woensdag", "donderdag", "vrijdag");

//manier 3
let werkdag = ["maandag", "dinsdag" , "woensdag", "donderdag", "vrijdag"];

werkdag[5] = "werkdag";

// leegmaken
werkdag.length = 0;

console.log(werkdag);
console.log(werkdag[2]);
console.log(werkdag.length);
