
//Creating a variable and setting my age to it.
let myAge = 50;


//Setting 2 to variable earlyYears
let earlyYears = 2;

earlyYears *= 10.5;

let laterYears;

/* Since we already accounted for the first two years, the myAge variable, and subtract 2 from it. */
laterYears = myAge - 2;


//Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. 
laterYears *= 4;

console.log(earlyYears);

console.log(laterYears);


// Adding earlyYears and laterYears together, stored in myAgeInDogYears.
let myAgeinDogYears = earlyYears + laterYears; 

console.log(myAgeinDogYears);


// Write name as a string, using .toLowerCase(), and store in  myName.
myName = ('Alex'.toLowerCase());

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeinDogYears} years old in dog years.`);


