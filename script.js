// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
let employeesArray = [];

// Collect employee data
const collectEmployees = function () {
  const options = ["collectEmployees"];
  const employees = [];
  let continueAdding = true;
  while (continueAdding) {
    const employee = {};
    employee.firstName = prompt("Enter the employee's first name:");
    employee.lastName = prompt("Enter the employee's last name:");
    employee.salary = parseFloat(prompt("Enter the employee's salary:"));
    employees.push(employee);

    const userInput = confirm("Do you want to continue?");
    continueAdding = userInput === true;
  }

  return employees;
};

/* let employeesArray = [];
let employee1 = {
  firstName: "firstName",
  lastName: "lastName",
  salary: 0,
};

let employee2 = {
  firstName: "firstName",
  lastName: "lastName",
  age: 0,
};

employeesArray.push(employee1);
employeesArray.push(employee2); */

/* const employeeData = collectEmployees();
console.log(employeeData);

console.log("Collected Employee Data:");
employeeData.forEach((employee, i) => {
  console.log(`Employee ${i + 1}:
      First Name: ${employee.firstName}
      Last Name: ${employee.lastName}
      Salary: $${employee.salary}`);
}); */

const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  employeesArray.forEach((employee) => {
    totalSalary += employee.salary;
  });
const averageSalary = totalSalary / employeesArray.length;
/* console.log(`Average Salary: ${averageSalary}`); */
console.log(`Number of Employees: ${employeesArray.length}`);
console.log(
  `The average salary between all our employees is: ${averageSalary}`
);
};
// Select a random employee
const getRandomEmployee = function (employeesArray) {
  console.log(employeesArray)
  // TODO: Select and display a random employee
  if (employeesArray.length === 0) {
    console.log("No employees found.");
  }

  const index = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[index];
  console.log(
    `Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
    console.log(
      `Congratulations! ${randomEmployee.firstName}, you have been chosen for a $1000 raise`
    );
};

/* getRandomEmployee(collectEmployees); */


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
