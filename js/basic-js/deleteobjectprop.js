person = {
  'name': 'Akhilesh',
  'age': 30,
  'salary': 55000
};

console.log('person : ', person)

person.salary = undefined;
console.log('person : ', person)

//to delete the object's prop
delete person.salary;
console.log('person : ', person)