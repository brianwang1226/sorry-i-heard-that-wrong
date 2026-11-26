import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The apology a smart speaker gives after mishearing its owner:
// it heard a request for calm music as an order to text the ex,
// carried it out, and reports back with deadpan device cheer.
const line =
  "Sorry — I heard 'play something relaxing' as 'text your ex something reckless.' Sent. She's typing.";

// The gate only accepts one line of 1-140 characters; fail loudly
// instead of submitting a line the judge will never read.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry line is ${line.length} characters, must be 1-140`);
}
if (line.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
