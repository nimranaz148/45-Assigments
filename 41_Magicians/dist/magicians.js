"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
let magician = ['Shin Lim', 'Harry poter', 'Chris Ange', 'Penn & Teller'];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
