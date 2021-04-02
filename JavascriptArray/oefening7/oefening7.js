let sport = ["basketbal", "voetbal" , "wielrennen", "tennis"];
document.getElementById("origineleArray").innerHTML = sport;

sport.splice(2,0, "PingPong")
document.getElementById("gesplitsteArray").innerHTML = sport;

sport.splice("1","1","zwemmen");
document.getElementById("vervangen").innerHTML = sport;

sport.splice("1","1");
document.getElementById("remove").innerHTML = sport;