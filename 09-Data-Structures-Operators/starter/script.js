'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery(obj) {
        console.log(obj);
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

//OBJECT DESTRUCTURING
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;

//DEFAULT VALUES
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//MUTATING VARIABLES
let l = 111;
let m = 999;
const obj = {l: 23, m: 7, n: 14};
({l,m} = obj);
console.log(l,m);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//ARRAY DESTRUCTURING
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);
const [one, , three] = restaurant.categories;
console.log(one, three);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//const ingredients = prompt("Let's make pasta!")

const arr2 = [1,2,...[3,4]];
const [r, s, ...others] = [1,2,3,4,5];
console.log(a,b,others);

console.log(3 || 'Chris');

const rest1 = {
    name: 'Capri',
    numGuests: 0
}
const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
}

rest2.numGuests = rest2.numGuests || 10;
console.log(rest2.numGuests);

rest1.numGuests ||= 10;
console.log(rest1.numGuests);

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu2) {
    console.log(item);
}

const values = Object.values(openingHours);
console.log(values);

console.log(Object.entries(openingHours));

// SETS
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet);

const staff = ['Waiter', 'Chef', 'Manager', 'Waiter'];
const staffDistinct = new Set(staff);
console.log(staffDistinct);
