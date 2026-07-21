export interface ProjectContribution {
  role: string;
  tasks: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  extendedDescription?: string;
  status: 'In Progress' | 'Completed' | 'Beta';
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  isCollaborative: boolean;
  contributions?: ProjectContribution;
  featured: boolean;
  category: 'frontend' | 'fullstack' | 'system';
}

export interface Skill {
  name: string;
  level: number; // 1-100 scale for internal animation delays, not arbitrary bars
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  skillsAcquired: string[];
}