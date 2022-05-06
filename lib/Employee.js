function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
}
Employee.prototype.getName = function () {
    return `${this.name}`;
};
Employee.prototype.getID = function () {
    return this.id;
};
Employee.prototype.getRole = function () {
    return this.role;
};
module.exports = Employee;
