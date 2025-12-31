// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Cert stack images
import cka from "./assets/certs/cka.png";
import ckad from "./assets/certs/ckad.png";
import cks from "./assets/certs/cks.png";
import eccpt from "./assets/certs/eccpt.png";
import ewptx from "./assets/certs/ewptx.png";
import rhce from "./assets/certs/rhce.png";
import ta003 from "./assets/certs/ta003.png";
import ex280 from "./assets/certs/ex280.png";
import lfcs from "./assets/certs/lfcs.png";
// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Adriano Aguilar",
  tagline: "Building secure, scalable applications and infrastructure.",
  img: profile,
  about: `Purple Team Security Engineer with 14+ certifications. Specialized in Kubernetes security, DevOps, and full-stack development. Expert in containerization (Docker, Kubernetes), CI/CD pipeline security, penetration testing, and infrastructure hardening. Proficient in Python, React, Bash, and tools like Jenkins, ArgoCD, and Prometheus. Committed to building secure, production-grade systems.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/adriano-aguilar-245008101/",
  github: "https://github.com/DarkHexSage",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Purple Team Security Engineer",
    Company: `Acquia`,
    Location: "Costa Rica",
    Type: "Full Time",
    Duration: "Jan 2025 - Current",
  },
  {
    Position: "Senior Systems Engineer",
    Company: `TD SYNNEX`,
    Location: "Costa Rica",
    Type: "Full Time",
    Duration: "Nov 2023 - Dec 2024",
  },
  {
    Position: "Linux System Administrator",
    Company: `Kyndryl`,
    Location: "Costa Rica",
    Type: "Full Time",
    Duration: "May 2022 - Oct 2023",
  },
  {
    Position: "Windows Tier 3 Engineer",
    Company: `DataGlove IT Solutions`,
    Location: "Costa Rica",
    Type: "Full Time",
    Duration: "Feb 2021 - May 2022",
  },
  {
    Position: "Azure Support Engineer",
    Company: `Tek-Experts`,
    Location: "Costa Rica",
    Type: "Full Time",
    Duration: "Jan 2020 - Mar 2021",
  },    
  {
    Position: "Technical Support Engineer",
    Company: `WNS`,
    Location: "Costa Rica",
    Type: "Full Time",
    Duration: "March 2019 - Dec 2019",
  },
  {
    Position: "IT Technician",
    Company: `Ezugi`,
    Location: "Costa Rica",
    Type: "Full Time",
    Duration: "Jan 2018 - Feb 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  cka: cka,
  ckad: ckad,
  cks: cks,
  eccpt: eccpt,
  ewptx: ewptx,
  rhce: rhce,
  ta003: ta003,
  ex280: ex280,
  lfcs: lfcs
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Trading Card Database",
    image: projectImage1,
    description: `Full-stack React + FastAPI application with 80MB SQLite database. Features real-time search, autocomplete, game filtering, and responsive design deployed via Docker, Nginx, and Caddy reverse proxy.`,
    techstack: "React, FastAPI, SQLite, Docker, Kubernetes, Caddy",
    previewLink: "https://adragportfolio.info.gf/tcg",
    githubLink: "https://github.com/darkhexsage/tcg-database",
  },
  {
    title: "Password Security Checker",
    image: projectImage2,
    description: `NIST 800-63B password strength validator. Analyzes entropy, checks against common patterns, and provides security recommendations for compliance-focused applications.`,
    techstack: "React, Python, REST API, Security Best Practices",
    previewLink: "https://adragportfolio.info.gf/password-checker",
    githubLink: "https://github.com/darkhexsage/password-checker",
  },
  {
    title: "Cryptocurrency Monitor",
    image: projectImage3,
    description: `Live crypto price dashboard with real-time tracking, portfolio analysis, and market alerts. WebSocket integration for instant updates with React frontend and async Python backend.`,
    techstack: "React, Python FastAPI, WebSockets, Docker, Real-time Data",
    previewLink: "https://adragportfolio.info.gf/crypto-monitor",
    githubLink: "https://github.com/darkhexsage/crypto-monitor",
  },
  {
    title: "Website Security Scanner",
    image: projectImage4,
    description: `Web application vulnerability scanner performing OWASP Top 10 assessments. SQL injection detection, XSS testing, CSRF validation, and security header analysis with detailed reporting.`,
    techstack: "Python, Security Scanning, OWASP, API Integration",
    previewLink: "https://github.com/darkhexsage/website-security-scanner",
    githubLink: "https://github.com/darkhexsage/website-security-scanner",
  },
  {
    title: "Container Security Scanner",
    image: projectImage5,
    description: `Automated Docker/container vulnerability scanner with image analysis, Trivy integration, and security best practices validation. Identifies misconfigurations and vulnerable dependencies.`,
    techstack: "Docker, Trivy, Python, Container Security, Bash",
    previewLink: "https://github.com/darkhexsage/container-security-scanner",
    githubLink: "https://github.com/darkhexsage/container-security-scanner",
  },
  {
    title: "CVE Tracker & Analysis",
    image: projectImage6,
    description: `Enterprise vulnerability tracking system with real-time CVE feed integration, severity scoring, affected software tracking, and automated patch recommendations for infrastructure teams.`,
    techstack: "Python, Data Aggregation, API Integration, Alert System",
    previewLink: "https://github.com/darkhexsage/cve-tracker",
    githubLink: "https://github.com/darkhexsage/cve-tracker",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "adrilar2298@gmail.com",
};