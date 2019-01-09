person = {
  'firstName': 'Akhilesh',
  'lastName': 'Khanduri',
  'address': {
    'state': 'New York',
    'city': 'NY'
  },
  'fullName': function () {
    return person.firstName + ' ' + person.lastName;
  },
  'isFromCity': null
};

var cityChecker = function (city) {
  if (person.address.city == city) {
    return true;
  } else {
    return false;
  }
}

person.isFromCity = cityChecker;

console.log('person : ' + person.fullName());
console.log('person city : ' + person.address.city);
console.log('************');
console.log('is person from CA city : ' + person.isFromCity("NY"));
