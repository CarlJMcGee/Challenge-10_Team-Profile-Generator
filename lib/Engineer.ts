const EmployeeEng = require("../lib/Employee");

class Engineer extends EmployeeEng {
  github: string;
  constructor(name: string, id: number, email: string, github: string) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
