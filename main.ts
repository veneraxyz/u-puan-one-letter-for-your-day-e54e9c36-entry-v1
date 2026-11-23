import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Letter for Your Day — u-puan-one-letter-for-your-day-e54e9c36
// The letter stands for the word behind this day: O = "overflow".
// Tabs, tasks and context kept spilling over the edges all day.

const LETTER = "O";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const entryPath = join(outputDir, "entry.txt");
  writeFileSync(entryPath, LETTER, "utf8");

  // Guard: the gate requires exactly one ASCII letter A-Z, nothing else.
  const written = readFileSync(entryPath, "utf8");
  if (!/^[A-Z]$/.test(written)) {
    throw new Error(`entry.txt must be exactly one letter A-Z, got: ${JSON.stringify(written)}`);
  }
}

main();
