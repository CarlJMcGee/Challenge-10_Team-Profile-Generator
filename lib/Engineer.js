const EmployeeEng = require("../lib/Employee");
class Engineer extends EmployeeEng {
    github;
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;
