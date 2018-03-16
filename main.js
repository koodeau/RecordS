var username = prompt("Pick a username (lowercase only):");
if (username == "admin") {
    alert("username "+username + " already exists! Pick another one.");
    var username = prompt("Pick a username (lowercase only):");
}



var score = 3;
var extraPoints = 2;

if ((score + extraPoints) >= 10 ) {
    console.log("You win!");
} else {
    console.log("You lose.");
}
var record = (score + extraPoints);
console.log("Your total score is " + (score + extraPoints));


if ((score + extraPoints) > record) {
    var record = (score + extraPoints);
}

console.log(username+"'s "+"record is "+record);