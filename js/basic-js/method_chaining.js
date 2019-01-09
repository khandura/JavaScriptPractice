var person = function (name, agefinder, profilefinder) {
  console.log('isnide person : function (name, agefinder, profilefinder) ')
  console.log('person name : ' + name);
  agefinder(30);
  profilefinder('Developer');
}
var agefinder = function (num) {
  console.log('isnide agefinder : function (num) ')
  console.log('person age : ' + num);
}
var profilefinder = function (profile) {
  console.log('isnide profilefinder : function (profile) ')
  console.log('person profile : ' + profile);
}

person('Akhi', agefinder, profilefinder);
