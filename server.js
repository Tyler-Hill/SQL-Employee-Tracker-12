// dependencies
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.PW,
    database: process.env.DB,
  },
  console.log(`Connected to database.`)
);

// function to view all departments
function viewAllDepartments() {
  db.query("SELECT * FROM departments", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log(results);
    start();
  });
}

// function to view all roles
function viewRoles() {
  db.query("SELECT * FROM roles", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log(results);
    start();
  });
}

// function to view all employees
function viewEmployees() {
  db.query("SELECT * FROM employees", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log(results);
    start();
  });
}

// function to add a department
function addDepartment() {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "What department would you like to add?",
    })
    .then(function (answer) {
      db.query(
        "INSERT INTO departments SET ?",
        {
          name: answer.department,
        },
        (err) => {
          if (err) throw err;

          console.log("Department added successfully!");
          start();
        }
      );
    });
}

// function to add a role
function addRole() {
  // Query the departments table to get department names and ids
  connection.query("SELECT * FROM departments", (err, departments) => {
    if (err) throw err;
    // Prompt the user for the role information
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "What is the title of the new role?",
        },
        {
          name: "salary",
          type: "input",
          message: "What is the salary of the new role?",
        },
        {
          type: "list",
          name: "department_id",
          message: "Which department does the new role belong to?",
          choices: departments.map((department) => ({
            name: department.name,
            value: department.id,
          })),
        },
      ])
      .then(function (answer) {
        db.query(
          "INSERT INTO roles SET ?",
          {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.department_id,
          },
          (err) => {
            if (err) throw err;

            console.log("Role added successfully!");
            start();
          }
        );
      });
  });
}

// function to add an employee
function addEmployee() {
  // query the roles table to get role titles and ids
  connection.query("SELECT * FROM roles", (err, roles) => {
    if (err) throw err;

    // prompt the user for information about the new employee
    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is the new employee's first name?",
        },
        {
          type: "input",
          name: "last_name",
          message: "What is the new employee's last name?",
        },
        {
          type: "list",
          name: "role_id",
          message: "What is the new employee's role?",
          choices: roles.map((role) => ({
            name: role.title,
            value: role.id,
          })),
        },
        {
          type: "input",
          name: "manager_id",
          message: "What is the new employee's manager's id?",
        },
      ])
      .then((answer) => {
        connection.query(
          "INSERT INTO employees SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id,
          },
          (err) => {
            if (err) throw err;

            console.log("Employee added successfully!");
            start();
          }
        );
      });
  });
}

// function to update an employee's role
function updateEmployeeRole() {
  // query the roles table to get role titles and ids
  connection.query("SELECT * FROM roles", (err, roles) => {
    if (err) throw err;

    // query the employees table to get employee names and ids
    connection.query("SELECT * FROM employees", (err, employees) => {
      if (err) throw err;

      // prompt the user for information about the new employee
      inquirer
        .prompt([
          {
            type: "list",
            name: "employee_id",
            message: "Which employee's role would you like to update?",
            choices: employees.map((employee) => ({
              name: `${employee.first_name} ${employee.last_name}`,
              value: employee.id,
            })),
          },
          {
            type: "list",
            name: "role_id",
            message: "What is the employee's new role?",
            choices: roles.map((role) => ({
              name: role.title,
              value: role.id,
            })),
          },
        ])
        .then((answer) => {
          connection.query("UPDATE employees SET role_id = ? WHERE id = ?", [answer.role_id, answer.employee_id], (err) => {
            if (err) throw err;

            console.log("Employee role updated successfully!");
            start();
          });
        });
    });
  });
}

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"],
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployeeRole();
          break;
        case "Exit":
          console.log("Goodbye!");
          process.exit(0);
        default:
          console.log(`Invalid action: ${answer.action}`);
          start();
          break;
      }
    });
}

// start the application
start();
