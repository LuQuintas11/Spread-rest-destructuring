/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1,2,3];
let arr2= arr1;
arr2.push(4)
console.log("Second array;", arr2)

//to remain untouch the first array
// Copying an array
let arr3 = [2,3,4];
let arr4=[...arr3];

arr4.push(6)

// Copying an object
let obj1 = { a: 1, b: 2, c: 3};
let obj2= {...obj1, d:4};


// Copying only part of an array/object
let arr5=[...arr1, {...arr1{...obj1}, ...arr3 "x","y", "z"];