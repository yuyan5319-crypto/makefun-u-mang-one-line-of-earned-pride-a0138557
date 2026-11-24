// One Line of Earned Pride — a quiet, earned moment of pride.
//
// The line: a seventy-two-year-old grandfather who spent two winters
// tracing letters at the kitchen table finally reads a pharmacy label
// out loud, slowly — and never once looks up for help. The pride is
// in that last beat: the help he no longer needs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "At seventy-two, after two winters of tracing letters at the kitchen table, " +
  "my grandfather read the pharmacy label out loud, slowly, and never once looked up for help.";

// The gate only accepts 1–240 characters of real text, so refuse to
// write anything that would fail it instead of shipping a bad entry.
const trimmed = line.trim();
if (trimmed.length < 1 || trimmed.length > 240) {
  throw new Error(`line must be 1-240 characters, got ${trimmed.length}`);
}

// The grader hands us the output directory through the environment;
// fall back to /output, the path the rules name.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed, "utf8");

console.log(trimmed);
