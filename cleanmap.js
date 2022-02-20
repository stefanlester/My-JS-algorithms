// create a function to use
const makeSweeter = sweetItem => sweetItem * 2;

// we have an array
const sweetArray = [2, 3, 4, 5, 35];

// call the function we made. more readable
const sweeterArray = sweetArray.map(makeSweeter);

console.log(sweeterArray);
