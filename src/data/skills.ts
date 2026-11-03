import type { Education, SkillGroup } from "../types";

// Put logo images in public/logos/ and reference them as '/logos/<file>'
export const education: Education = {
  degree: "Computer Science",
  school: "IPS Academy",
  description: "passed with honours",
  logo: undefined,
};

// The first group starts expanded; the rest are collapsed
export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Java",
      "SQL",
      "HTML",
      "CSS",
      "English",
      "Urdu",
      "Hindi"
    ],
  },
  {
    label: "AI & Agent Tooling",
    skills: ["Claude Code", "Cursor", "Codex", "Agentic SDKs"],
  },
  {
    label: "Frameworks & Infra",
    skills: [
      "React",
      "Node.js",
      "Express",
      "Nextjs",
      "Git",
      "Docker",
      "MongoDB",
      "MySQL",
      "AWS",
      "PostgreSQL",
    ],
  },
];
