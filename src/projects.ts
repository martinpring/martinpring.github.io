// Work shown in the CRT strip on the home page.
// To use a real screenshot instead of the drawn illustration, put the image in
// public/images/work/ and set `image: '/images/work/<file>'` on the project.
export type Screen = 'quote' | 'status' | 'integration' | 'departures' | 'lab' | 'story';

/** A paragraph, or a titled bullet list. */
export type Block = string | { heading: string; items: string[] };

export interface Project {
  id: string;
  name: string;
  role: string;
  summary: string;
  /** Longer text for the detail dialog; falls back to `summary`. */
  body?: Block[];
  stack: string[];
  href?: string;
  linkLabel?: string;
  screen: Screen;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'tradesnap',
    name: 'Tradesnap',
    role: 'Co-founder',
    summary: 'Tradesnap is the future of quotes and invoices for the skilled trades.',
    body: [
      'Tradesnap is the future of quotes and invoices for the skilled trades.',
      'You didn\u2019t learn a trade to spend your evenings at the kitchen table writing quotes. With Tradesnap you describe the job in your own words, straight from your phone, and get a complete quote back in seconds.',
      {
        heading: 'How it works:',
        items: [
          'Describe the job \u2013 Tradesnap builds the line items, with labour and materials kept apart',
          'Send the quote as a link by text or email \u2013 your customer approves it on their phone, and you see it in the app as soon as they say yes',
          'Turn an approved quote into an invoice in one tap, and download any document as a PDF',
        ],
      },
      'You stay in control: review and adjust every line before anything is sent.',
      'Less paperwork. More paid work.',
      'Built in Sweden, together with tradespeople.',
    ],
    stack: ['Mobile', 'AI', 'Quotes & invoices'],
    href: 'https://tradesnaphq.com/',
    linkLabel: 'visit tradesnaphq.com',
    screen: 'quote',
  },
  {
    id: 'real-logic',
    name: 'Real Logic',
    role: 'Founder & CEO',
    summary:
      'Resilient distributed systems for healthcare, transportation and logistics, built for industries that can’t afford downtime.',
    stack: ['Java', 'Spring Boot', 'Kubernetes', 'OpenShift'],
    screen: 'status',
  },
  {
    id: 'inera',
    name: 'Inera',
    role: 'Consultant',
    summary:
      'Long-term work on the services behind 1177, Sweden’s national e-health platform. Integrations over the national service platform (NTjP), FHIR and HL7.',
    stack: ['NTjP', 'FHIR', 'HL7'],
    screen: 'integration',
  },
  {
    id: 'samtrafiken',
    name: 'Samtrafiken',
    role: 'Consultant',
    summary: 'Integration middleware for Swedish public transport.',
    stack: ['Middleware', 'Public transport'],
    screen: 'departures',
  },
  {
    id: 'nordic-medtest',
    name: 'Nordic Medtest',
    role: 'Consultant',
    summary: 'Backend development for a healthcare client.',
    stack: ['Healthcare'],
    screen: 'lab',
  },
  {
    id: 'story',
    name: 'Story',
    role: 'Writing',
    summary: 'Notes from building software, products and companies.',
    stack: ['/story'],
    href: '/story',
    linkLabel: 'read the stories',
    screen: 'story',
  },
];

// Logo tiles in the top-right grid. Text wordmarks, not the organisations' logo files.
export const MARKS = [
  { name: 'Tradesnap', note: 'co-founder', style: 'mark-round' },
  { name: 'Real Logic', note: 'founder', style: 'mark-bold' },
  { name: 'Inera', note: 'client', style: 'mark-light' },
  { name: '1177', note: 'client', style: 'mark-mono' },
  { name: 'Samtrafiken', note: 'client', style: 'mark-tight' },
  { name: 'Nordic Medtest', note: 'client', style: 'mark-stack' },
  { name: 'Melbie Group', note: 'board', style: 'mark-serif' },
  { name: 'IF Karlstad', note: 'coach', style: 'mark-caps' },
];
