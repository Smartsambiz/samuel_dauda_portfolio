export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "/images/icon-react.png", level: 85 },
      { name: "JavaScript", icon: "/images/icon-javascript.png", level: 85 },
      { name: "HTML5", icon: "/images/icon-html5.svg", level: 90 },
      { name: "CSS3", icon: "/images/icon-css.png", level: 85 },
      { name: "Responsive Design", icon: "/images/icon-responsive.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "/images/icon-nodejs.png", level: 80 },
      { name: "Express.js", icon: "/images/icon-express.svg", level: 80 },
      { name: "REST APIs", icon: "/images/icon-restapi.svg" },
      { name: "MongoDB", icon: "/images/icon-mongodb.svg", level: 75 },
      { name: "PostgreSQL", icon: "/images/icon-postgresql.svg" },
      { name: "JWT Authentication", icon: "/images/icon-jwt.svg" },
      { name: "API Integration", icon: "/images/icon-api.svg" },
      { name: "Webhooks", icon: "/images/icon-webhooks.svg" },
      { name: "AI Integration", icon: "/images/icon-ai.svg" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "/images/icon-git.svg" },
      { name: "GitHub", icon: "/images/icon-github.svg" },
      { name: "Postman", icon: "/images/icon-postman.svg" },
      { name: "Docker", icon: "/images/icon-docker.svg" },
      { name: "Railway", icon: "/images/icon-railway.svg" },
      { name: "VS Code", icon: "/images/icon-vscode.svg" },
    ],
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    type: "Freelance",
    period: "2021 — Present",
    points: [
      "Built full-stack web applications with React frontends and Node.js/Express.js backends, handling authentication, payment integration, database design, and deployment",
      "Developed REST APIs and integrated third-party services including payment gateways, AI models, and external data sources",
      "Designed and deployed backend architectures with MongoDB, implementing secure authentication systems and business automation workflows",
      "Built frontend interfaces with React, focusing on responsive design, performance optimization, and intuitive user experiences",
    ],
  },
  {
    role: "Software Developer",
    type: "Personal Projects",
    period: "2023 — Present",
    points: [
      "Built an AI-powered WhatsApp automation platform integrating Gemini AI with WhatsApp Business API for automated customer conversations",
      "Developed a full-stack ticket management system with JWT authentication, role-based authorization, and scalable REST API architecture",
      "Created a digital banking backend integrating NIBSS identity verification API for secure financial transaction workflows",
      "Built modern payment platforms with Paystack integration for airtime, data, and utility payment processing",
    ],
  },
];
