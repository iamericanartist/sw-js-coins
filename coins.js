var penny = .01;
var nickel = .05;
var dime = .10;
var quarter = .25;
var input = prompt("Enter change amount plz:")


 // .67; 
console.log("Dollar amount is $" + input );
document.getElementById("theFacts").innerHTML = `${"Dollar amount is $" + input}<hr>`;

function printDat (message) {
	console.log("= input now at $", input);
}

var coinPurse = {};
  coinPurse.quarters= 0;
  coinPurse.dimes= 0;
  coinPurse.nickels= 0;
  coinPurse.pennys= 0;


//FOR QUARTERS:
while (input >= quarter) {
	input -= quarter;
	input = input.toFixed(2);
	coinPurse.quarters += 1;
	console.log("Quarters",coinPurse.quarters);
	printDat();
}

//FOR DIMES:
while (input >= dime) {
	input -= dime;
	input = input.toFixed(2);
	coinPurse.dimes += 1;
	console.log("Dimes",coinPurse.dimes);
	printDat();
} 

//FOR NICKELS:
while (input >= nickel) {
	input -= nickel;
	input = input.toFixed(2);
	coinPurse.nickels += 1;
	console.log("Nickels",coinPurse.nickels);
	printDat();
} 

//FOR PENNIES:
while (input >= penny) {
	input -= penny;
	input = input.toFixed(2);
	coinPurse.pennys += 1;
	console.log("Pennies",coinPurse.pennys);
	printDat();
} 

//The RETURNS:
console.log("coinPurse",coinPurse );
document.getElementById("theReturns").innerHTML = 
`${"Our change breakdown is: <div></div>" + 
	coinPurse.quarters + " quarters, " +
	coinPurse.dimes + " dimes, " +
	coinPurse.nickels + " nickels, " +
	coinPurse.pennys + " pennies! "
	}`;

////////////// Known issues...
//1. if you enter a quantity (rather than have the .67 input and run the prompt) sometimes the "running INPUT amount" would 
	// dip into the negatives...
	// as I think the "do...while" loops will run at least once no matter what. Couldn't wrap my head around how to fix that...
//2. I FOR THE LIFE OF ME, couldn't figure out how to return the "coinPurse" to the DOM the way it renders in the console log... :(




//////////////initial attempt... Couldn't get iteration...
// "Our change breakdown is " + coinPurse

// if (input >= quarter) {
// 	// for (var i = input; i >= quarter; i -quarter )
// 	input -= quarter;
// 	input = input.toFixed(2);
// 	coinPurse.quarters += 1;
// 	printDat();
// 	console.log("Quarters",coinPurse.quarters);
// } else if (input >= dime) {
// 	input -= dime;
// 	input = input.toFixed(2);
// 	coinPurse.dimes += 1;
// 	printDat();
// 	console.log("Dimes",coinPurse.dimes);

// } 

// console.log("coinPurse",coinPurse );




////////////////My Plan:
// input
// if input >= quarter:
// 	input - 1 quarter
// 	+= 1 coinPurse.quarters
// LOOP
// else input >= dime:
// 	input - 1 dime
// 	+= 1 coinPurse.dimes
// LOOP
// else input >= nickel:
// 	input - 1 nickel
// 	+= 1 coinPurse.nickels
// LOOP
// else input >= pennies:
// 	input - 1 penny
// 	+= 1 coinPurse.pennys

// return coinCounter

////////////////From Directions
// Input: 0.67
// Output:
// {
//   quarters: 2,
//   dimes: 1,
//   nickels: 1,
//   pennies: 2
// }
