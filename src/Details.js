// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import azure from "./assets/techstack/azure.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import python from "./assets/techstack/python.png";
import kali from "./assets/techstack/kali.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import prometheus from "./assets/techstack/prometheus.png";
import k8s from "./assets/techstack/k8s.png";
import linux from "./assets/techstack/linux.png";
import jenkins from "./assets/techstack/jenkins.png";
import docker from "./assets/techstack/docker.png";
import ansible from "./assets/techstack/ansible.png";
import terraform from "./assets/techstack/terraform.png";
import aws from "./assets/techstack/aws.png";
import grafana from "./assets/techstack/grafana.png";
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
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Adriano Aguilar",
  tagline: "Love to code secure, scalable applications & infrastructure.",
  img: profile,
  about: `Purple Team Security Engineer with 14+ certifications. Specialized in Kubernetes security, DevOps, and full-stack development. Expert in containerization (Docker, Kubernetes), CI/CD pipeline security, penetration testing, and infrastructure hardening. Proficient in Python, React, Bash, and tools like Jenkins, ArgoCD, and Prometheus. Committed to building secure, production-grade systems.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/adriano-aguilar-245008101/",
  github: "https://github.com/DarkHexSage",
  twitter: "https://darkhexsage.8bit.ca/",

};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Security Engineer",
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
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  cka: cka,
  ckad: ckad,
  cks: cks,
  eccpt: eccpt,
  ewptx: ewptx,
  rhce: rhce,
  ta003: ta003,
  ex280: ex280,
  lfcs: lfcs,
  k8s: k8s,
  linux: linux,
  jenkins: jenkins,
  docker: docker,
  ansible: ansible,
  terraform: terraform,
  aws: aws,
  grafana: grafana,
  prometheus: prometheus,
  kali: kali,
  python: python,
  azure: azure,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "API Tester Platform",
    image: projectImage2,
    description: `Comprehensive API testing tool for automated endpoint validation, security scanning, and performance analysis. Streamlined testing workflow for REST APIs and webhooks.`,
    techstack: "Shell, Bash, Python, API Testing, Automation",
    previewLink: "https://adragportfolio.info.gf/security-api",
    githubLink: "https://github.com/DarkHexSage/api_tester_platform",
  },
  {
    title: "Cryptocurrency Monitor",
    image: projectImage3,
    description: `Live crypto price dashboard with real-time BTC, ETH, SOL tracking. Portfolio analysis and market alerts with responsive HTML frontend.`,
    techstack: "HTML, JavaScript, Real-time Data, REST APIs",
    previewLink: "https://adragportfolio.info.gf/crypto-monitor",
    githubLink: "https://github.com/DarkHexSage/crypto_monitor",
  },
  {
    title: "Website Security Scanner",
    image: projectImage4,
    description: `Web application vulnerability scanner performing OWASP Top 10 assessments. SQL injection, XSS testing, CSRF validation, and security header analysis.`,
    techstack: "JavaScript, Python, Security Scanning, OWASP",
    previewLink: "https://adragportfolio.info.gf/security-scanner",
    githubLink: "https://github.com/DarkHexSage/website_security_scanner",
  },
  {
    title: "Container Security Scanner",
    image: projectImage5,
    description: `Automated Docker container vulnerability scanner. Image analysis, Trivy integration, and security best practices validation for containerized applications.`,
    techstack: "CSS, Docker, Container Security, Trivy, Python",
    previewLink: "https://adragportfolio.info.gf/container-scanner",
    githubLink: "https://github.com/DarkHexSage/container-scanner",
  },
  {
    title: "Password Security Checker",
    image: projectImage6,
    description: `NIST 800-63B password strength validator. Real-time entropy analysis, pattern checking, and security recommendations for compliance-focused applications.`,
    techstack: "React, Python FastAPI, REST API, Security",
    previewLink: "https://adragportfolio.info.gf/password-checker",
    githubLink: "https://github.com/DarkHexSage/password-checker",
  },
  {
    title: "Trading Card Database",
    image: projectImage1,
    description: `Full-stack React + FastAPI application with 80MB SQLite database. Real-time search, autocomplete, game filtering, responsive design deployed via Docker and Caddy reverse proxy.`,
    techstack: "Python, React, SQLite, Docker, Kubernetes, Caddy",
    previewLink: "https://adragportfolio.info.gf/tcg",
    githubLink: "https://github.com/DarkHexSage/API-TCG",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "adrilar2298@gmail.com",
};
