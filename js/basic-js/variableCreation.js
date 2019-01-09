console.log("This program shows different types of variable creation");

var normalVar = "Akhi";
const constVar = "CONSTANT";

console.log("Normal variable "+ normalVar);
console.log("Constant variable "+ constVar);

normalVar = "Normal variable value can be changed";
console.log("Normal variable "+ normalVar);

//this code will throw error as const variable can't be modified.
/*
constVar = "Constant variable value can not be changed";
console.log("Constant variable "+ constVar);
*/