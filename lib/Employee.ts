class Employee {
  name: string;
  id: number;
  email: string;
  role: string;
  constructor(name: string, id: number, email: string) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName(): string {
    return `${this.name}`;
  }
  getID(): number {
    return this.id;
  }
  getRole(): string {
    return this.role;
  }
}

module.exports = Employee;
