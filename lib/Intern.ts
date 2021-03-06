const EmployeeInt = require("./Employee.ts");

class Intern extends EmployeeInt {
  school: string;
  constructor(name: string, id: number, email: string, school: string) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
