export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  image?: string
}

export interface Experience {
  role: string
  company: string
  period: string
  points: string[]
}

export interface Education {
  degree: string
  school: string
  description: string
  logo?: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export type SocialIconName = 'github' | 'linkedin'

export interface SocialLink {
  label: string
  url: string
  icon: SocialIconName
}
