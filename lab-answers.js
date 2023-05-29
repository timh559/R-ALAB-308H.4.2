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