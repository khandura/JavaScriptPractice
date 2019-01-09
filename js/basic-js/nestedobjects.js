//nested object
person = {
  'name': 'Akhilesh',
  'age': 30,
  'profile': 'Developer',
  'address': {
    'nation': 'India',
    'state': 'Delhi',
    'city': 'Delhi'
  }
};
console.log('person : ', person);
console.log('person name : ', person.name);
console.log('person age : ', person.age);
console.log('person address : ', person.address);
console.log('conplete address')
console.log('person nation : ', person.address.nation);
console.log('person state : ', person.address.state);
console.log('person city : ', person.address.city);


console.log('person city : ', person.address["city"]);

console.log('person city : ', person["address"].city);

console.log('person city : ', person["address"]["city"]);

