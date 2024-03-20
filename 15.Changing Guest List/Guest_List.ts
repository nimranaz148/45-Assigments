
let Guest_List :string[] = ['Imran Khan','Nawaz Sharif','Asif Zardari'];
for(let i=0;i<Guest_List.length;i++ ){
    console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

let absent_guest :string = 'Imran Khan';
let new_guest : string = 'Daniyal Nagori';
Guest_List[0] = new_guest;

for(let i=0;i<Guest_List.length;i++ ){
    console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
console.log(`Mr. ${absent_guest} is not coming in our party`)


