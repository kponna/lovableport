
import { ReactNode } from "react";

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: ReactNode;
  skills: Skill[];
}
