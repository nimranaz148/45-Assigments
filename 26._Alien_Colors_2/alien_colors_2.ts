//write an if-else chain.
//•If the alien’s color is green, print a statement 
//the player just earned 5 points for shooting the alien.

let alien_Colors :string = "green";
 if(alien_Colors === "green"){
    console.log(" player just earned 5 points for shooting the alien");
}else{
    console.log("player just earned 10 points")
}

// If the alien’s color isn’t green, print a statement 
//that the player just earned 10 points

alien_Colors = "yellow";

if(alien_Colors === "green"){
    console.log(" player just earned 5 points for shooting the alien");
}else{
    console.log("player just earned 10 points")
}

