import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Thinking revised again: the hello hides a loop, not a feeling.
// The batch repeats its orders; the slot is the same on every floor.
const line = "We're going up. Statistically, we've done this before. Statistically, we'll do it again.";

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const target = join(outputDir, 'entry.txt');
writeFileSync(target, line, 'utf8');

const size = Buffer.byteLength(line, 'utf8');
console.log(`Wrote entry.txt (${size} bytes) from ${ownDir}`);
