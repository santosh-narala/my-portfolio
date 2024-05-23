import React from "react";
import { FaReact } from "react-icons/fa";
import { FaIndustry,  } from "react-icons/fa";
import { LuGraduationCap, LuActivitySquare } from "react-icons/lu";
import { GiMeal } from "react-icons/gi";
import { FiActivity } from "react-icons/fi";
import { IoFastFoodSharp } from "react-icons/io5";
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
      "GPA: 9.73/10.0",
    icon: React.createElement(LuGraduationCap),
    date: "2012-2016",
  },
  {
    title: "Software Engineer Intern",
    location: "Mercedes Benz, Bengaluru, India",
    description:
      "Developed bash script plugins to monitoring system resources such as processor load, disk usage, etc. using Nagios development framework.",
    icon: React.createElement(FiActivity),
    date: "June - July, 2015",
  },
  {
    title: "Software Engineer Intern",
    location: "Robert Bosch, Bengaluru, India",
    description:
      "Built an android application for accessing a host machine securely and remotely over a Wi-Fi network.",
    icon: React.createElement(TfiAndroid),
    date: "January - April, 2016",
  },
  {
    title: "Software Technical Lead",
    location: "Applied Materials, Bengaluru, India",
    description:
      "Worked on developing simulation solutions for hardware flows and managed a team of 4",
    icon: React.createElement(MdWork),
    date: "2016-2022",
  },
  {
    title: "MS in Computer Science",
    location: "University of Southern California, Los Angeles, USA",
    description:
      "GPA: 4.0/4.0",
    icon: React.createElement(RiGraduationCapFill),
    date: "2022-2024",
  },
  {
    title: "Software Engineer Intern",
    location: "Chera Health, NJ, USA",
    description:
      "Worked on the payment and invoice systems for a diatrecian based health tracking application",
    icon: React.createElement(IoFastFoodSharp),
    date: "June-August, 2023",
  }
] as const;

export const projectsData = [
  
  {
    title: "Weenix Operating System",
    description: 'Engineered kernel modules, synchronization primitives, a Virtual File System, and a Virtual Memory module for the Weenix OS, enhancing process/thread management and system performance. Constructed a robust, adaptable file system interface and improved user space execution efficiency.',
    tags: ["C", "Qemu", "GNU/Linux"],
    imageUrl: kernellogo,
  },
  {
    title: "Token Bucket Filter Emulator",
    description:"Developed a multi-threaded token bucket filter emulator using pthreads, ensuring thread safety with mutex synchronization. Implemented Unix signal handling, dynamic mode features, and a comprehensive logging system for enhanced adaptability and performance transparency.",
    tags: ["C", "GNU/Linux", "MultiThreading"],
    imageUrl: tokenlogo,
  },{
    title: "Event Search - A Smart Event Discovery Web App",
    description:" Created a dynamic web app with Angular CLI and Express.js, integrating Ticketmaster and Spotify APIs for event details, artist albums, and enriched user experiences.",
    tags: ["React", "Express JS", "Android app development"],
    imageUrl: event,
  },{
    title: "Stock Track: Monitor and Trade NASDAQ/NYSE listed stocks",
    description:" Created an android app with Node backend and MongoDB for storing watchlist and portfolios, integrating Finnhub and Polygon APIs for stock details and HighCharts for visualization.",
    tags: ["Android", "MongoDB", "Node.js"],
    imageUrl: stockLogo,
  }
] as const;

export const skillsData = [
  "Python",
  "Java",
  
] as const;