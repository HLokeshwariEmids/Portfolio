export type Certification = {
  name: string;
  issuer: string;
  // Add credentialUrl when ready
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Claude Certified Architect — Foundations",
    issuer: "Anthropic",
  },
  {
    name: "ServiceNow Certified Application Developer",
    issuer: "ServiceNow",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    name: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
  },
  {
    name: "RedHat Certified Developer",
    issuer: "Red Hat",
  },
  {
    name: "Salesforce AI Associate",
    issuer: "Salesforce",
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  score: string;
  primary?: boolean;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Koneru Lakshmaiah University",
    period: "2022 — 2026",
    score: "CGPA: 9.85 / 10",
    primary: true,
  },
  {
    degree: "Class 12",
    institution: "Sri Chaitanya Junior College",
    period: "2020 — 2022",
    score: "96%",
  },
  {
    degree: "Class 10",
    institution: "St. Ann's School",
    period: "2020",
    score: "95%",
  },
];
