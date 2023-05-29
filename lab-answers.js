////////////////////////////////
// Easy Going
////////////////////////////////
for(let i=1;i<=20;i++) {
    console.log(i);
}
console.log("================================");
////////////////////////////////
// Get Even
////////////////////////////////
for(let i=0;i<=200;i++) {
    if(i>0 && i%2===0) {
        console.log(i);
    }
}
console.log("================================");
////////////////////////////////
// Fizz Buzz
////////////////////////////////
for(let i=1;i<=100;i++) {
    if(i%3===0) {
        if(i%5===0) {
            console.log("FizzBuzz");
        }
        else {
            console.log("Fizz");
        }
    }
    else if(i%5===0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
console.log("================================");
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] += 1;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy[0] = "Gameboy";
console.log(plantee, wolfy, dart);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for(let turtle of turtles) {
    console.log(turtle.toUpperCase());
}
////////////////////////////////
// Methods Revisted
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log("Index of Titanic is:"+favMovies.indexOf("Titanic"));
favMovies.sort();
//sorts array by first character
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
console.log(favMovies);
let removed = favMovies.shift();
//shift removes from beginning of array
console.log(removed);
console.log(favMovies);
favMovies.unshift(removed);
//unshift adds to beginning of array
console.log(favMovies);
removed = favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");
// splice removes a specific section of the array and returns the removed portion in its own array
console.log(removed);
console.log(favMovies);
removed = favMovies.splice(favMovies.length/2);
console.log(removed);
console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious"));
// index of element not in array returns -1
console.log("===================================")
/////////////////////////////////
