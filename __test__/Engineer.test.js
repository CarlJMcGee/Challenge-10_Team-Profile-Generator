const EngineerTest = require("../lib/Engineer.ts");
const randomNumGen = require("../util/random");
let eid = randomNumGen(1000, 9999);
let email = "your@e.mail";
let para = `"Cori", ${eid}, ${email}, "userName"`;
describe("The Engineer Constructor", () => {
  it("creates and engineer obj", () => {
    const engineer = new EngineerTest("Cori", eid, email, "userName");

    expect(engineer.name).toBe("Cori");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("your@e.mail");
    expect(engineer.github).toBe("userName");
  });

  it("gets github username", () => {
    const engineer = new EngineerTest("Cori", eid, email, "userName");

    expect(engineer.getGithub()).toBe("userName");
  });

  it("assigns role as 'Engineer'", () => {
    const engineer = new EngineerTest("Cori", eid, email, "userName");

    expect(engineer.getRole()).toBe("Engineer");
  });
});
