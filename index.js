// Code your solution in this file! Right in here! Do it!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(firstTwo){
    return firstTwo.slice(0,2);
}

const returnLastTwoDrivers = (lastTwo) => lastTwo.slice(2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//we are hoisting here, don't always have to define a function before invoking it
const fareMultiplier = createFareMultiplier();
function createFareMultiplier(x){
    const fareQuintupler = function(x){
        return x*5;
    }
    return fareQuintupler;
}

//For this one, we can do an arrow function since it really only requires one line of code and there's no nested functions required.
const fareDoubler = (fareMultiplier) => fareMultiplier*2;

const fareTripler = (fareMultiplier) => fareMultiplier*3;


function selectDifferentDrivers(arrayOfDrivers, placeholderFunction){
    switch(placeholderFunction){
        case returnFirstTwoDrivers:
            return returnFirstTwoDrivers(arrayOfDrivers);
        case returnLastTwoDrivers:
            return returnLastTwoDrivers(arrayOfDrivers);
        default:
            'Unexpected error';

    }
    return placeholderFunction;
}

console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers))
console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers))