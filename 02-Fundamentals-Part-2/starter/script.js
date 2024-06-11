'use strict';

function logger() {
    console.log("This is a function");
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    return `Juice with ${apples} apples and ${oranges} oranges`;
}

console.log(fruitProcessor(7, 5));


//ARROW FUNCTIONS
const birthYear = 1984;
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(birthYear));
console.log("Age in 2037 will be " + calcAge3(birthYear) + ".");

//ARRAYS
const friends = ["Josh", "Andy", "Jeff"];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

const years = new Array(1990, 1991, 2000, 2024);
console.log(years);
console.log(years.length);
console.log(years.at(friends.length - 1));



