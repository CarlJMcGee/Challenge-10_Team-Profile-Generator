const EmployeeCon = require("./Employee.ts");

class Manager extends EmployeeCon {
  officeNumber: number;
  role: string;
  constructor(name: string, id: number, email: string, officeNumber: number) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;
