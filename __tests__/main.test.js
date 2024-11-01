const { execSync } = require("child_process");
const packageJson = require("../package.json"); //with { type: "json" };

test("greet command", () => {
  const output = execSync("node index.js").toString();
  expect(output).toMatch(
    "GRAB BOX - WIP - Under Development",
    packageJson.version
  );
});
