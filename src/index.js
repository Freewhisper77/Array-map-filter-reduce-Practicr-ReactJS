var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => x * 2);

//Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter((x) => x >=5 );

//Reduce - Accumulate a value by doing something to each item in an array.
const sum = numbers.reduce((x,y) => x + y, 0);

//Find - find the first item that matches from an array.
// diff in Filter & Find: When Find get the return, it will not go through the remaining array.
const num = numbers.find((x) => x > 5); //56

//FindIndex - find the index of the first item that matches.
const i = numbers.findIndex((x) => x > 5); //1
