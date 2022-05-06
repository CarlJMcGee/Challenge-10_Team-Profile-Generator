const { execPath } = require("process");
const EmployeeTest = require("../lib/Employee.ts");
const randomNumGen = require("../util/random");
let employeeID = randomNumGen(1000, 9999);

describe("The Employee conrtuctor", () => {
  it("makes a Employee Obj", () => {
    const employee = new EmployeeTest("Jim", 1234, "your.e@mail");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

    expect(employee.name).toBe("Jim");
    expect(employee.id).toBe(1234);
    expect(employee.email).toBe("your.e@mail");
  });

  it("displays employee name", () => {
    const employee = new EmployeeTest(
      "Dan",
      randomNumGen(1000, 9999),
      "email@email.com"
    );

    expect(employee.getName()).toBe("Dan");
  });

  it("displays employee id", () => {
    const employee = new EmployeeTest("Dan", randomNumGen(1000, 9999), "email");

    expect(employee.getID()).toEqual(expect.any(Number));
  });

  it("displays employee role", () => {
    const employee = new EmployeeTest("Dan", employeeID, "email");

    expect(employee.getRole()).toBe("Employee");
  });
});
