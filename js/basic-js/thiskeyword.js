person = {
  'firstName': 'Akhilesh',
  'lastName': 'Khanduri',
  'fullName': function () {
    return person.firstName + ' ' + person.lastName;
  }
};
console.log("person : "+person.fullName());
person2 = person;
console.log("person2 : "+person2.fullName());
person = {};

//console.log("person : "+person.fullName());   //causes error
console.log("person2 : "+person2.fullName());   //prints undefined undefined

console.log("*******************************************");


//solution to above issue is to use this keyword

person = {
  'firstName': 'Akhilesh',
  'lastName': 'Khanduri',
  'fullName': function () {
    return this.firstName + ' ' + this.lastName;
  }
};
console.log("person : "+person.fullName());
person2 = person;
console.log("person2 : "+person2.fullName());
person = {};

//console.log("person : "+person.fullName());   //causes error
console.log("person2 : "+person2.fullName());  

person3 = person2;
person3.firstName = "Ram";
person3.lastName = "Kumar";
console.log("person2 : "+person2.fullName());  
console.log("person3 : "+person3.fullName());  

person3 = {};
console.log("person2 : "+person2.fullName());  




