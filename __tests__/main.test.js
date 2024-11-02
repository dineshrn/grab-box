const { execSync } = require("child_process");
const packageJson = require("../package.json"); //with { type: "json" };

test("greet command", () => {
  const output = execSync("node ./dist/index.js hello").toString();
  expect(output).toMatch(
    "Welcome to GrabBox an awesome utility tool box!",
    packageJson.version
  );
});
