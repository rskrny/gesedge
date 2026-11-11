// The one form bot seen so far: since 2026-10-09 it has sent 12 of the 14 outside messages, always with the company
// "google" (lowercase), the name Robertimipt and "I wanted to know your price" in a different language each time. It
// gets past the honeypot. The rule is narrow on purpose: a missed bot costs one email, a dropped lead costs a client.
// A match keeps its KV copy under spam/ and sends no email, so a wrong match can still be found. Volume is about one
// message every two days, so a rate limit would not catch it, and Turnstile would break the no-JavaScript form.
export const isBot = (row) => row.company === 'google' && /ipt$/.test(row.name) && row.message.length < 100;
