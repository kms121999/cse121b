// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: 'STC 353',
      enrolled: 26,
      days: 'TTh',
      instructor: 'Bro T'
    },
    {
      sectionNum: 2,
      roomNum: 'STC 347',
      enrolled: 28,
      days: 'TTh',
      instructor: 'Sis A'
    }
  ],
  _updateSection(sectionNum, callback) {
    const selectedSection = this.sections.find((section) => section.sectionNum.toString() === sectionNum);

    if (!selectedSection) return;
    callback(selectedSection);

    displaySections(this.sections);
  },
  enrollStudent(sectionNum) {
    this._updateSection(sectionNum, (section) => section.enrolled++);
  },
  dropStudent(sectionNum) {
    this._updateSection(sectionNum, (section) => section.enrolled--);
  }
};

function displayCourse(course) {
  document.querySelector('#courseName').innerText = course.name;
  document.querySelector('#courseCode').innerText = course.code;
}

function displaySections(sections) {
  const tableBody = document.querySelector('#sections');

  const rows = sections.map((section) => {
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    `;

    return newRow;
  });

  tableBody.innerHTML = '';
  rows.forEach((row) => {
    tableBody.appendChild(row);
  });
}

displayCourse(aCourse);
displaySections(aCourse.sections);

document.querySelector('#enrollStudent').addEventListener('click', ()=> {
  const sectionNum = document.querySelector('#sectionNumber').value;
  aCourse.enrollStudent(sectionNum);
});

document.querySelector('#dropStudent').addEventListener('click', ()=> {
  const sectionNum = document.querySelector('#sectionNumber').value;
  aCourse.dropStudent(sectionNum);
});