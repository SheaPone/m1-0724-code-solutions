'use strict';
const business = {
  opens: '7am',
  closes: '10pm',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'TH', 'F'],
  employees: {
    shawn: {
      position: 'Cashier',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    shea: {
      position: 'Chef',
      daysOfWeekWorking: ['M', 'T', 'F'],
    },
    jane: {
      position: 'Manager',
      daysOfWeekWorking: ['M', 'W', 'TH', 'F'],
    },
    steve: {
      position: 'Cashier',
      daysOfWeekWorking: ['M', 'T', 'TH', 'F'],
    },
  },
};
function addWeekends() {
  business.daysOpen = [...business.daysOpen, 'S', 'SU'];
  for (const employeeName in business.employees) {
    business.employees[employeeName].daysOfWeekWorking = [
      ...business.employees[employeeName].daysOfWeekWorking,
      'S',
      'SU',
    ];
  }
}
const jobTitles = ['chef', 'cashier', 'HR', 'supervisor', 'customer service'];
async function addEmployees() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const employees = await response.json();
    let additionalEmployees = employees.splice(0, 4);
    for (let i = 0; i < additionalEmployees.length; i++) {
      delete additionalEmployees[i].email;
      delete additionalEmployees[i].id;
      delete additionalEmployees[i].company;
      delete additionalEmployees[i].address;
      delete additionalEmployees[i].phone;
      delete additionalEmployees[i].username;
      delete additionalEmployees[i].website;
      business.employees[additionalEmployees[i].name] = additionalEmployees[i];
      delete additionalEmployees[i].name;
      let randomWorkDay = Math.floor(Math.random() * 5 + 1);
      if (randomWorkDay === 1) {
        additionalEmployees[i].daysOfWeekWorking = ['M', 'S', 'SU'];
        additionalEmployees[i].position = jobTitles[0];
      } else if (randomWorkDay === 2) {
        additionalEmployees[i].daysOfWeekWorking = ['M', 'T', 'S', 'SU'];
        additionalEmployees[i].position = jobTitles[1];
      } else if (randomWorkDay === 3) {
        additionalEmployees[i].daysOfWeekWorking = ['M', 'T', 'W', 'SU'];
        additionalEmployees[i].position = jobTitles[2];
      } else if (randomWorkDay === 4) {
        additionalEmployees[i].daysOfWeekWorking = [
          'M',
          'T',
          'W',
          'TH',
          'S',
          'SU',
        ];
        additionalEmployees[i].position = jobTitles[3];
      } else if (randomWorkDay === 5) {
        additionalEmployees[i].daysOfWeekWorking = [
          'M',
          'T',
          'W',
          'TH',
          'F',
          'S',
          'SU',
        ];
        additionalEmployees[i].position = jobTitles[4];
      }
    }
    for (const key in business.employees)
      if (business.employees[key].daysOfWeekWorking.length >= 5) {
        business.employees[key].fullTime = true;
      } else {
        business.employees[key].fullTime = false;
      }
    business.totalEmployees = Object.keys(business.employees).length;
  } catch (error) {
    console.log('Error:', error);
  }
}
addEmployees();
function deleteEmployee(employeeName) {
  if (business.employees[employeeName]) {
    delete business.employees[employeeName];
    business.totalEmployees = Object.keys(business.employees).length;
  }
}
document.addEventListener('DOMContentLoaded', function () {
  addWeekends();
  addEmployees();
  deleteEmployee('jane');
});
console.log(business);
