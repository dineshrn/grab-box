import { Command } from "commander";
import { commands } from "./commands/index.js";
import packageJson from "../package.json";

async function main() {
  const cli = new Command()
    .name("grabbox")
    .description("A tool box for your utilities")
    .version(packageJson.version || "1.0.0");

  // Load all predefined commands
  commands.forEach((command) => cli.addCommand(command));

  // Parse configured cli
  cli.parse();
}

main();
