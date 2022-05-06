const EngineerTest = require("../lib/Engineer.ts");
const randomNumGen = require("../util/random");
let eid = randomNumGen(1000, 9999);
let email = "your@e.mail";
describe("The Engineer Constructor", () => {
  it("creates and engineer obj", () => {
    const engineer = new EngineerTest("Cori", eid, email, "userName");

    expect(engineer.name).toBe("Cori");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("your@eid.mail");
    expect(engineer.github).toBe("userName");
  });
});
