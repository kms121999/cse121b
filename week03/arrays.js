const arr = ['one', 'two', 'three'];

const new_array = arr.map(function callback(val) {
  return `<li>${val}</li>`
})

const listElement = document.getElementById("myList");

console.log(listElement);

listElement.innerHTML = new_array.join(' ');



const lgrades = ['A', 'B', 'A'];

function getGPA(letterGrade) {
  switch (letterGrade) {
    case 'A':
      return 4;
    case 'B':
      return 3;
    case 'C':
      return 2
    case 'D':
      return 1;
    default:
      return 0;
  }
}

const GPAs = lgrades.map(getGPA);
console.log(GPAs);

const totalGPA = GPAs.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(totalGPA);
console.log(totalGPA/GPAs.length);
