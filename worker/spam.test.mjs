// node worker/spam.test.mjs  — replays every outside message the live form received up to 2026-11-07.
import assert from 'node:assert/strict';
import { isBot } from './spam.js';

const bot = (message) => ({ name: 'Robertimipt', company: 'google', message });
const caught = [
  'Ciao, volevo sapere il tuo prezzo.',
  'Ndewo, achọrọ m ịmara ọnụahịa gị.',
  'Hæ, ég vildi vita verð þitt.',
  'Dia duit, theastaigh uaim do phraghas a fháil.',
  'Hallo, ek wou jou prys ken.',
  'Salam, qiymətinizi bilmək istədim.',
  'Aloha, makemake wau eʻike i kāu kumukūʻai.',
  'Hi, I wanted to know your price.',
  'Salam, qiymətinizi bilmək istədim.',
  'Hej, jeg ønskede at kende din pris.',
  'Hæ, ég vildi vita verð þitt.',
  'Sveiki, es gribēju zināt savu cenu.',
];
assert.equal(caught.length, 12);
for (const m of caught) assert.equal(isBot(bot(m)), true, m);

const kept = [
  { name: 'Joanna Riggs', company: 'Christin Xiong', message: 'Hi, I just visited gesedge.com and wondered about a video.' },
  { name: 'Test', company: 'Test Company', message: 'Test' },
  { name: 'Someone', company: null, message: 'Hi, I wanted to know your price.' },
  { name: 'Someone', company: 'Google', message: 'Hi, I wanted to know your price.' },
  { name: 'Someone', company: 'google', message: 'Please quote 10 seats' },
  { name: 'Robertimipt', company: 'google', message: 'x'.repeat(100) },
];
for (const r of kept) assert.equal(isBot(r), false, r.name);
console.log('spam: all pass');
