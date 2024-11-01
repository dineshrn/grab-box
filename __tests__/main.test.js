const { execSync } = require("child_process");

test("greet command", () => {
  const output = execSync("node index.js").toString();
  expect(output).toMatch("GRAB BOX - WIP - Under Development");
});
