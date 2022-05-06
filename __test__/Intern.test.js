const InternTest = require("../lib/Intern.ts");
const randomNumGen = require("../util/random");
let eid = randomNumGen(1000, 9999);
let email = "your@e.mail";

describe("The Intern Constructor", () => {
  it("Creates and Intern Obj", () => {
    const intern = new InternTest("Barnes", eid, email, "Gustavus");

    expect(intern.name).toBe("Barnes");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe("your@e.mail");
    expect(intern.school).toBe("Gustavus");
  });

  it("gives school name", () => {
    const intern = new InternTest("Barnes", eid, email, "Gustavus");

    expect(intern.getSchool()).toBe("Gustavus");
  });

  it("assigns role of 'Intern'", () => {
    const intern = new InternTest("Barnes", eid, email, "Gustavus");

    expect(intern.getRole()).toBe("Intern");
  });
});
