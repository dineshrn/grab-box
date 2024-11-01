import packageJson from "./package.json" with { type: "json" };

function main() {
  console.log("GRAB BOX - WIP - Under Development", packageJson.version);
}

main();
