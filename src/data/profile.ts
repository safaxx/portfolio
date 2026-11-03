import type { SocialLink } from '../types'

export const profile = {
  name: "Safa Khan",
  title: 'Software Developer',
  tagline: 'I build things for the web.',
  about: [
    'A short paragraph about who you are and what you enjoy working on.',
    'Another paragraph about your background, interests, or what you are learning now.',
  ],
  email: 'safakhanx4@gmail.com',
  // Put your resume PDF at public/resume.pdf
  resume: '/resume.pdf',
}

export const socials: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/safaxx', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/safax', icon: 'linkedin' },
]
