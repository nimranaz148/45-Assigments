"use strict";
let Guest_List = ['Imran Khan', 'Nawaz Sharif', 'Asif Zardari'];
//for(let i=0;i<Guest_List.length;i++ ){
// console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
let absent_guest = 'Imran Khan';
let new_guest = 'Daniyal Nagori';
Guest_List[0] = new_guest;
// for(let i=0;i<Guest_List.length;i++ ){
//     console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Mr. ${absent_guest} is not coming in our party`);
console.log('Good News !We find big table so we are inviting 3 more Guests ');
Guest_List.unshift('Dr.Farooq Sattar');
Guest_List.splice(2, 0, 'Maryam Nawz');
Guest_List.push('Bilawal');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log('\n Sorry we cannot arrange big table,only two peoples will be invited');
while (Guest_List.length > 2) {
    let remove_guest = Guest_List.pop();
    console.log(`SORRY MR. ${remove_guest}, you are not invited for dinner`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
