// Work shown in the CRT strip on the home page.
// To use a real screenshot instead of the drawn illustration, put the image in
// public/images/work/ and set `image: '/images/work/<file>'` on the project.
export type Screen = 'quote' | 'status' | 'integration' | 'departures' | 'lab' | 'story';

export interface Project {
  id: string;
  name: string;
  role: string;
  summary: string;
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
    summary:
      'Mobile-first, AI-native app for trade businesses. Quotes and invoices from the phone, done before you leave the job.',
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
      'My company. Resilient distributed systems for healthcare, transportation and logistics, built for industries that can’t afford downtime.',
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
  { name: 'Real Logic', note: 'founder', style: 'mark-bold' },
  { name: 'Tradesnap', note: 'co-founder', style: 'mark-round' },
  { name: 'Inera', note: 'client', style: 'mark-light' },
  { name: '1177', note: 'e-health', style: 'mark-mono' },
  { name: 'Samtrafiken', note: 'client', style: 'mark-tight' },
  { name: 'Nordic Medtest', note: 'client', style: 'mark-stack' },
  { name: 'Melbie Group', note: 'board', style: 'mark-serif' },
  { name: 'IF Karlstad', note: 'coach', style: 'mark-caps' },
];
