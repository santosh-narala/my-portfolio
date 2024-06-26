import React from "react";
import { LuGraduationCap, LuActivitySquare } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";
import { MdFastfood } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";




import { TfiAndroid } from "react-icons/tfi";
import event from "@/public/event.png";
import kernellogo from "@/public/kernel_logo.png";
import tokenlogo from "@/public/token_bucket.png";
import stockLogo from "@/public/stock_search.png";


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
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.E in Computer Science",
    location: "SJCE, Mysuru",
    description:
      ["GPA: 9.73/10.0"],
    icon: React.createElement(LuGraduationCap),
    date: "2012-2016",
  },
  {
    title: "Software Engineer Intern",
    location: "Mercedes Benz, Bengaluru, India",
    description:
[      "Developed bash script plugins to monitoring system resources such as processor load, disk usage, etc. using Nagios development framework."],    icon: React.createElement(FiActivity),
    date: "June - July, 2015",
  },
  {
    title: "Software Engineer Intern",
    location: "Robert Bosch, Bengaluru, India",
    description:
      ["Built an android application for accessing a host machine securely and remotely over a Wi-Fi network."],
    icon: React.createElement(TfiAndroid),
    date: "January - April, 2016",
  },
  {
    title: "Software Technical Lead",
    location: "Applied Materials, Bengaluru, India",
    description:
      ["- Improved tool performance by implementing WebSocket communication in place of long polling with vendor devices, significantly reducing idle device calls",
      "- Led a team of four in developing advanced simulation solutions for hardware workflows, improving efficiency and accuracy",
      "- Played a key role in the transition from a monolithic code base to a microservice architecture, enhancing system modularity and scalability."],
    icon: React.createElement(MdWork),
    date: "2016-2022",
  },
  {
    title: "MS in Computer Science",
    location: "University of Southern California, Los Angeles, USA",
    description:
      ["GPA: 4.0/4.0"],
    icon: React.createElement(RiGraduationCapFill),
    date: "2022-2024",
  },
  {
    title: "Software Engineer Intern",
    location: "Chera Health, NJ, USA",
    description:
      ["Worked on the payment and invoice systems for a diatrecian based health tracking application"],
    icon: React.createElement(MdFastfood),
    date: "June-August, 2023",
  },
] as const;

export const projectsData = [
  
  {
    title: "Weenix Operating System",
    description: 'Engineered kernel modules, synchronization primitives, a Virtual File System, and a Virtual Memory module for the Weenix OS, enhancing process/thread management and system performance. Constructed a robust, adaptable file system interface and improved user space execution efficiency.',
    tags: ["C", "Qemu", "GNU/Linux"],
    imageUrl: kernellogo,
    links: {},
  },
  {
    title: "Event Search - A Smart Event Discovery Web App",
    description:" Created a dynamic web app with Angular CLI and Express.js, integrating Ticketmaster and Spotify APIs for event details, artist albums, and enriched user experiences.",
    tags: ["React", "Express JS", "Android app development"],
    imageUrl: event,
    links: {"React Web Page Demo": "https://youtu.be/K-U4K1BpPms", "Android App Demo": "https://youtu.be/LrulE0KM9m8"},
  },{
    title: "Stock Track: Monitor and Trade NASDAQ/NYSE listed stocks",
    description:" Created an android app with Node backend and MongoDB for storing watchlist and portfolios, integrating Finnhub and Polygon APIs for stock details and HighCharts for visualization.",
    tags: ["Android", "MongoDB", "Node.js"],
    imageUrl: stockLogo,
    links: {"App Demo":"https://youtu.be/pCiAGPnSWBk"}
  },{
    title: "Token Bucket Filter Emulator",
    description:"Developed a multi-threaded token bucket filter emulator using pthreads, ensuring thread safety with mutex synchronization. Implemented Unix signal handling, dynamic mode features, and a comprehensive logging system for enhanced adaptability and performance transparency.",
    tags: ["C", "GNU/Linux", "MultiThreading"],
    imageUrl: tokenlogo,
    links: {},
  }
] as const;

export const skillsData = [
  "Java",
"Python",
"JavaScript",
"C++",
"C#",
"Go",
"Scala",
"ReactJS",
"NodeJS",
"REST",
"Django",
"Spring Boot",
"Docker",
"Jenkins",
"ElasticSearch",
"AWS",
"GCP",
"GraphQL",
"Git",
"Maven", 
] as const;

export const achievements = [
  {
    description: "Selected into the Computer Science Student Honors Program (Master's) at University of Southern California  (GPA: 4.0/4.0)",
    issuedBy: "University of Southern California",
    date: "2024"
  },
  {
    description: "Received Gold Medal for excellent academic performance and securing top rank amongst ~160 students. (Rank: 1 / 160)",
    issuedBy: "SJCE, Mysuru",
    date: "2016"
  },
  {
    description: "Secured 1st place out of 65 teams at Applied Materials 2019 Hackathon by developing an AI Image Generator for calibrations.",
    issuedBy: "Applied Materials",
    date: "2019"
  },
  {
    description: "Winner of Applied Materials RAP Challenge 2017 for developing a confluence plugin helpful for conducting sprint retrospective meetings.",
    issuedBy: "Applied Materials",
    date: "2017"
  }
] as const;
