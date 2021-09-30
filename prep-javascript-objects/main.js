var person = {
  firstName: 'John',
  lastName: 'Smith',
  hobby: 'Sailing'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("This person's fullname is:", fullName);

person.job = 'pilot';
console.log("This person's job is:", person.job);

var previousJob = 'cashier';
console.log("This person's prevoius job was:", previousJob);

console.log('The complete person object:');

var completePerson = {
  firstName: 'John',
  lastName: 'Smith',
  hobby: 'Sailing',
  job: 'Pilot',
  previousJob: 'Cashier'
};
console.log(completePerson);
