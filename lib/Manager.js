const EmployeeCon = require("./Employee.ts");
class Manager extends EmployeeCon {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getRole() {
        return this.role;
    }
}
module.exports = Manager;
