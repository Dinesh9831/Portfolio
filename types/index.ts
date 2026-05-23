export interface Project {
  title: string;
  description: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  tags?: string[];
}

export interface SkillItem {
  name: string;
  level?: string;
  logo?: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  className: string;
  skills: SkillItem[];
}

export interface Education {
  institution: string;
  degree: string;
  location?: string;
  duration?: string;
  description?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description?: string;
}
