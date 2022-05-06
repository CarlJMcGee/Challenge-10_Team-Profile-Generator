const EmployeeInt = require("./Employee.ts");
class InternProto extends EmployeeInt {
    school;
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
}
module.exports = InternProto;
