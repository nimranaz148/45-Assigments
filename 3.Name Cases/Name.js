"use strict";
let personName = '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    console.log(`Hello ${personName},here areyour name in:
    lowercase:${lowercase}
    uppercase:${uppercase}
    Titlecase:${titlecase}`);
}
else {
    console.log('Please fill your name !');
}
