import sandvine from "../images/logo/sandvine.jpg";
import liitcare from "../images/logo/liitcare.png";
import {createSkillGroup} from './helper';

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
  createSkillGroup ('Frontend Skills', ['React & Redux', 'JavaScript', 'TypeScript', 'HTML + CSS'], [2, 10, 1, 10]),
  createSkillGroup ('Backend Skills', ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'PHP', 'Python', 'Redis'], [10, 3, 2.5, 2, 0.5, 0.5, 2]),
  createSkillGroup ("DevOps", ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines'], [2, 2, 1.5, 2]),
];
// const frontendSkills = ['React & Redux', 'JavaScript', 'TypeScript', 'HTML + CSS'];
// const frontendData = [2, 10, 1, 10];

// const backendSkills = ['Java', 'Spring Boot', 'Node.js', 'Express.js'];
// const backendData = [10, 3, 2.5, 2];

// const devOpsSkills = ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines'];
// const devOpsData = [2, 2, 1.5, 2];
