export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Full-Stack' | 'Backend & APIs' | 'Bots & Automation' | 'Interactive Tools' | 'APIs & Data';
  period: string;
  featured: boolean;
  problem: string;
  solution: string;
  role: string;
  highlights: string[];
  architectureDetails: {
    overview: string;
    keyDecisions: string[];
    schemaOrFlow: string[];
  };
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  badge?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    tags?: string[];
  }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  badge?: string;
  description: string[];
  skills?: string[];
}

export interface ProfileData {
  name: string;
  roleTitle: string;
  education: {
    degree: string;
    graduationYear: string;
    status: string;
  };
  location: {
    city: string;
    country: string;
    timezone: string;
  };
  availabilityStatus: string;
  bioSummary: string;
  builderPhilosophy: string;
  contactEmail: string;
  experience: ExperienceItem[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}
