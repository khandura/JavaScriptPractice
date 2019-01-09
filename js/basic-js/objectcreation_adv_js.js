//this prog demonstrates different ways of object creation.
//use : to assign the value and "" to create a prop
person = {
  'name': 'Akhilesh',
  'age': 30,
  'profile': 'Developer',
  '100': 'hundred'
};
console.log('person : ', person);
//access object prop using dot notation
console.log('person name : ' + person.name);
console.log('person age : ' + person.age);
console.log('person profile : ' + person.profile);
//accessing a non exsited prop : prints undefined
console.log('person profile : ' + person.noprop);
//access object prop using sqaure bracet notation, pass prop name in ""
console.log('person name : ' + person['name']);
console.log('person age : ' + person['age']);
console.log('person profile : ' + person['profile']);
//access invalid identifier using square brackets
//console.log("person name : "+ person.100);    //throws exception
console.log('person name : ' + person['100']);
//access prop dynamically 
propName = 'name';
console.log('person name : ' + person.propName); //this will print undefined
console.log('person name : ' + person[propName]); //this replaces value of propName and then prints the value of that prop
