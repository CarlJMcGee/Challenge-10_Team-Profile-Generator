const generateHTML = (teamData) => {
    let [manager, employees] = teamData;
    const createCards = function (employees) {
        return `
    ${employees
            .filter(({ role }) => role === "Engineer")
            .map((employee) => {
            return `
                <div class="box column is-2 m-4 p-0">
          <div class="card">
            <div class="card-header columns has-background-info m-0 is-multiline">
              <div class="card-header-title column pb-0 is-full">${employee.getName()}</div>
              <div class="card-header-title column pt-0 is-full">${employee.getRole()}</div>
            </div>
            <div class="card-content p-0 has-background-link-light">
              <ul class="m-0">
                <li
                  style="border-bottom: 0.05rem solid #485fc7"
                  class="is-size-7 p-3"
                >
                  ID: ${employee.getID()}
                </li>
                <li
                  style="border-bottom: 0.05rem solid #485fc7"
                  class="is-size-7 p-3"
                >
                  Email: ${employee.getEmail()}
                </li>
                <li class="is-size-7 p-3">Github: ${employee.getGithub()}</li>
              </ul>
            </div>
          </div>
        </div>

        `;
        })
            .join("")}

    ${employees
            .filter(({ role }) => role === "Intern")
            .map((employee) => {
            return `
                <div class="box column is-2 m-4 p-0">
          <div class="card">
            <div class="card-header columns has-background-info m-0 is-multiline">
              <div class="card-header-title column pb-0 is-full">${employee.getName()}</div>
              <div class="card-header-title column pt-0 is-full">${employee.getRole()}</div>
            </div>
            <div class="card-content p-0 has-background-link-light">
              <ul class="m-0">
                <li
                  style="border-bottom: 0.05rem solid #485fc7"
                  class="is-size-7 p-3"
                >
                  ID: ${employee.getID()}
                </li>
                <li
                  style="border-bottom: 0.05rem solid #485fc7"
                  class="is-size-7 p-3"
                >
                  Email: ${employee.getEmail()}
                </li>
                <li class="is-size-7 p-3">School: ${employee.getSchool()}</li>
              </ul>
            </div>
          </div>
        </div>

        `;
        })
            .join("")}
    `;
    };
    return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Manager</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
  </head>
  <body>
    <header class="columns">
      <div class="column is-full has-background-success p-4">
        <h1 class="title has-text-centered p-4">Team Manager</h1>
      </div>
    </header>
    <br />
    <section class="columns is-centered">
      <div class="column columns mx-3 is-11 has-background-link">
        <div class="column columns is-half is-multiline">
          <h3
            class="column is-full has-text-centered pb-0 mb-0 has-text-white title"
          >
            ${manager.getName()}
          </h3>
          <h3
            class="column is-full has-text-centered pt-0 mt-0 has-text-white subtitle"
          >
            Manager
          </h3>
        </div>
        <div class="column has-text-black is-4 px-0">
          <ul class="has-background-link-light">
            <li style="border-bottom: 0.05rem solid #485fc7" class="pl-2">
              ID: ${manager.getID()}
            </li>
            <li style="border-bottom: 0.05rem solid #485fc7" class="pl-2">
              Email: ${manager.getEmail()}
            </li>
            <li class="pl-2">Office Number: ${manager.getPhone()}</li>
          </ul>
        </div>
      </div>
    </section>
    <br />
    <main>
      <div class="columns is-centered is-multiline">
        ${createCards(employees)}
      </div>
    </main>
  </body>
</html>

  `;
};
module.exports = generateHTML;
