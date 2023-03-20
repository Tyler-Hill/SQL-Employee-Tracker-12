## SQL Employee Tracker

  <img src="https://img.shields.io/badge/license-MIT-blue.svg">
   
  
  ## License 
  
  This project is licensed under MIT;
  
  ## Description
  This is a command line application for managing employees in a company. It allows you to view, add, update, and delete employees, roles, and departments.
  
  # Table of Contents
   * [Installaton](#installation)
   * [Usage](#usage)
   * [Contribution](#contribution)
   * [Tests](#tests)
  * [License](#license)

## Installation

To use this application, you will need to have Node.js and MySQL installed on your machine. Once you have those installed, you can clone the repository from GitHub:

git clone https://github.com/Tyler-Hill/SQL-Employee-Tracker-12.git

Then navigate to the project directory and install the required dependencies with npm install.

You will also need to set up a MySQL database with the appropriate tables. The SQL schema is included in the db/schema.sql file, and you can seed the database with some sample data using the db/seeds.sql file.

Finally, you will need to create a .env file in the root directory of the project. This file should contain the following:

DB_HOST=localhost
DB_PORT=3306
DB_USER=your-mysql-username
DB_PASSWORD=your-mysql-password
DB_NAME=employeeCMS_db

Replace your-mysql-username and your-mysql-password with your MySQL credentials, and employee_management_db with the name of your database.

## Usage

To start the application, run npm start in the terminal. You will be presented with a series of prompts that allow you to view, add, update, and delete employees, roles, and departments. Use the arrow keys to navigate the menu, and press Enter to select an option.

## Video of the application in use

https://drive.google.com/file/d/147HrA3T3f6aPt-J9WTIoKwV4SkpqjNoq/view

## Contributing

This application was developed as a learning exercise, and is not actively maintained. However, if you would like to contribute to the project, feel free to fork the repository and submit a pull request.

## Questions

For more details or any questions, please contact me at hilltyler49@gmail.com
