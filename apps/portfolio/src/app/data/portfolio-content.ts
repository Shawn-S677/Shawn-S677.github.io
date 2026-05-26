export interface SocialLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ProjectCard {
  title: string;
  category: string;
  status: 'In Development' | 'Coming Soon';
  description: string;
  tags: string[];
  route?: string;
  repository?: string;
}

export interface WorkflowStep {
  title: string;
  detail: string;
}

export const profile = {
  name: 'Shawn Shen',
  role: 'Full Stack Software Engineer',
  focus:
    'Angular-first engineer delivering accessible enterprise workflows with Java/Spring Boot API integration.',
  email: 'mailto:shawnshen677@gmail.com',
  resume: '/assets/resume/shawn-shen-angular-fullstack-resume.pdf',
};

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: profile.email },
  { label: 'GitHub', href: 'https://github.com/Shawn-S677' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shawn-ss' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Angular Delivery',
    skills: [
      'Angular 21',
      'Standalone Components',
      'Signals',
      'RxJS',
      'Reactive Forms',
    ],
  },
  {
    title: 'UI Architecture',
    skills: [
      'Nx Monorepo',
      'Lazy Loading',
      'Route Guards',
      'Accessibility',
      'Micro-Frontend Concepts',
    ],
  },
  {
    title: 'Integration',
    skills: [
      'Java / Spring Boot APIs',
      'REST',
      'SSE Consumption',
      'JWT Context',
      'AWS Exposure',
    ],
  },
  {
    title: 'Quality',
    skills: ['Jest', 'Playwright', 'TypeScript', 'SCSS', 'CI / GitHub Pages'],
  },
];

export const projects: ProjectCard[] = [
  {
    title: 'Document Intelligence Platform',
    category: 'Enterprise Workflow Product',
    status: 'In Development',
    description:
      'An Angular and Nx concept build for document review, metadata validation, processing status, and evidence-backed insight workflows.',
    tags: ['Angular', 'Nx', 'Signals', 'Reactive Forms', 'Java API Boundary'],
    route: '/projects/document-intelligence-platform',
    repository: 'https://github.com/Shawn-S677/Document-Intelligence-Platform',
  },
  {
    title: 'Operations Console',
    category: 'Enterprise UI Study',
    status: 'Coming Soon',
    description:
      'A planned high-density support workspace centered on search, case context, and accessible data review.',
    tags: ['Angular', 'Data Tables', 'Accessibility'],
  },
  {
    title: 'Workflow Design System',
    category: 'Frontend Platform Study',
    status: 'Coming Soon',
    description:
      'A planned shared component library for forms, statuses, approvals, and audit-friendly interactions.',
    tags: ['Components', 'Forms', 'Testing'],
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    title: 'Ingest and organize',
    detail:
      'Users upload contracts or policy files and complete structured metadata fields.',
  },
  {
    title: 'Track review state',
    detail:
      'Queue views present processing and approval status with actionable priorities.',
  },
  {
    title: 'Validate evidence',
    detail:
      'Reviewers inspect summary results and navigate to highlighted supporting passages.',
  },
  {
    title: 'Publish with control',
    detail:
      'Permission-aware workflows move approved documents to shared policy views.',
  },
];

export const architectureBoundaries = [
  'Angular 21 standalone feature areas organized in an Nx workspace.',
  'Signals and RxJS for UI state and asynchronous status presentation.',
  'Reactive Forms for repeatable metadata and cross-field validation.',
  'Java / Spring Boot REST and SSE interfaces treated as integration boundaries.',
  'Micro-frontend architecture retained as an evolution path, not a delivered claim.',
];
