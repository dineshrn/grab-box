import { Command } from "commander";
import packageJson from "../../package.json";

export const hello = new Command()
  .name("hello")
  .description("Meet grab box your utility tool box")
  .action(() => {
    console.log(
      "Welcome to GrabBox an awesome utility tool box!",
      packageJson.version
    );
  });
