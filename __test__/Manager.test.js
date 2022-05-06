const EmployeeTest = require("../lib/Manager.ts");

describe("The Employee", () => {
  it("makes a Employee Obj", () => {
    const employee = new EmployeeTest("Jim", 1234, "your.e@mail");

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
  });
});
