var arr = ["one","two","three"];

console.log("array : ",arr);
console.log("array length : ", arr.length);
console.log("accessing out of bount arr[3] : ",arr[3]);  //doesn't throw error, returns undefined

arr = null;


//console.log("accessing null array arr.length : ",arr.length);


var nestedarr = ["A","B",["IA","IB"]];

console.log("nested array : ", nestedarr);

console.log("1st element : ", nestedarr[0]);
console.log("3rd element : ", nestedarr[2]);
console.log("1st element of nested array : ", nestedarr[2][0]);