"use strict";
let alien_Colors = "green";
//If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
//version 1 of program
if (alien_Colors === "green") {
    console.log("version 1: player earned 5 points");
}
else if (alien_Colors === "yellow") {
    console.log(" player earned 10 points");
}
else if (alien_Colors === "red") {
    console.log(" player earned 15 points");
}
else {
    console.log("please select right color");
}
//version 2 of program
alien_Colors = "yellow";
if (alien_Colors === "green") {
    console.log(" player earned 5 points");
}
else if (alien_Colors === "yellow") {
    console.log("version 2: player earned 10 points");
}
else if (alien_Colors === "red") {
    console.log(" player earned 15 points");
}
else {
    console.log("please select right color");
}
//version 3 of program
alien_Colors = "red";
if (alien_Colors === "green") {
    console.log(" player earned 5 points");
}
else if (alien_Colors === "yellow") {
    console.log(" player earned 10 points");
}
else if (alien_Colors === "red") {
    console.log("version 3: player earned 15 points");
}
else {
    console.log("please select right color");
}
