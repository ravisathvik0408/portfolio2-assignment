import portfolioImg from '../assets/portfolio.png';
import webImg from '../assets/web.png';
import planeImg from '../assets/plane.png';

export const projectsData = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    image: portfolioImg,
    description: "A responsive, accessible portfolio layout built without external CSS frameworks, featuring high-contrast themes and CSS Grid layout.",
    techStack: ["HTML5", "CSS3", "Flexbox", "React"],
    detailedDescription: "Converts a static HTML/CSS template into a multi-page React application with client-side routing, theme toggles, and state management."
  },
  {
    id: "code-summarizer",
    title: "Code Summarizer",
    image: webImg,
    description: "An NLP-driven tool that analyzes source code structures, converts complex compiler errors into plain language explanations, and generates concise technical summaries.",
    techStack: ["Python", "NLP", "Compiler Parsing"],
    detailedDescription: "Parses AST and compiler diagnostics to output simplified error messages and code summaries."
  },
  {
    id: "flight-booking-schema",
    title: "Flight Booking Schema",
    image: planeImg,
    description: "Comprehensive relational database design for airline management, including dynamic views, constraints, and PL/SQL procedures.",
    techStack: ["MySQL", "Relational Design", "SQL", "PL/SQL"],
    detailedDescription: "Features database schema design up to BCNF with automated triggers and stored procedure routines."
  }
];