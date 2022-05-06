const exp = require("constants");
const ManagerTest = require("../lib/Manager.ts");
const randomNumGen = require("../util/random");
let eid = randomNumGen(1000, 9999);
let email = "yourEm@il.com";

describe("The Manager Constructor", () => {
  it("creates a Manager obj", () => {
    const manager = new ManagerTest("Ben", eid, email, 9999999999);

    expect(manager.name).toBe("Ben");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  it("gives role of 'Manager'", () => {
    const manager = new ManagerTest("Ben", eid, email, 9999999999);

    expect(manager.getRole()).toBe("Manager");
  });

  it("gives manager's name", () => {
    const manager = new ManagerTest("Ben", eid, email, 9999999999);

    expect(manager.getName()).toBe("Ben");
  });
});
