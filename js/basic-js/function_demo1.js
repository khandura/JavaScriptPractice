function sayHelloToUser(name) {
  console.log('inside sayHelloToUser(name)')
  console.log('Hello ', name)
}

function sayHelloToManyUsers(user1, user2) {
  console.log('inside sayHelloToManyUsers(user1, user2)')
  console.log('Hello user1 : ', user1)
  console.log('Hello user2 : ', user2)
}

function sayHello(name) {
  console.log('inside sayHello(name)')
  console.log('Hello*** ' + name);
}

/*
same name function will override the previous definion and 
last valid definition of function will be picked.
*/
function sayHello() {
  console.log('inside sayHello()')
  console.log('Hello');
}

sayHello();
sayHelloToUser('Rama');
sayHelloToManyUsers('Akhilesh');
sayHelloToManyUsers('Akhilesh', 'Badshah');
sayHelloToManyUsers('Akhilesh', 'Badshah', 'Singh');
sayHello('Rama');
