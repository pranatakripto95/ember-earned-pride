// Ember Earned Pride — One Line of Earned Pride (u-mang-one-line-of-earned-pride-a0138557)
// Writes a single line of quiet, earned pride to /output/entry.txt.
//
// Drafts considered (shortest + sharpest wins — winners are fragments, never explanations):
//   A (80 chars): "She changed one sign, ran the tests, and a week of red turned green at 3 a.m."
//   B (75 chars, PICK): "The build went green at 3 a.m., and he sat there, afraid to touch anything."
//   C (63 chars): "Nine rewrites in, the tenth run passed, and he finally exhaled."
// B wins: the pride lands on the last word ("afraid to touch anything" — a builder
// who fought a red build all night and finally dares not disturb the green one),
// the scene is concrete (3 a.m., one build, one person), and nothing is asserted or
// congratulated — the effort is felt, not explained. C is shorter but "finally exhaled"
// is generic relief; A states its triumph mid-line instead of landing it at the end.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "The build went green at 3 a.m., and he sat there, afraid to touch anything.";

// Revision 2: the gate is now a validateEntry() function. A line of only
// whitespace carries no pride at all, so it is refused outright — the
// entry must hold real content (trim().length > 0) — and it must not be
// padded with leading or trailing whitespace either.
function validateEntry(entry: string): number {
  if (entry.trim().length === 0) throw new Error("entry must not be only whitespace");
  if (entry !== entry.trim()) throw new Error("entry must not have leading or trailing whitespace");
  if (entry.includes("\n")) throw new Error("entry must be a single line");
  const chars = [...entry].length;
  if (chars < 1 || chars > 240) throw new Error(`entry must be 1-240 characters, got ${chars}`);
  return chars;
}

const chars = validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) throw new Error("read-back mismatch");
console.log(`wrote /output/entry.txt (${chars} chars): ${ENTRY}`);
