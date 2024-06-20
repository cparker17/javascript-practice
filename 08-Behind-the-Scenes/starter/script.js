'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output)

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millennial = true;
            const str = `Oh, and you're a millennial, ${firstName}.`
            console.log(str);
        }
        console.log(millennial);
    }

    printAge();
    return age;
}

const firstName = 'Chris';
calcAge(1984);

let age = 39;
let oldAge = age;
age = 40;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Chris',
    age: 40
}
const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);




