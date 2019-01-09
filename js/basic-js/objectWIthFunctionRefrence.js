object = {
  'name': 'akhi',
  age: null
}
var ageFinder = function (age) {
  return 30;
}
object.age = ageFinder;

console.log('object : ' , object);

console.log('object name : ' , object.name);
console.log('object age : ' , object.age());

