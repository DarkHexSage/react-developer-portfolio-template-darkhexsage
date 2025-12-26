// DarkHexSage Portfolio Configuration - FILLED IN
// Only update: email, social links, and add your images

import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
import profile from "./assets/profile.jpg"; // ADD YOUR PHOTO

// Tech stack images
import python from "./assets/techstack/python.png";
import fastapi from "./assets/techstack/fastapi.png";
import django from "./assets/techstack/django.png";
import react from "./assets/techstack/react.png";
import postgresql from "./assets/techstack/postgresql.png";
import kubernetes from "./assets/techstack/kubernetes.png";
import docker from "./assets/techstack/docker.png";
import terraform from "./assets/techstack/terraform.png";
import ansible from "./assets/techstack/ansible.png";
import aws from "./assets/techstack/aws.png";
import azure from "./assets/techstack/azure.png";
import linux from "./assets/techstack/linux.png";
import burpsuite from "./assets/techstack/burpsuite.png";
import postman from "./assets/techstack/postman.png";
import git from "./assets/techstack/git.png";
import github from "./assets/techstack/github.png";

// Project Images
import projectImage1 from "./assets/projects/web-security-scanner.jpg"; // ADD PROJECT SCREENSHOT
import projectImage2 from "./assets/projects/vulnerable-webapp.jpg"; // ADD PROJECT SCREENSHOT
import projectImage3 from "./assets/projects/api-security-framework.jpg"; // ADD PROJECT SCREENSHOT

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// PERSONAL DETAILS - FILLED IN
export const personalDetails = {
  name: "DarkHexSage",
  tagline: "eWPTX Pentester | Secure Code + Infrastructure | $150-200/hr",
  img: profile,
  about: `eWPTX Extreme Web Pentester with 5+ years of security and infrastructure expertise. 
I find vulnerabilities that competitors miss using advanced eWPTX methodology. 
I don't just pentest applications - I build them securely and harden infrastructure. 

14 professional certifications including eWPTX (highest web pentesting), CKS (Kubernetes Security), 
RHCE (Linux), Terraform, and Ansible. Full-stack security thinking: find vulnerabilities → fix them → verify fixes work.

Production experience at Acquia managing FIPS 140-3 compliance, Kubernetes security, container technologies, 
and CI/CD pipeline security. Multi-cloud expertise (AWS, Azure, Oracle OCI).

I specialize in: Web application penetration testing, secure application development, 
infrastructure hardening, API security, and Kubernetes security. Not just theory - 
real production experience across enterprise environments.`,
};

// SOCIAL MEDIA - UPDATE THESE WITH YOUR ACTUAL LINKS
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/yourprofile", // UPDATE: Your LinkedIn
  github: "https://www.github.com/DarkHexSage",
  twitter: "https://twitter.com/yourhandle", // UPDATE: Your Twitter (optional)
  upwork: "https://upwork.com/freelancers/~yourprofile", // UPDATE: Your Upwork
};

// WORK EXPERIENCE - FILLED IN
export const workDetails = [
  {
    Position: "Purple Team Security Engineer",
    Company: "Acquia",
    Location: "Costa Rica (Remote)",
    Type: "Full Time",
    Duration: "Jan 2024 - Present",
  },
  {
    Position: "Infrastructure Security Specialist",
    Company: "Kyndryl",
    Location: "Remote",
    Type: "Full Time",
    Duration: "2023 - 2024",
  },
  {
    Position: "Linux System Administrator",
    Company: "TechData",
    Location: "Remote",
    Type: "Full Time",
    Duration: "2022 - 2023",
  },
  {
    Position: "Azure Support Engineer",
    Company: "Microsoft",
    Location: "Remote",
    Type: "Full Time",
    Duration: "2021 - 2022",
  },
];

// EDUCATION / CERTIFICATIONS - FILLED IN
export const eduDetails = [
  {
    Position: "eWPTX - Extreme Web Penetration Tester",
    Company: "eLearnSecurity",
    Location: "Online",
    Type: "Certification",
    Duration: "Dec 2024",
  },
  {
    Position: "CKS - Certified Kubernetes Security Specialist",
    Company: "Linux Foundation",
    Location: "Online",
    Type: "Certification",
    Duration: "2024",
  },
  {
    Position: "EX280 - OpenShift Administrator",
    Company: "Red Hat",
    Location: "Online",
    Type: "Certification",
    Duration: "2024 (264/300)",
  },
  {
    Position: "RHCE - Red Hat Certified Engineer",
    Company: "Red Hat",
    Location: "Online",
    Type: "Certification",
    Duration: "2023",
  },
  {
    Position: "Terraform Associate 003",
    Company: "HashiCorp",
    Location: "Online",
    Type: "Certification",
    Duration: "2024",
  },
  {
    Position: "Ansible Certified",
    Company: "Red Hat",
    Location: "Online",
    Type: "Certification",
    Duration: "2024",
  },
  {
    Position: "eCPPTv3 - Certified Advanced Penetration Tester",
    Company: "eLearnSecurity",
    Location: "Online",
    Type: "Certification",
    Duration: "2023",
  },
  {
    Position: "CKA & CKAD - Kubernetes Administrator & Developer",
    Company: "Linux Foundation",
    Location: "Online",
    Type: "Certification",
    Duration: "2023",
  },
  {
    Position: "eWPTv2 & eJPT - Web & Junior Penetration Tester",
    Company: "eLearnSecurity",
    Location: "Online",
    Type: "Certification",
    Duration: "2022-2023",
  },
];

// TECH STACK - FILLED IN
export const techStackDetails = {
  python: python,
  fastapi: fastapi,
  django: django,
  react: react,
  postgresql: postgresql,
  kubernetes: kubernetes,
  docker: docker,
  terraform: terraform,
  ansible: ansible,
  aws: aws,
  azure: azure,
  linux: linux,
  burpsuite: burpsuite,
  postman: postman,
  git: git,
  github: github,
};

// PROJECTS - FILLED IN
export const projectDetails = [
  {
    title: "Web Application Security Audit Platform",
    image: projectImage1,
    description: `eWPTX-level automated vulnerability scanner for web applications. 
    Detects SQL injection, XSS, authentication bypass, business logic flaws, API vulnerabilities. 
    Generates professional pentest reports with CVSS scores and remediation code. 
    JWT authentication for user data protection. PostgreSQL encrypted database. 
    Deployed on Kubernetes with Docker. Production-ready tool used by companies 
    to verify security before launch.`,
    techstack: "FastAPI, React, PostgreSQL, Kubernetes, Docker, AWS",
    previewLink: "https://github.com/DarkHexSage/web-app-security-audit-platform",
    githubLink: "https://github.com/DarkHexSage/web-app-security-audit-platform",
  },
  {
    title: "Vulnerable Web App → Hardened Version",
    image: projectImage2,
    description: `Comprehensive security demonstration: Build vulnerable app with SQL injection, 
    XSS, broken auth, hardcoded secrets. Pentest it using eWPTX methodology. 
    Document all findings. Fix every vulnerability. Show before/after comparison. 
    Demonstrates ability to find AND fix security issues. Includes professional 
    pentest report with CVSS scores and remediation steps. Educational and practical.`,
    techstack: "Django, SQLAlchemy, React, PostgreSQL",
    previewLink: "https://github.com/DarkHexSage/vulnerable-to-hardened-webapp",
    githubLink: "https://github.com/DarkHexSage/vulnerable-to-hardened-webapp",
  },
  {
    title: "API Security Testing Framework",
    image: projectImage3,
    description: `Automated REST API security assessment tool. Tests for authentication bypass, 
    JWT algorithm confusion, token expiration flaws, rate limiting bypass, CORS misconfiguration, 
    injection attacks, business logic flaws, and sensitive data exposure. 
    Generates professional security reports with findings and recommendations. 
    Used for API security verification before production deployment.`,
    techstack: "FastAPI, Python, pytest, Professional Reporting",
    previewLink: "https://github.com/DarkHexSage/api-security-testing-framework",
    githubLink: "https://github.com/DarkHexSage/api-security-testing-framework",
  },
];

// CONTACT DETAILS - UPDATE EMAIL
export const contactDetails = {
  email: "your.email@example.com", // UPDATE: Add your actual email
  phone: "+506-XXXX-XXXX", // Optional: Costa Rica number
  location: "San José, Costa Rica",
};

// FREELANCE DETAILS - ALREADY FILLED IN
export const freelanceDetails = {
  hourlyRate: "$150-200",
  availability: "2-3 projects per month",
  timezone: "UTC-6 (CST)",
  languages: ["English (Fluent)", "Spanish (Native)"],
  certifications: [
    "eWPTX (Extreme Web Penetration Tester)",
    "eCPPTv3 (Advanced Penetration Tester)",
    "eWPTv2 (Web Penetration Tester)",
    "eJPT (Junior Penetration Tester)",
    "CKS (Kubernetes Security Specialist)",
    "CKA (Kubernetes Administrator)",
    "CKAD (Kubernetes Application Developer)",
    "RHCE (Red Hat Certified Engineer)",
    "EX280 (OpenShift Administrator)",
    "Terraform Associate 003",
    "Ansible Certified",
    "FIPS 140-3 Compliance",
  ],
  services: [
    {
      name: "eWPTX Web Application Penetration Test",
      price: "$8,000-15,000",
      duration: "2-3 weeks",
      description: "Complete web app security assessment using eWPTX methodology",
    },
    {
      name: "Build Secure Web Application",
      price: "$10,000-25,000",
      duration: "4-6 weeks",
      description: "Secure from day 1: authentication, encryption, no hardcoded secrets",
    },
    {
      name: "API Security Assessment",
      price: "$5,000-10,000",
      duration: "1-2 weeks",
      description: "Complete REST API security testing and vulnerability assessment",
    },
    {
      name: "Kubernetes & Infrastructure Security",
      price: "$5,000-15,000",
      duration: "2-3 weeks",
      description: "RBAC hardening, network policies, pod security standards, encryption",
    },
    {
      name: "Secure Code Review",
      price: "$3,000-8,000",
      duration: "1-2 weeks",
      description: "Security-focused code review with remediation recommendations",
    },
  ],
};

// SKILLS SUMMARY
export const skillsSummary = {
  security: [
    "Web Application Penetration Testing (eWPTX Certified)",
    "OWASP Top 10 & Secure Coding",
    "API Security Assessment",
    "Infrastructure Hardening",
    "Vulnerability Management & CVSS",
    "Security Architecture Design",
    "FIPS 140-3 Compliance",
    "CIS Benchmarks",
  ],
  backend: [
    "FastAPI (Async Python)",
    "Django & REST Framework",
    "SQLAlchemy ORM (Parameterized Queries)",
    "REST API Design & Security",
    "Authentication (JWT, OAuth2, API Keys)",
    "Authorization & Role-Based Access Control",
    "Database Security & Encryption",
  ],
  infrastructure: [
    "Kubernetes (CKS Certified Expert)",
    "Docker & Container Security",
    "Terraform & Infrastructure as Code",
    "Ansible Automation",
    "AWS (EC2, RDS, S3, IAM, Secrets Manager)",
    "Azure (VMs, App Services, Key Vault)",
    "Oracle Cloud Infrastructure (OCI)",
    "CI/CD Pipelines (Jenkins, GitLab CI)",
  ],
  linux: [
    "RHEL/CentOS/Ubuntu Administration",
    "Linux Security Hardening",
    "System Administration",
    "Firewall & iptables Configuration",
    "SSL/TLS Certificate Management",
    "Kernel Security & Hardening",
    "Package Management & Updates",
  ],
  tools: [
    "Burp Suite Professional",
    "OWASP ZAP",
    "Metasploit Framework",
    "Wireshark & tcpdump",
    "Jenkins & GitLab CI/CD",
    "Prometheus & Grafana Monitoring",
    "Docker Registry & Repository Management",
    "Postman & API Testing",
  ],
};
