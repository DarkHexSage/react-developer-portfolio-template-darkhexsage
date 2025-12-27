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
  tagline: "I love to learn new technologies and develop cool secure stuff.",
  img: profile,
  about: `Purple Team Specialist with expertise in DevOps and Cybersecurity. Passionate about open-source technologies, infrastructure automation, and cloud-native security. Skilled in containerization (Docker, Kubernetes), orchestration, CI/CD pipeline security, infrastructure-as-code, and vulnerability management. Proficient in Python, Bash, YAML, and infrastructure tools like Jenkins, Prometheus, and Grafana. Committed to continuous learning, security best practices, and building secure, scalable systems across hybrid cloud environments.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/adriano-aguilar-245008101/",
  github: "https://github.com/DarkHexSage",
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
    Position: "WIndows Tier 3 Engineer",
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
/* 
// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor in Electronics & Communication",
    Company: `Your College Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Aug 2020 - Present",
  },
]; */

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
    title: "Python Security Scanner",
    image: projectImage1,
    description: `Automated vulnerability scanner built in Python with concurrent scanning, reporting, and integration with CVSS scoring. Features API endpoint scanning, dependency analysis, and detailed HTML reports.`,
    techstack: "Python, Requests, BeautifulSoup, SQLite",
    previewLink: "https://github.com/darkhexsage/python-security-scanner",
    githubLink: "https://github.com/darkhexsage/python-security-scanner",
  },
  {
    title: "Kubernetes Security Hardening",
    image: projectImage2,
    description: `Comprehensive Kubernetes security implementation including RBAC, Network Policies, Pod Security Standards, and Security Context Constraints. Includes automation scripts and best practices documentation.`,
    techstack: "Kubernetes, YAML, Bash, Helm",
    previewLink: "https://github.com/darkhexsage/k8s-security",
    githubLink: "https://github.com/darkhexsage/k8s-security",
  },
  {
    title: "Docker Container Security",
    image: projectImage3,
    description: `Secure Docker setup with minimal base images, vulnerability scanning, and best practices implementation. Includes multi-stage builds, image signing, and runtime security controls.`,
    techstack: "Docker, Container Structure Tests, Trivy, Bash",
    previewLink: "https://github.com/darkhexsage/docker-security",
    githubLink: "https://github.com/darkhexsage/docker-security",
  },
  {
    title: "CI/CD Pipeline Security",
    image: projectImage4,
    description: `Automated CI/CD pipeline with security scanning, SAST/DAST integration, and secure secrets management. Jenkins-based infrastructure with GitOps principles and automated testing.`,
    techstack: "Jenkins, GitOps, YAML, Python, Docker, Kubernetes",
    previewLink: "https://github.com/darkhexsage/secure-cicd",
    githubLink: "https://github.com/darkhexsage/secure-cicd",
  },
  {
    title: "Infrastructure as Code",
    image: projectImage5,
    description: `Complete IaC implementation using Terraform and Ansible for multi-cloud deployments. Includes security hardening, monitoring setup, and disaster recovery configurations.`,
    techstack: "Terraform, Ansible, Bash, YAML, AWS/Azure",
    previewLink: "https://github.com/darkhexsage/iac-automation",
    githubLink: "https://github.com/darkhexsage/iac-automation",
  },
  {
    title: "Monitoring & Observability Stack",
    image: projectImage6,
    description: `Comprehensive monitoring solution with Prometheus, Grafana, and ELK stack. Custom dashboards, alerting rules, and security event monitoring for cloud infrastructure.`,
    techstack: "Prometheus, Grafana, ELK Stack, Docker, Python",
    previewLink: "https://github.com/darkhexsage/monitoring-stack",
    githubLink: "https://github.com/darkhexsage/monitoring-stack",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "adrilar2298@gmail.com",
};
