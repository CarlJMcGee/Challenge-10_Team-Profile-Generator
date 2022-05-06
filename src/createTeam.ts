const ManagerClass = require("../lib/Manager");
const EngineerClass = require("../lib/Engineer");
const InternClass = require("../lib/Intern");

module.exports = function ({ employeesData, ...managerInfo }): object[] {
  const manager = new ManagerClass(
    managerInfo.managerName,
    managerInfo.managerID,
    managerInfo.managerEmail,
    managerInfo.managerPhone
  );
  const employees = employeesData.map((employee) => {
    switch (employee.employeeType) {
      case "Engineer":
        return new EngineerClass(
          employee.engName,
          employee.engID,
          employee.engEmail,
          employee.engGithub
        );
        break;

      case "Intern":
        return new InternClass(
          employee.intName,
          employee.intID,
          employee.intEmail,
          employee.intSchool
        );
        break;
    }
  });
  const team = [manager, employees];
  return team;
};
