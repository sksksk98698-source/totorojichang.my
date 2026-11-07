export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  badges?: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

/** Work history — newest first. Shown on /work */
export const experience: Experience[] = [
  {
    role: 'Principal Systems Architect',
    company: 'Totoro Cloud Labs',
    companyUrl: 'https://totorojichang.my',
    location: 'Remote',
    start: '2023',
    end: 'Present',
    current: true,
    summary: 'Leading distributed cloud infrastructure, edge acceleration, and high-throughput network routing systems.',
    bullets: [
      'Architected cross-region low-latency traffic steering mesh handling millions of daily edge requests with 99.99% uptime.',
      'Designed and deployed containerized microservices and automated CI/CD pipelines across multi-cloud environments.',
      'Optimized network protocol stacks and caching layers, cutting P99 latency by 45%.',
    ],
    badges: ['Go', 'Rust', 'Kubernetes', 'TypeScript', 'Docker', 'eBPF'],
  },
  {
    role: 'Senior Infrastructure Engineer',
    company: 'HyperScale Networks',
    companyUrl: 'https://totorojichang.my',
    location: 'Tokyo',
    start: '2021',
    end: '2023',
    summary: 'Built reliable backend microservices, telemetry platforms, and high-concurrency message pipelines.',
    bullets: [
      'Developed telemetry gathering daemon processing 50k+ metrics/sec with sub-second dashboard rendering.',
      'Migrated legacy monolithic workloads to modern cloud-native architectures with zero downtime.',
    ],
    badges: ['TypeScript', 'Python', 'PostgreSQL', 'Redis', 'Kafka'],
  },
];

/** Smaller/older roles — rendered as compact rows under the main timeline */
export const earlierRoles: { role: string; company: string; start: string; end: string }[] = [
  { role: 'Systems Software Engineer', company: 'Nexus Data Systems', start: '2019', end: '2021' },
];

export const education: Education[] = [
  {
    degree: 'B.S.',
    field: 'Computer Science & Distributed Systems',
    school: 'Institute of Technology',
    start: '2015',
    end: '2019',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Runtimes',
    skills: ['Go', 'TypeScript', 'Rust', 'Python', 'Node.js', 'SQL'],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: ['Kubernetes', 'Docker', 'Linux', 'Terraform', 'Cloudflare', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Web & Systems Architecture',
    skills: ['Astro', 'React', 'REST / gRPC', 'Distributed Systems', 'Network Routing', 'Performance Optimization'],
  },
];

/** Words typed out one character at a time in the hero */
export const typingRoles = [
  'Systems Architect',
  'Full-Stack Engineer',
  'Cloud Infrastructure Builder',
  'Visual Explorer',
];
