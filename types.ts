export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Project {
  name: string;
  link: string;
  tech: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  coursework: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Publication {
  title: string;
  publisher: string;
}