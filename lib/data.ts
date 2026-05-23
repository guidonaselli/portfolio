import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import projectImg1 from "@/public/projectImg1.png";
import projectImg2 from "@/public/projectImg2.png";
import projectImg3 from "@/public/projectImg3.png";
import projectImg4 from "@/public/projectImg4.png";
import projectImg5 from "@/public/projectImg5.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer | GIA International",
    location: "Buenos Aires, Argentina",
    description:
      "Developing a monitoring platform for integrated security services. Building microservices with Java 17 and Spring Boot. Implementing frontend with Angular 14 and TypeScript. Managing deployments with Docker and GitLab CI/CD.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2025 - Present",
  },
  {
    title: "Bachelor of Computer Science",
    location: "Universidad de La Ciudad",
    description:
      "Currently studying to complement my technical knowledge with a solid theoretical foundation in computer science.",
    icon: React.createElement(FaGraduationCap),
    date: "2025 - Expected 2026",
  },
  {
    title: "Full Stack Developer | Interaxa S.A.",
    location: "Buenos Aires, Argentina",
    description:
      "Developed scalable web applications using Angular and Java Spring Boot for clients like Banco Patagonia, ICBC, ITAU, and Despegar. Worked with Genesys Cloud platform and followed Agile methodologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Technical Degree in System Analysis",
    location: "ORT Technological Institute",
    description:
      "Graduated as System Analyst. Learned Java, JavaScript, Vue.js, C#, SQL, UML, and software engineering principles.",
    icon: React.createElement(FaGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Web Developer | Freelancer",
    location: "LATAM",
    description:
      "Designed and deployed custom web pages and e-commerce platforms using JavaScript, Vue.js, and Python. Implemented responsive designs and collaborated directly with clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full Stack Bootcamp",
    location: "Buenos Aires, Argentina",
    description:
      "Completed intensive 6-month bootcamp. Learned HTML, CSS, JavaScript, Vue.js, Node.js, and SQL.",
    icon: React.createElement(FaGraduationCap),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "Benta Servicios",
    description:
      "E-commerce of services. Able to registering users, monthly subscription to publish a service, contacting a service creator with a real-time chat.",
    tags: ["Django", "Tailwind", "PostgreSQL", "Live!"],
    imageUrl: projectImg5,
    link: "https://www.bentaservicios.com.ar/",
  },
  {
    title: "SignalTech",
    description:
      "E-commerce for a company that sells acoustic and visual signage",
    tags: ["TypeScript", "Firebase"],
    imageUrl: projectImg4,
    link: "",
  },
  {
    title: "ARchitect",
    description:
      "The frontend blog of an application to preview 3D furniture in a room. It shows posts, comments and likes with real-time notifications and also allows you to create an account.",
    tags: ["Vue.js", "axios", "pinia", "Firebase", "Tailwind"],
    imageUrl: projectImg3,
    link: "",
  },
  {
    title: "Andar",
    description:
      "A website for an Argentine medical prepaid. It has the function to select the health insurance plan that the consumer prefers.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: projectImg2,
    link: "",
  },
  {
    title: "BNF Contadores",
    description:
      "My first freelancer project. A single page for an accounting company. Its very simple and clean.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: projectImg1,
    link: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Vue.js",
  "Node.js",
  "Git",
  "React",
  "Angular",
  "Kotlin",
  "Tailwind",
  "PostgreSQL",
  "Firebase",
  "Docker",
  "CI/CD",
] as const;
