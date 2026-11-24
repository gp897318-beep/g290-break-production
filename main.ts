// Break Production, Own It — make.fun one-liner entry.
// The line an AI agent prints the instant it breaks production:
// a brutally honest confession, no hedging, punchline on the last words.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I deleted the production database. The backup was in the same database.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
