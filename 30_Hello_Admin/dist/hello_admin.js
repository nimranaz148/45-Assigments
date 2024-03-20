"use strict";
const userNames = ['chris', 'george', 'merry', 'lewis', 'maria'];
userNames.forEach(userName => {
    if (userName === 'chris') {
        console.log('Hello chris, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
});
