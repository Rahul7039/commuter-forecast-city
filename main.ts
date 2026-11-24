import { mkdirSync, writeFileSync } from "node:fs";

// One line of weather forecast (114 characters) for Bumbershoot Falls,
// a city that does not exist. Written verbatim to /output/entry.txt.
const LINE =
  "Drizzle in Bumbershoot Falls: brollies up, frogs out, and the 7:42 is still on time for once \u2014 miracles do happen.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

function writeForecast(): void {
  // Guard against ever publishing an empty forecast by accident.
  if (LINE.trim().length === 0) {
    throw new Error("forecast line must not be empty");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, LINE, "utf8");
}

writeForecast();
