/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(x, y) {
  return x + y;
}

function addNumbers() {
  const n1 = Number(document.querySelector('#add1').value);
  const n2 = Number(document.querySelector('#add2').value);
  const sum = add(n1, n2);
  document.querySelector('#sum').value = sum;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(x, y) {
  return x - y;
};

const subtractNumbers = function() {
  const n1 = Number(document.querySelector('#subtract1').value);
  const n2 = Number(document.querySelector('#subtract2').value);
  const diff = subtract(n1, n2);
  document.querySelector('#difference').value = diff;
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (x, y) => x * y;

const multiplyNumbers = () => {
  const n1 = Number(document.querySelector('#factor1').value);
  const n2 = Number(document.querySelector('#factor2').value);
  const product = multiply(n1, n2);
  document.querySelector('#product').value = product;
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(x, y) {
  return x/y;
}

function divideNumbers() {
  const n1 = Number(document.querySelector('#dividend').value);
  const n2 = Number(document.querySelector('#divisor').value);
  const sum = divide(n1, n2);
  document.querySelector('#quotient').value = sum;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const today = new Date();
const year = today.getFullYear();

document.querySelector('#year').innerText = year;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = Array.from({length:13}, (_, i) => i + 1);
document.querySelector('#array').innerHTML = numbers.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbers.filter((x) => x % 2 === 1);
document.querySelector('#odds').innerHTML = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numbers.filter((x) => x % 2 === 0);
document.querySelector('#evens').innerHTML = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sum = numbers.reduce((acc, x) => acc + x, 0);
document.querySelector('#sumOfArray').innerText = sum;

/* Output Multiplied by 2 Array */
const doubled = numbers.map((x) => x * 2);
document.querySelector('#multiplied').innerText = doubled;

/* Output Sum of Multiplied by 2 Array */
const doubledSum = numbers.map((x) => x * 2).reduce((acc, x) => acc + x, 0);
document.querySelector('#sumOfMultiplied').innerText = doubledSum;