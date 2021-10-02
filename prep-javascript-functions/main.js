function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return (hours) * (60);
}
var convert = convertHoursToMinutes(2);
console.log('convert', convert);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var value = multiplyAndDivideBy5(35, 10);
console.log('value', value);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}

var subtract = subtractTwoNumbers(22, 7);
console.log('subtract', subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * (radius);
}
var radius = getCircleCircumference(5);
console.log('radius', radius);

function getFullName(firstName, lastName) {
  return (firstName + ' ' + lastName);
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName', fullName);

function cube(num) {
  return num * num * num;
}

var outcome = cube(5);
console.log('outcome', outcome)
;
