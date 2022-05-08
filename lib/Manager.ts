const EmployeeMan = require("./Employee.ts");

class Manager extends EmployeeMan {
  officeNumber: number;
  constructor(name: string, id: number, email: string, officeNumber: number) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getPhone(): number {
    return this.officeNumber;
  }
}

module.exports = Manager;
