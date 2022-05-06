const EmployeeMan = require("./Employee.ts");

class ManagerProto extends EmployeeMan {
  officeNumber: number;
  constructor(name: string, id: number, email: string, officeNumber: number) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getRole() {
    return this.role;
  }
}

module.exports = ManagerProto;
