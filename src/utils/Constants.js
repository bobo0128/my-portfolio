import sandvine from "../images/logo/sandvine.jpg";
import liitcare from "../images/logo/liitcare.png";
import { createSkillGroup } from "./helper";
import React from "react";
import {
  faHouse,
  faEnvelope,
  faSquarePollHorizontal,
  faChartPie,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import homeBackground from '../images/bg-6.jpg';

export const menus = [
  {
    id: "home",
    textValue: "Home",
    component: React.lazy(() => import("../pages/Home")),
    href: "#home",
    icon: faHouse,
    background: homeBackground
  },

  {
    id: "skills",
    textValue: "Skills",
    component: React.lazy(() => import("../pages/Skills")),
    href: "#skills",
    icon: faChartPie,
  },

  {
    id: "experience",
    textValue: "Experience",
    component: React.lazy(() => import("../pages/Experience")),
    href: "#experience",
    icon: faSquarePollHorizontal,
  },

  {
    id: "playground",
    textValue: "Playground",
    component: React.lazy(() => import("../pages/MyPlayground")),
    href: "#playground",
    icon: faCubes,
  },

  {
    id: "contact",
    textValue: "Contact",
    component: React.lazy(() => import("../pages/ContactMe")),
    href: "#contact",
    icon: faEnvelope,
  },
];

export const experiences = [
  {
    icon: liitcare,
    date: "Jul 2021 - Sep 2021",
    location: "Airdrie, Canada",
    experience_title: "Web Developer Internship",
    company_name: "LiiT Care Connect Inc.",
    description:
      "Working as a web developer for an internship. Design, build and maintain the current platform with PHP and Laravel." +
      "• Write, design, and edit web page content." +
      "• Design MYSQL tables for new features. " +
      "• Analyze user needs to determine technical requirements." +
      "• Develop databases that support new features." +
      "• Write requirement documents." +
      "• Coding on frontend and backend." +
      "• Designed and developed shopping cart functionality",
  },
  {
    icon: sandvine,
    date: "Aug 2019 - Jan 2020",
    location: "Waterloo, Canada",
    experience_title: "Software Engineer II",
    company_name: "Sandvine",
    description:
      "Founded a community that develops solutions for and educates 150+ students about Data Science through live classes. Participated in all aspects of Business development from Market Research and finance to operations and marketing. Formulated the Community's vision, goals, and objectives, making education personalized for the masses, irrespective of their socio-economic status, to all age groups of society.",
  },
];

export const skillset = [
  createSkillGroup(
    "Frontend Skills",
    ["React & Redux", "JavaScript", "TypeScript", "HTML + CSS"],
    [2, 10, 1, 10]
  ),
  createSkillGroup(
    "Backend Skills",
    ["Java", "Spring Boot", "Node.js", "Express.js", "PHP", "Python", "Redis"],
    [10, 3, 2.5, 2, 0.5, 0.5, 2]
  ),
  createSkillGroup(
    "DevOps",
    ["Docker", "Kubernetes", "OpenShift", "Jenkins", "CI/CD Pipelines"],
    [2, 0.5, 0.2, 2, 2]
  ),
  createSkillGroup(
    "Database",
    ["MySQL", "Oracle", "Sql Server", "DB2", "Vertica", "MongoDB"],
    [2, 6, 1, 2, 2, 1]
  ),
];


export const skillsSummary = [
  '3 years of intensive full-stack development utilizing cutting-edge technologies, including React, Node.js, and Java.',
  '• Over 10 years of experience in Java software development.',
  '• Strong knowledge of Java/J2EE and Spring Boot framework.',
  '• Experienced in application/web servers like WebLogic, JBoss and Tomcat.',
  '• Proficient in developing REST APIs',
  '• Proficient in daily use of version control and CI/CD tools, including Git, GitLab and Jenkins, as well as project management and issue tracking using Jira.',
  '• Experienced with relational and non-relational databases such as Oracle, SQL Server, DB2, MySQL, Vertica and MongoDB.',
  '• Knowledgeable in authentication and authorization protocols, such as OAUTH',
  '• Extensive experience in developing and managing microservices architectures',
  '• Experienced with DevOps essential tools like Docker, Git, Jenkins and Kubernetes',
  '• Experience in creating Docker Containers from scratch and automating build and development processes using shell scripting',
  '• Extensive experience in Agile environments using Scrum, actively participating in spring planning, spring reviews, spring resrospectives, and backlog grooming.',
  '• Extensive experience with a wide range of tools like Chrome DevTools and postman.',
  '• Experienced in architectural design, addressing non-functional requirements such as scalability, performance, and security, and conducting solution design risk assessments to identify and mitigate potential issues.',
];
