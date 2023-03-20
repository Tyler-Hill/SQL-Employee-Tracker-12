USE employeeCMS_db;

INSERT INTO departments (department_name) VALUES
('Sales'),
('Marketing'),
('Engineering'),
('Finance'),
('Human Resources');

INSERT INTO roles (job_title, salary, department_id) VALUES
('Sales Manager', 90000.00, 1),
('Sales Representative', 50000.00, 1),
('Marketing Manager', 85000.00, 2),
('Marketing Coordinator', 45000.00, 2),
('Software Engineer', 100000.00, 3),
('Database Administrator', 85000.00, 3),
('Financial Analyst', 75000.00, 4),
('Accountant', 65000.00, 4),
('Human Resources Manager', 90000.00, 5),
('HR Coordinator', 50000.00, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Mark', 'Johnson', 3, NULL),
('Sara', 'Gonzalez', 4, 3),
('Emily', 'Davis', 5, NULL),
('David', 'Lee', 6, 5),
('Michael', 'Brown', 7, NULL),
('Laura', 'Garcia', 8, 7),
('Robert', 'Taylor', 9, NULL),
('Sarah', 'Wilson', 10, 9);