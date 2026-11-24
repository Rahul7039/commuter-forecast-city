import { mkdirSync, writeFileSync } from "node:fs";

// One line of weather forecast (114 characters) for Bumbershoot Falls,
// a city that does not exist. Written verbatim to /output/entry.txt.
const LINE =
  "Drizzle in Bumbershoot Falls: brollies up, frogs out, and the 7:42 is still on time for once \u2014 miracles do happen.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
