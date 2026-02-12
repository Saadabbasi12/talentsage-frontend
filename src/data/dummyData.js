export const jobsData = [
  {
    id: "1",
    title: "Frontend Engineer",
    department: "Engineering",
    rubric: [
      { id: "r1", label: "Communication", weight: 30 },
      { id: "r2", label: "Technical Skills", weight: 40 },
      { id: "r3", label: "Culture Fit", weight: 30 },
    ],
    auditLog: [
      { id: "a1", message: "Job created", time: new Date().toISOString() },
    ],
    candidates: [
      { id: "c1", name: "Ali Khan", stage: "Applied", score: 82, skills: ["React", "Tailwind", "JavaScript"] },
      { id: "c2", name: "Sara Ahmed", stage: "Shortlisted", score: 90, skills: ["React", "TypeScript", "UI/UX"] },
      { id: "c3", name: "Ahmed Raza", stage: "Interview", score: 75, skills: ["Vue", "CSS", "HTML"] },
      { id: "c4", name: "Fatima Noor", stage: "Rejected", score: 60, skills: ["Angular", "TypeScript"] },
    ],
  },
  {
    id: "2",
    title: "Backend Engineer",
    department: "Engineering",
    rubric: [
      { id: "r1", label: "Communication", weight: 25 },
      { id: "r2", label: "Technical Skills", weight: 50 },
      { id: "r3", label: "Culture Fit", weight: 25 },
    ],
    auditLog: [
      { id: "a1", message: "Job created", time: new Date().toISOString() },
      { id: "a2", message: "Candidate moved to Interview", time: new Date().toISOString() },
    ],
    candidates: [
      { id: "c5", name: "Bilal Qureshi", stage: "Applied", score: 70, skills: ["Node.js", "Express", "MongoDB"] },
      { id: "c6", name: "Hina Malik", stage: "Shortlisted", score: 88, skills: ["Python", "Django", "REST APIs"] },
      { id: "c7", name: "Usman Tariq", stage: "Interview", score: 92, skills: ["Java", "Spring Boot", "SQL"] },
      { id: "c8", name: "Zoya Khan", stage: "Rejected", score: 55, skills: ["PHP", "Laravel"] },
    ],
  },
  {
    id: "3",
    title: "UI/UX Designer",
    department: "Design",
    rubric: [
      { id: "r1", label: "Communication", weight: 20 },
      { id: "r2", label: "Design Skills", weight: 50 },
      { id: "r3", label: "Culture Fit", weight: 30 },
    ],
    auditLog: [
      { id: "a1", message: "Job created", time: new Date().toISOString() },
    ],
    candidates: [
      { id: "c9", name: "Samiya Ali", stage: "Applied", score: 78, skills: ["Figma", "Sketch", "Adobe XD"] },
      { id: "c10", name: "Haris Javed", stage: "Shortlisted", score: 85, skills: ["Figma", "Prototyping", "UI Design"] },
      { id: "c11", name: "Amna Siddiqui", stage: "Interview", score: 90, skills: ["UX Research", "Wireframing"] },
      { id: "c12", name: "Omar Farooq", stage: "Rejected", score: 60, skills: ["Photoshop", "Illustrator"] },
    ],
  },
  {
    id: "4",
    title: "DevOps Engineer",
    department: "Infrastructure",
    rubric: [
      { id: "r1", label: "Communication", weight: 25 },
      { id: "r2", label: "Technical Skills", weight: 50 },
      { id: "r3", label: "Culture Fit", weight: 25 },
    ],
    auditLog: [
      { id: "a1", message: "Job created", time: new Date().toISOString() },
    ],
    candidates: [
      { id: "c13", name: "Faizan Ali", stage: "Applied", score: 80, skills: ["AWS", "Docker", "Kubernetes"] },
      { id: "c14", name: "Maryam Noor", stage: "Shortlisted", score: 92, skills: ["Terraform", "CI/CD", "Jenkins"] },
      { id: "c15", name: "Shahid Khan", stage: "Interview", score: 85, skills: ["Linux", "Bash", "Monitoring"] },
      { id: "c16", name: "Ayesha Iqbal", stage: "Rejected", score: 60, skills: ["Ansible", "Python"] },
    ],
  },
];