// Problem: Create an array containing different types of teas
const teas = [
  "Green tea",
  "Black tea",
  "Oolong tea",
  "White tea",
  "Herbal Tea",
];
console.log(teas);

// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");

// Problem: Remove "Oolong Tea" from the list of teas
const index = teas.indexOf("Oolong tea");
if (index > -1) {//index will store -1 in case of element not found in array
    teas.splice(index, 1);//index se leke index tak elements will be removed that's why 1 is there
}

// Problem: Filter the list to only include teas that are caffeinated
const caffeinatedtea = teas.filter((tea) => tea != 'Herbel Tea');

// Problem: Sort the list of teas in alphabetical order
console.log(teas.sort());

// Problem: Use a for loop to print each type of tea in the array
for (let i = 0; i < teas.length; i++){
    console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")
let count = 0;
for (let i = 0; i < teas.length; i++){
    if (teas[i] != 'Herbal Tea') {
        count++;
    }
    console.log(count);
}

// Problem: Use a for loop to create a new array with all tea names in uppercase
const uppcaseteas = [];
for (let i = 0; i < teas.length; i++){
    uppcaseteas.push(teas[i].toUpperCase());
}
console.log(uppcaseteas);

// Problem: Use a for loop to find the tea name with the most characters
let largesttea=teas[0];
for (let i = 1; i < teas.length; i++) {
    if (largesttea.length < teas[i].length) {
        largesttea = teas[i];
    }
}
console.log(largesttea);
// Problem: Use a for loop to reverse the order of the teas in the array
let i = 0;
let j = teas.length - 1;
while (i <= j) {
    let temp = teas[i];
    teas[i] = teas[j];
    teas[j] = temp;
    i++; j--;
}
console.log(teas);