/* exported getStudentNames */
function getStudentNames(students: any[]): any[] {
  const studentNames: any[] = [];
  for (let i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
