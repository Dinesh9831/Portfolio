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
