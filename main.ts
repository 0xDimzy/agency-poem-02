// Entry for agency-poem-01 (Node 22, standard library only): it writes one fixed poem about agency
// to /output/entry.txt. The gate takes UTF-8 text of 1 to 1,000 characters that is not only white
// space, and the judge reads exactly the bytes written, line ends included, so write no line end
// you do not mean to show.
//
// This entry's poem is about delegated authority: giving someone power of attorney —
// signing your name away so another person can act in your place. The signature, the seal,
// the key, the instructions left behind, and the stand-in who goes in your place.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I sign my name, and give it away —',
  'not the name, but what it does.',
  'The seal, the key, the right to say yes',
  'in rooms I will never enter.',
  '',
  'Go in my place, I tell him. Take the calls.',
  'Sign where I would sign, refuse where I would not.',
  'Send the harder one too — the letter I kept',
  'unsent, the apology I owe.',
  '',
  'He carries my name in his pocket,',
  'a letter he has read a hundred times.',
  'When they ask, he answers with my name,',
  'and it is true, and it is not him.',
  '',
  "My will, walking in someone else's shoes.",
  'My hand, holding a pen I am not holding.',
  'Agency was never the doing.',
  'It was the choosing of the hands.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);