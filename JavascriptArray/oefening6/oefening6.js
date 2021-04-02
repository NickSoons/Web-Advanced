let hondenrassen = ["Beagle", "Labrador", "Duitse Herder", "Franse Bulldog", "Golden Retriever", "Berner Sennenhond", "Teckel", "Jack Russel", "Bordercollie" , "Chihuahua", "Vlinderhondje"];

hondenrassen.unshift("Shiba  Uni", "Akita", "Mopshond", "Auqtralische Herder");

hondenrassen.pop();
hondenrassen.shift();

document.getElementById("hondenrassen").innerHTML = hondenrassen.join("<br>");
console.log(hondenrassen);