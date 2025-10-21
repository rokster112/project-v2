import {
  Brain,
  Lightbulb,
  Handshake,
  Target,
  Sprout,
  Puzzle,
} from "lucide-react";
import axios from "../assets/skills/axios-plain.svg";
import cSharp from "../assets/skills/csharp-original.svg";
import css from "../assets/skills/css3-original-wordmark.svg";
import dotnet from "../assets/skills/dot-net-original.svg";
import express from "../assets/skills/express-original.svg";
import figma from "../assets/skills/figma-original.svg";
import firebase from "../assets/skills/firebase-original.svg";
import git from "../assets/skills/git-original.svg";
import github from "../assets/skills/github-original.svg";
import html from "../assets/skills/html5-original.svg";
import javascript from "../assets/skills/javascript-original.svg";
import mongodb from "../assets/skills/mongodb-original.svg";
import netlify from "../assets/skills/netlify-original.svg";
import nodejs from "../assets/skills/nodejs-original.svg";
import postgresql from "../assets/skills/postgresql-original.svg";
import postman from "../assets/skills/postman-original.svg";
import railway from "../assets/skills/railway-original.svg";
import react from "../assets/skills/react-original.svg";
import swagger from "../assets/skills/swagger-original.svg";
import tailwind from "../assets/skills/tailwindcss-original.svg";
import typescript from "../assets/skills/typescript-original.svg";
import vite from "../assets/skills/vitejs-original.svg";
import vscode from "../assets/skills/vscode-original.svg";
import vanlife from "../assets/project-assets/vanlife4you.png";
import portfolio from "../assets/project-assets/portfolio.png";
import animeDatabase from "../assets/project-assets/anime-database.png";
import landingPage from "../assets/project-assets/landing-page.png";
import readIT from "../assets/project-assets/readIT.png";
import weather from "../assets/project-assets/weather.png";
import breakout from "../assets/project-assets/breakout.png";
import dice from "../assets/project-assets/dice.png";
import taskManager from "../assets/project-assets/task-manager.png";
import gamingNerd from "../assets/project-assets/gaming-nerd.png";
import {
  GiCampingTent,
  GiWeightLiftingUp,
  GiConsoleController,
  GiCommercialAirplane,
  GiBasketballBall,
  GiMusicSpell,
} from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";

export const aboutValues = [
  {
    icon: <Brain />,
    title: "Curiosity",
    description:
      "I love digging into how things work. Whether it's a new tool, framework, or feature.",
  },
  {
    icon: <Lightbulb />,
    title: "Clarity",
    description:
      "Clean, maintainable code and straightforward UI go hand in hand.",
  },
  {
    icon: <Handshake />,
    title: "Collaboration",
    description:
      "I enjoy working in teams where ideas are shared and solutions are built together.",
  },
  {
    icon: <Target />,
    title: "Purposeful Design",
    description:
      "Every element in the UI should serve a clear, user-focused purpose.",
  },
  {
    icon: <Sprout />,
    title: "Continuous Growth",
    description:
      "There’s always more to learn — staying sharp and adaptable is key.",
  },
  {
    icon: <Puzzle />,
    title: "Problem Solving",
    description:
      "I enjoy breaking problems down and building practical solutions.",
  },
];

export const commandDisplay = [
  {
    name: "rokas [skillname]",
    description: " - Check if Rokas knows a specific skill",
  },
  {
    name: "list skills",
    description: " - List all available skills",
  },
  {
    name: "compare [skill1] [skill2]...",
    description: " - Compare multiple skills",
  },
  {
    name: "theme [name]",
    description: " - Change terminal theme (dark/light)",
  },
  {
    name: "clear",
    description: " - Clear the terminal (alias: cls)",
  },
  {
    name: "help",
    description: " - Show this help message (alias: ?)",
  },
  {
    name: "play snake",
    description: " - Play snake game",
  },
];

export const skillsValues = [
  { icon: axios, title: "Axios", score: "85", category: "Tool" },
  { icon: cSharp, title: "C#", score: "55", category: "Language" },
  { icon: css, title: "CSS3", score: "85", category: "Frontend" },
  { icon: dotnet, title: ".NET", score: "65", category: "Backend" },
  { icon: express, title: "Express.js", score: "70", category: "Backend" },
  { icon: figma, title: "Figma", score: "80", category: "Tool" },
  { icon: firebase, title: "Firebase", score: "55", category: "Backend" },
  { icon: git, title: "Git", score: "70", category: "Tool" },
  { icon: github, title: "GitHub", score: "80", category: "Tool" },
  { icon: html, title: "HTML5", score: "85", category: "Frontend" },
  { icon: javascript, title: "JavaScript", score: "85", category: "Language" },
  { icon: mongodb, title: "MongoDB", score: "70", category: "Backend" },
  { icon: netlify, title: "Netlify", score: "75", category: "Tool" },
  { icon: nodejs, title: "Node.js", score: "70", category: "Backend" },
  { icon: postgresql, title: "PostgreSQL", score: "70", category: "Backend" },
  { icon: postman, title: "Postman", score: "70", category: "Tool" },
  { icon: railway, title: "Railway", score: "75", category: "Tool" },
  { icon: react, title: "React", score: "85", category: "Frontend" },
  { icon: swagger, title: "Swagger", score: "60", category: "Tool" },
  { icon: tailwind, title: "Tailwind CSS", score: "85", category: "Frontend" },
  { icon: typescript, title: "TypeScript", score: "45", category: "Language" },
  { icon: vite, title: "Vite", score: "60", category: "Tool" },
  { icon: vscode, title: "VS Code", score: "85", category: "Tool" },
];

export const projectList = [
  {
    id: 1,
    title: "VanLife",
    github: "https://github.com/rokster112/vanlife-project",
    website: "https://vanlife4you.netlify.app/",
    tech: [
      "React",
      "CSS",
      "Firebase Firestore",
      "Firebase Authentication",
      "Firebase Storage",
      "Netlify",
    ],
    type: "Full Stack",
    features: [
      "Van listings with detailed descriptions, images, and ratings",
      "Real-time data sync via Firestore backend",
      "Secure authentication with Firebase Auth",
      "User reviews and comments for each van",
      "Responsive and user-friendly interface",
    ],
    image: vanlife,
    description:
      "A full-stack platform where users can explore and review campervans, built with React and Firestore. It includes secure authentication, real-time data sync, and a smooth, responsive UI for an engaging browsing experience.",
  },
  {
    id: 2,
    title: "Portfolio v1",
    github: "https://github.com/rokster112/portfolio",
    website: "https://rokas-portfolio.netlify.app/",
    tech: ["React", "SCSS", "Netlify"],
    type: "Frontend",
    features: [
      "React-based personal portfolio website",
      "Reusable SCSS components with clean visual design",
      "Smooth navigation across all sections",
      "Fully responsive layout for mobile and desktop",
    ],
    image: portfolio,
    description:
      "My first React-based portfolio showcasing projects, skills, and experience. Built with modular SCSS styling, responsive layouts, and clean transitions for a professional and polished presentation.",
  },
  {
    id: 3,
    title: "Anime Database",
    github: "https://github.com/rokster112/Anime-Database",
    website: "https://anime-1-database.netlify.app/",
    tech: ["React", "Jikan API", "Axios", "SCSS", "Netlify"],
    type: "Frontend",
    features: [
      "Dynamic anime catalog powered by Jikan API",
      "Detailed anime pages with synopsis, episodes, and related titles",
      "Asynchronous data fetching and state management with Axios",
      "Responsive SCSS-styled interface",
    ],
    image: animeDatabase,
    description:
      "An anime discovery app that fetches live data using the Jikan API. Users can browse anime details, episodes, and related titles in a clean, responsive interface powered by React and Axios.",
  },
  {
    id: 4,
    title: "Landing Page",
    github:
      "https://github.com/rokster112/layout_landing-page/tree/develop/src",
    website: "https://rokster112.github.io/layout_landing-page/",
    tech: ["CSS", "HTML", "GitHub"],
    type: "Other",
    features: [
      "Pixel-perfect recreation of a Figma design using only HTML and CSS",
      "Fully responsive layout optimized for all screen sizes",
      "Attention to design detail and layout precision",
    ],
    image: landingPage,
    description:
      "A pixel-perfect recreation of a professional landing page design built entirely with HTML and CSS. The focus was on layout accuracy, responsive design, and maintaining high visual fidelity to the original mockup.",
  },
  {
    id: 5,
    title: "ReadIT",
    github: "https://github.com/rokster112/readIT",
    website: "https://readit-v2.netlify.app/",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "Tailwind",
      "Vite",
      "Netlify",
    ],
    type: "Full Stack",
    features: [
      "Reddit-style social app with posts, comments, and voting system",
      "Full CRUD functionality for posts and comments",
      "Like and dislike rating system for content",
      "Modern UI built with React, Tailwind, and Vite",
    ],
    image: readIT,
    description:
      "A Reddit-inspired social platform where users can create posts, comment, and vote on content. The app features full CRUD operations, a like/dislike system, and a modern, responsive UI powered by React and Tailwind.",
  },
  {
    id: 6,
    title: "Weather App",
    github: "https://github.com/rokster112/weather-app",
    website: "https://weather-app-4-u.netlify.app/",
    tech: ["React", "SCSS", "Axios", "Weather API", "Netlify"],
    type: "Frontend",
    features: [
      "Real-time weather data fetched via public Weather API",
      "GPS-based location detection for nearest forecast",
      "Detailed weather info including temperature, humidity, and wind",
      "Clean and responsive SCSS interface",
    ],
    image: weather,
    description:
      "A modern weather app that provides real-time forecasts and detailed weather metrics based on GPS coordinates. It features a clean SCSS interface and seamless API integration using Axios for dynamic updates.",
  },
  {
    id: 7,
    title: "Breakout Game",
    github: "https://github.com/rokster112/breakout-game",
    website: "https://rokster112.github.io/breakout-game/",
    tech: ["HTML", "CSS", "JavaScript", "GitHub"],
    type: "Other",
    features: [
      "Classic Breakout-style arcade game built with HTML, CSS, and JavaScript",
      "Ball physics, paddle control, and brick collision system",
      "Smooth gameplay via optimized DOM and event handling",
      "Completed as part of Google apprenticeship interview within 7 days",
    ],
    image: breakout,
    description:
      "A browser-based recreation of the classic Breakout arcade game built using JavaScript, HTML, and CSS. It features responsive paddle movement, realistic ball physics, and was completed in just 7 days for a Google apprenticeship challenge.",
  },
  {
    id: 8,
    title: "Dice Game",
    github: "https://github.com/rokster112/dice-game",
    website: "https://rokster112.github.io/dice-game/",
    tech: ["HTML", "CSS", "JavaScript", "GitHub"],
    type: "Other",
    features: [
      "Two-player dice game built with HTML, CSS, and JavaScript",
      "Interactive mechanics: roll, hold, and switch turns when rolling 1",
      "Score tracking and player switching logic",
      "Quick practice project to reinforce JavaScript fundamentals",
    ],
    image: dice,
    description:
      "A fun two-player dice game where players roll, hold, and compete to reach the target score. Built with HTML, CSS, and vanilla JavaScript, it was a quick project to strengthen fundamental logic and DOM manipulation skills.",
  },
  {
    id: 9,
    title: "Task Manager",
    github: "https://github.com/rokster112/task-manager",
    website: "https://task-manager-v2.netlify.app/",
    tech: [
      "ASP.NET",
      "C#",
      "React",
      "MongoDB",
      "Tailwind",
      "Vite",
      "Netlify",
      "Railway",
    ],
    type: "Full Stack",
    features: [
      "Full-stack project management system built with ASP.NET, React, and MongoDB",
      "Role-based access control for project members and tasks",
      "Full CRUD for projects, tasks, comments, and users",
      "Task discussions with text and image comments",
      "User profile management: edit username, email, position, avatar, and password",
      "Secure, scalable, and user-friendly collaboration platform",
    ],
    image: taskManager,
    description:
      "A robust full-stack project and task management system with role-based access control and collaborative features. Built with ASP.NET, React, and MongoDB, it supports CRUD operations for users, tasks, and comments — including image uploads and profile customization.",
  },
  {
    id: 10,
    title: "The Gaming Nerd Zone",
    github: "https://github.com/rokster112/project-4-api",
    website: "https://the-gaming-nerd-zone.up.railway.app/",
    tech: ["Django", "Python", "React", "SCSS"],
    type: "Full Stack",
    features: [
      "Full-stack web app built with Django (Python) and React",
      "Full CRUD functionality for games, ratings, and comments",
      "Game listings with user reviews and ratings",
      "Developed in one week as part of General Assembly bootcamp",
    ],
    image: gamingNerd,
    description:
      "A full-stack gaming review platform where users can add, rate, and comment on games. Developed in one week during the General Assembly bootcamp using Django and React, featuring a smooth interface and complete CRUD functionality.",
  },
];

export const hobbiesList = [
  {
    icon: <GiBasketballBall size={32} />,
    title: "Basketball",
    description:
      "I enjoy staying active through basketball. It keeps me sharp, competitive, and connected with friends.",
  },
  {
    icon: <GiCampingTent size={32} />,
    title: "Nature",
    description:
      "Spending time outdoors helps me recharge and stay grounded. I love hiking, fresh air, and quiet places.",
  },
  {
    icon: <GiConsoleController size={32} />,
    title: "Gaming",
    description:
      "I play games for both fun and focus. It’s a great way to challenge myself and unwind creatively.",
  },
  {
    icon: <GiCommercialAirplane size={32} />,
    title: "Travel",
    description:
      "Exploring new cultures and places inspires me. I like seeing how people live and what makes each place unique.",
  },
  {
    icon: <GiWeightLiftingUp size={32} />,
    title: "Fitness",
    description:
      "Regular workouts help me stay focused, disciplined, and energized.",
  },
  {
    icon: <GiMusicSpell size={32} />,
    title: "Music",
    description:
      "I enjoy exploring different genres and languages, it keeps things fresh.",
  },
];

export const budget = [
  "£0 - £100",
  "£101 - £500",
  "£501 - £1000",
  "£1001 - £2000",
  "£2000+",
  "Not sure yet",
];
export const timeline = [
  "Less than 1 month",
  "1-3 months",
  "3-6 months",
  "6+ months",
  "Not sure yet",
];

export const contactInfo = [
  {
    title: "Contact Information",
    email: "rokster112@gmail.com",
    icon: <MdOutlineMailOutline size={32} />,
    iconLabel: "Email",
  },
  {
    title: "Contact Information-2",
    email: "rokas.arlauskass@gmail.com",
    icon: <MdOutlineMailOutline size={32} />,
    iconLabel: "Email",
  },
];
