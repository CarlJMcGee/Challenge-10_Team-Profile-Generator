// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const createTeam = require("./src/createTeam");
const generateHTML = require("./src/pageTemplate");

const promptManager = () => {
  console.log(`
    ==========
Welcome to Team Manager!
    ==========
    `);

  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Enter the manager's name (REQURED): ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter manager's name!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "managerID",
      message: "Enter manager's employee ID (REQURED): ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter manager's ID!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "managerEmail",
      message: "Enter manager's Email (REQURED): ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter manager's email!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "managerPhone",
      message: "Enter manager's office Phone Number (REQURED): ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter manager's email!");
          return false;
        }
      },
    },
  ]);
};

const promptEmployee = function (teamData) {
  if (!teamData.employeesData) {
    teamData.employeesData = [];
  }

  return inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Would you like to add an employee to the team?",
        choices: ["Engineer", "Intern", "No, finalize my team"],
      },

      // engineer
      {
        type: "input",
        name: "engName",
        message: "Enter engineer's name: (REQUIRED)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
        when: ({ employeeType }) => {
          if (employeeType === "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },

      {
        type: "input",
        name: "engID",
        message: "Enter engineer's employee ID: (REQUIRED)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
        when: ({ employeeType }) => {
          if (employeeType === "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },

      {
        type: "input",
        name: "engEmail",
        message: "Enter engineer's email: (REQUIRED)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
        when: ({ employeeType }) => {
          if (employeeType === "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },

      {
        type: "input",
        name: "engGithub",
        message: "Enter engineer's Github username: (REQUIRED)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
        when: ({ employeeType }) => {
          if (employeeType === "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },

      // Intern
      {
        type: "input",
        name: "intName",
        message: "Enter intern's name: (REQUIRED)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
        when: ({ employeeType }) => {
          if (employeeType === "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },

      {
        type: "input",
        name: "intID",
        message: "Enter Intern's employee ID: (REQUIRED)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
        when: ({ employeeType }) => {
          if (employeeType === "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },

      {
        type: "input",
        name: "intEmail",
        message: "Enter Intern's email: (REQUIRED)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
        when: ({ employeeType }) => {
          if (employeeType === "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },

      {
        type: "input",
        name: "intSchool",
        message: "Enter Intern's school: (REQUIRED)",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
        when: ({ employeeType }) => {
          if (employeeType === "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((employee) => {
      teamData.employeesData.push(employee);
      if (employee.employeeType !== "No, finalize my team") {
        return promptEmployee(teamData);
      } else {
        return teamData;
      }
    });
};

promptManager()
  .then(promptEmployee)
  .then((teamData) => {
    console.log(teamData);
    return createTeam(teamData);
  })
  .then((teamObj) => {
    console.log(teamObj);

    // return generateHTML(teamObj);
  });
