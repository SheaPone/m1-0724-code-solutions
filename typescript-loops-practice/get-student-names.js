'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  let studentNames = [];
  for (let i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
