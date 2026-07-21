import { Project, SkillCategory, TimelineMilestone } from '@/types';

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "2024",
    title: "Genesis into Computer Science",
    description: "Enrolled in B.Sc Computer Science at Bells University of Technology. Established core competencies in procedural algorithms and computational logic.",
    skillsAcquired: ["HTML5", "CSS3", "Algorithmic Logic"]
  },
  {
    year: "2024 (Q3-Q4)",
    title: "DOM Manipulation & Reactive UI Frameworks",
    description: "Transitioned from core JavaScript architectures to declarative UI state machines, mastering React reconciliation loops and ecosystem state management.",
    skillsAcquired: ["JavaScript ES6+", "React", "Tailwind CSS"]
  },
  {
    year: "2025",
    title: "Production Frontend Frameworks & Static Optimization",
    description: "Adopted Next.js and TypeScript to build statically optimized, strongly-typed web architectures utilizing Server Components and standard caching primitives.",
    skillsAcquired: ["Next.js", "TypeScript", "Framer Motion"]
  },
  {
    year: "2026",
    title: "Distributed Systems & Full-Stack Deep Dive",
    description: "Architecting microservices and monolithic backends. Currently focused on strongly-typed API layers with NestJS, relational mapping with PostgreSQL, and horizontal scalability.",
    skillsAcquired: ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "Docker"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    skills: [
      { name: "Next.js 16", level: 95, icon: "SiNextdotjs" },
      { name: "React 19", level: 95, icon: "FaReact" },
      { name: "TypeScript", level: 90, icon: "SiTypescript" },
      { name: "Tailwind CSS v4", level: 95, icon: "SiTailwindcss" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Distributed Systems",
    skills: [
      { name: "Node.js", level: 85, icon: "FaNodeJs" },
      { name: "NestJS", level: 80, icon: "SiNestjs" },
      // { name: "Express.js", level: 88, icon: "SiExpress" }
    ]
  },
  {
    id: "databases",
    title: "Persistence & Data Modeling",
    skills: [
      { name: "PostgreSQL", level: 82, icon: "BiLogoPostgresql" },
      // { name: "MongoDB", level: 85, icon: "SiMongodb" }
    ]
  },
  {
    id: "tools",
    title: "Infrastructure & Tools",
    skills: [
      // { name: "Docker", level: 75, icon: "FaDocker" },
      { name: "Git / GitHub", level: 92, icon: "FaGithub" },
      { name: "Figma", level: 80, icon: "FaFigma" }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ascend",
    title: "ASCEND",
    description: "An AI-powered performance engineering fitness ecosystem offering real-time generative dynamic workout matrices, deterministic metrics telemetry, and asynchronous progress gamification systems.",
    extendedDescription: "ASCEND targets bottlenecks in modern fitness apps by combining Next.js App Router streaming with an intelligent coaching engine. Features state-driven real-time tracking components and a modern glassmorphic dashboard architecture.",
    status: "In Progress",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    githubUrl: "https://github.com/temitayo1239/ascend",
    features: ["Generative workout generation engine", "Telemetry data visualization panels", "Sub-100ms UI interactive response layers"],
    isCollaborative: false,
    featured: true,
    category: "fullstack"
  },
  {
    id: "darte",
    title: "Darté",
    description: "A collaborative high-fidelity design-to-code project execution dashboard built natively for fast-moving engineering teams requiring high situational awareness.",
    status: "Completed",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/temitayo1239/darte",
    liveUrl: "https://darte-demo.vercel.app",
    features: ["Real-time asset mutation pipeline", "Scoped multi-tenant authorization protocols", "Integrated Kanban event listeners"],
    isCollaborative: true,
    contributions: {
      role: "Lead Frontend Engineer & Interaction Designer",
      tasks: [
        "Architected complete layout caching matrix and compound component models.",
        "Engineered accessible low-latency layout state synchronization components using web hooks.",
        "Optimized client-side rendering pathways resulting in a 40% reduction in layout shift."
      ]
    },
    featured: true,
    category: "frontend"
  },
  // {
  //   id: "auth-system",
  //   title: "Production Cryptographic Auth Core",
  //   description: "An abstracted production authentication gateway module deploying JSON Web Tokens (JWT) inside HTTP-only cookies featuring cryptographic session refresh state loops.",
  //   status: "Completed",
  //   technologies: ["NestJS", "TypeScript", "PostgreSQL", "Docker"],
  //   githubUrl: "https://github.com/temitayo1239/auth-core",
  //   features: ["Asymmetric key pairs for authorization headers", "Strict rate-limiting middleware integrations", "Automated relational database migration test pipelines"],
  //   isCollaborative: false,
  //   featured: false,
  //   category: "system"
  // }
];