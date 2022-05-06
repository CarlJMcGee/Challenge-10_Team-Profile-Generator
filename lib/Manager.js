const EmployeeMan = require("./Employee.ts");
class ManagerProto extends EmployeeMan {
    officeNumber;
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getRole() {
        return this.role;
    }
}
module.exports = ManagerProto;
