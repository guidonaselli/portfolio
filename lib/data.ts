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
    title: "Accounting assistant",
    location: "Argentina, CABA",
    description:
      "Since I finished high school, I have worked at an accounting firm as an assistant.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2022",
  },
  {
    title: "Fullstack Bootcamp",
    location: "Argentina, CABA",
    description:
      "I graduated after 6 months of studying. I learned HTML, CSS, JavaScript, Vuejs, Node.js and SQL.",
    icon: React.createElement(FaGraduationCap),
    date: "2021",
  },
  {
    title: "Freelancer",
    location: "LATAM",
    description:
      "I worked as a freelancer while studying to put the theoretical knowledge into practice.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "System Analyst",
    location: "Argentina, CABA",
    description:
      "I graduated in a technicature of system analyst. I learned Java, Javascript, Vuejs, C#, Java, SQL, UML.",
    icon: React.createElement(FaGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Interaxa S.A.",
    location: "Argentina, CABA",
    description:
      "I work as a fullstack developer. I work with Angular.js, Java Springboot, PostreSQL, Docker",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - actual",
  },
  {
    title: "Bachelors Degree in Computer Science",
    location: "Argentina, CABA",
    description:
      "I am currently studying a degree in computer science to complement my knowledge and my previous studies.",
    icon: React.createElement(FaGraduationCap),
    date: "2025 - Expected June 2026",
  },
] as const;

export const projectsData = [
  {
    title: "TodoServicios",
    description:
      "E-commerce of services. Able to registering users, monthly subscription to publish a service, contacting a service creator with a real-time chat.",
    tags: ["Django", "Tailwind", "PostgreSQL", "ON DEVELOPMENT!"],
    imageUrl: projectImg5,
  },
  {
    title: "SignalTech",
    description:
      "E-commerce for a company that sells acoustic and visual signage",
    tags: ["TypeScript", "Firebase"],
    imageUrl: projectImg4,
  },
  {
    title: "ARchitect",
    description:
      "The frontend blog of an application to preview 3D furniture in a room. It shows posts, comments and likes with real-time notifications and also allows you to create an account.",
    tags: ["Vue.js", "axios", "pinia", "Firebase", "Tailwind"],
    imageUrl: projectImg3,
  },
  {
    title: "Andar",
    description:
      "A website for an Argentine medical prepaid. It has the function to select the health insurance plan that the consumer prefers.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: projectImg2,
  },
  {
    title: "BNF Contadores",
    description:
      "My first freelancer project. A single page for an accounting company. Its very simple and clean.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: projectImg1,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "Springboot",
  "Vue.js",
  "Node.js",
  "Git",
  "React",
  "Angular",
  "Kotlin",
  "Tailwind",
  "PostgreSQL",
  "Firebase",
] as const;
