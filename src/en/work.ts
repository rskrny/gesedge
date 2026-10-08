// The three live systems (copy v3, .ai/deliverables/redo-copy-en.md). Facts: private case-facts sheet.
// Client names stay off until each client approves in writing (DESIGN.md §8). The repo is public, so a
// name goes into `name` only after that yes is on file; until then the descriptor in `short` is shown.
export const work = [
  {
    id: 'email-triage',
    title: 'Email triage',
    name: null as string | null,
    short: 'US electronics refurbishment group',
    meta: 'Electronics refurbishment · United States · live since July 2026',
    image: { src: '/images/work/email-triage.webp', alt: 'Executive dashboard of the email triage system, with client data blurred' },
    home: 'A shared mailbox used to be this team’s to-do list. Now each conversation becomes a ticket with an owner, a status, and a target date, sorted into one of 29 categories. It classifies mail correctly more than 90% of the time, and more than 2,100 automated tests run before any change ships.',
    before: 'Requests from one of the group’s business customers arrived in a shared mailbox, and the mailbox was the to-do list. Sorting it took staff two to six hours a day.',
    built: 'A mail desk inside the client’s Microsoft account. It turns each conversation into a ticket with an owner, a status, and a target date, sorts it into one of 29 categories, and routes it. Staff reply from the ticket and sign in with their Microsoft accounts. Each person gets a dashboard, and so do the executives.',
    result: 'It classifies mail correctly more than 90% of the time. We audited about 55 client requests and found one that had been missed, and it shipped the same day. More than 2,100 automated tests run before any change goes live. Automatic replies run in shadow mode until the client switches them on.',
  },
  {
    id: 'owner-dashboard',
    title: 'Owner’s dashboard',
    name: null as string | null,
    short: 'New England auction firm',
    meta: 'Auctioneers · New England · live since September 2026',
    image: { src: '/images/work/owner-dashboard.webp', alt: 'Three-week auction calendar from the owner’s dashboard, with client data blurred' },
    home: 'A private site, rebuilt every night, with a three-week auction calendar for both of the firm’s brands, sale-day sheets, and a one-page activity report for each listing. It reads public pages only and never touches the web vendor’s systems.',
    built: 'A private site behind a sign-in, rebuilt every night: a three-week calendar for both of the firm’s brands with a log of every change, sale-day sheets, a one-page activity report for each listing from web analytics, a marketing page, QR codes, and a view for the office TV. It reads public pages only.',
    result: 'The first nightly run produced 84 listings and 86 reports. It went live in September, so there are no business results to report yet.',
  },
  {
    id: 'booking-system',
    title: 'Booking system',
    name: null as string | null,
    short: 'sportfishing charter, Cape Cod',
    meta: 'Sportfishing charter · Cape Cod, Massachusetts · live since March 2026',
    image: null as { src: string; alt: string } | null, // ponytail: public site would identify the client; add once named
    home: 'A booking site with a live availability calendar, deposits, and an app that alerts the captains. The database rejects any booking that overlaps another. We built it free for friends. Real bookings came in on launch day, and the clients behind the first two systems on this page found us through it.',
    built: 'A public site with a live availability calendar and booking requests, deposits by Venmo, Zelle, or Square, and an app that sends the three captains push and email alerts. The database rejects any booking that overlaps another.',
    result: 'We built it free for friends. Real bookings came in on launch day. The clients behind the email triage and the dashboard found us through it.',
  },
];

export const who = (w: (typeof work)[number]) => w.name ?? w.short;
