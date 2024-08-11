import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import NotesAppImg from "@/public/NotesApp.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer | Arya Global Private Ltd",
    location: "Mumbai, IN",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a full-stack developer. Experienced Full Stack Developer adept in Angular, TypeScript, HTML5, and CSS3. Contributed to the development of user and web UI for CBX projects targeting US and Indian markets. Collaborated with a 7-member team in implementing real-time transaction payment monitoring systems.",
    icon: React.createElement(LuGraduationCap),
    date: "JUNE 2024 - PRESENT",
  },
  {
    title: "Full-Stack Developer | Intellect Design Arena",
    location: "Chennai, IN",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a full-stack developer. Experienced Full Stack Developer adept in Angular, TypeScript, HTML5, and CSS3. Contributed to the development of user and web UI for CBX projects targeting US and Indian markets. Collaborated with a 7-member team in implementing real-time transaction payment monitoring systems.",
    icon: React.createElement(LuGraduationCap),
    date: "JUNE 2023 - FEB 2024",
  },
  {
    title: "Front-End Developer | Sahu Technologies",
    location: "Mumbai, IN",
    description:
      "Front-end Developer for 2 months, transitioning to Full Stack Developer. Proficient in React.js, Node.js, MongoDB, CSS3, and HTML5. Developed a pizza delivery app enabling user-friendly browsing, customization, ordering, and real-time delivery tracking for customers. Managed orders, menu updates, and delivery tracking for staff members on the admin side.",
    icon: React.createElement(CgWorkAlt),
    date: "DEC 2022 - JAN 2023",
  },
  {
    title: "Python Developer | Dezignolics Web and Software Company",
    location: "Mumbai, IN",
    description:
      "Completed a 3-week core Python training and internship in 2021. Developed a Student Login GUI using Tkinter, storing user details in Notepad. Proficient in Python and Tkinter.",
    icon: React.createElement(FaReact),
    date: "FEB 2021 - MAR 2021",
  },
] as const;

export const projectsData = [
  {
    title: "UI-UX GPT3",
    description:
      "Created a responsive React JS website integrating GPT-3, with curated blog and library sections.",
    tags: ["React JS", "HTML5", "CSS3", "Javascript"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/muskan-272001/Ui-Ux_GPT3",
    liveUrl: "https://ui-ux-gpt-3-jet.vercel.app/",
  },
  {
    title: "CodePen Clone",
    description:
      "Online code editor for testing HTML, CSS, and JavaScript snippets.",
    tags: ["React JS", "HTML5", "CSS3", "Javascript"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/muskan-272001/CodePenClone",
    liveUrl:
      "https://663607a4456725cae3a1a7b6--dynamic-panda-687586.netlify.app/",
  },
  {
    title: "Fitness Tracker",
    description:
      "A responsive Fitness Tracker with features like user profiles, workout logging, & visualized fitness statistics using dynamic charts.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/muskan-272001/Fitness-Tracker",
    liveUrl: "https://fitness-tracker-eosin-beta.vercel.app/",
  },
  {
    title: "NotesAPP.API",
    description:
      "Created a new Web API using Visual Studio Web API template and implemented CRUD operations and Dependency Injection",
    tags: ["ASP.NET Core", "MySQL", "Angular", "C#"],
    imageUrl: NotesAppImg,
    githubUrl: "https://github.com/muskan-272001/NotesApp_ASP.NET",
    liveUrl: "https://github.com/muskan-272001/NotesApp_ASP.NET",
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "NextJs",
  "NodeJs",
  "Git",
  "Tailwind CSS",
  "AngularJS",
  "MongoDB",
  "Python",
  "C/C++",
  "Java",
  "Framer Motion",
  "ASP.NET",
  "C#",
  "Wordpress"
] as const;
