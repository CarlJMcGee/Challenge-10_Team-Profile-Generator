const fs = require("fs");
const create = function (html) {
    fs.writeFileSync("./dist/index.html", html);
};
module.exports = create;
