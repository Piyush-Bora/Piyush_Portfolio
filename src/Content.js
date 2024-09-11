// import images
import Hero_person from "./assets/images/Hero/piyush.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "PIYUSH",
    LastName: "BORA",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experience in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Markup language for web structure.",
        logo: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
      },
      {
        name: "CSS",
        para: "Stylesheets for web presentation.",
        logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      },
      {
        name: "Tailwind CSS",
        para: "Utility-first CSS framework.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
      },
      {
        name: "JavaScript",
        para: "Interactive web programming language.",
        logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
      {
        name: "ReactJS",
        para: "Library for building UIs.",
        logo: "https://cdn-icons-png.flaticon.com/512/760/760457.png",
      },
      {
        name: "AngularJS",
        para: "Framework for dynamic web apps.",
        logo: "https://th.bing.com/th/id/OIP.FFvMsDBfJpitfMsfaiuQwgHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      },
      // {
      //   name: "Python",
      //   para: "Versatile high-level language.",
      //   logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      // },
      {
        name: "C/C++",
        para: "Powerful, efficient programming languages.",
        logo: "https://th.bing.com/th/id/OIP.FIOlwRb1ITHhWbOGxVgV4gHaHa?w=212&h=212&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      },
      {
        name: "MySQL",
        para: "Popular relational database system.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlygBZ1TrcGKZlQgk7FW8XfqwMB5HGXJr8AidPMuglLe8z8Z1WHK_aSj0AfJTHDB9J2aw&usqp=CAU",
      },
      {
        name: "Figma",
        para: "Design tool for interfaces.",
        logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      },
      {
        name: "Photoshop",
        para: "Image editing and design.",
        logo: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
      },
      // {
      //   name: "InDesign",
      //   para: "Desktop publishing and layout.",
      //   logo: "https://cdn-icons-png.flaticon.com/512/5968/5968482.png",
      // },
      // {
      //   name: "Premiere Pro",
      //   para: "Video editing software.",
      //   logo: "https://cdn-icons-png.flaticon.com/512/5968/5968525.png",
      // },
      // {
      //   name: "After Effects",
      //   para: "Motion graphics and effects.",
      //   logo: "https://cdn-icons-png.flaticon.com/512/5968/5968428.png",
      // },
      {
        name: "Canva",
        para: "Graphic design made easy.",
        logo: "https://www.freelogovectors.net/wp-content/uploads/2021/12/canva-logo-app-freelogovectors.net_.png",
      },
      {
        name: "GitHub",
        para: "Code repository and versioning.",
        logo: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
      },
      // {
      //   name: "OBS",
      //   para: "Software for streaming and recording.",
      //   logo: "https://banner2.cleanpng.com/20180411/qve/kisspng-open-broadcaster-software-computer-software-comput-studio-5ace5f9f9c5f33.2137552515234743356405.jpg",
      // },
      {
        name: "C# Dotnet",
        para: "Microsoft's programming framework.",
        logo: "https://th.bing.com/th/id/OIP.BuejBDkS51ZUvyqh7JKaCQHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      },
      {
        name: "Java",
        para: "Versatile object-oriented language.",
        logo: "http://ts2.mm.bing.net/th?id=OIP.eyVWUDy9kDXVGDGv1Ev4iAAAAA&pid=15.1",
      },
      {
        name: "AWS",
        para: "Cloud computing services platform.",
        logo: "https://th.bing.com/th/id/OIP.Sd4Hxz8_CqID29kyj5-k9wHaEc?w=310&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      },
      {
        name: "SQL Server",
        para: "Microsoft's relational database management.",
        logo: "https://th.bing.com/th/id/OIP.sluuRP9RbH3MPqzbFNLEmQHaF_?w=215&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Building modern, responsive websites using cutting-edge technologies for an optimal user experience.",
        logo: services_logo1,
      },
      {
        title: "UI / UX Designing",
        para: "Creating intuitive and engaging designs that enhance user experience and drive meaningful interactions.",
        logo: services_logo2,
      },
      // {
      //   title: "PhotoShop Editing",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo3,
      // },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        id: "p1",
        title: "Daily Wage Workers",
        description:
          "Developed a website for easing the job finding for daily wage workers. The recruiters post their job requirements and the worker then chooses the job according to his preferences.",
        tech: ["Tailwind-CSS", "Django"],
        img: "https://media.istockphoto.com/vectors/construction-staff-characters-design-include-foreman-painter-team-vector-id1081790264?k=20&m=1081790264&s=612x612&w=0&h=TIN4U37wmzbyFgsN8ty3kh3h9oMtzGuDuO4ZhoIzbeY=",
        github: "https://github.com/deveshbedmutha1406/final_pbl",
        hostURL: "/",
      },
      {
        id: "p2",
        title: "News Reading Website",
        description:
          "Made a news Reading Website for daily news updates. This app fetches data from an API category-wise and displays it in the form of cards to the user which are redirected to the article.",
        tech: ["Tailwind-CSS", "ReactJS", "Fetch-API"],
        img: "https://news.mit.edu/sites/default/files/images/202109/MIT-Facebook-Facts-01-press.jpg",
        github: "https://github.com/Piyush-Bora/NewsMonkey",
        hostURL: "/",
      },
      {
        id: "p3",
        title: "Jersey Store",
        description:
          "Developed a website for easing the job finding for daily wage workers. The recruiters post their job requirements and the worker then chooses the job according to his preferences.",
        tech: ["Tailwind-CSS", "ReactJS"],
        img: "https://cdn.dribbble.com/users/2414448/screenshots/16916963/media/089dd75237ef3a9f4ea07241fbb3dd11.png?compress=1&resize=400x300",
        github: "https://github.com/Piyush-Bora/Jersey_Store",
        hostURL: "https://jerseystore.netlify.app/",
      },
      {
        id: "p4",
        title: "WhatsApp Pinger",
        description:
          "Developed a website for easing the task of messaging someone on WhatsApp without ssaving their phone number. User has to enter the phone Number and that contact will open in whatsApp.",
        tech: ["Tailwind-CSS", "ReactJS"],
        img: "https://cdn.dribbble.com/userupload/3020703/file/original-80ecfa10e4fbbb510183df9a9e75d0a2.png?resize=400x0",
        github: "/",
        hostURL: "https://simplewa.netlify.app/",
      },
      {
        id: "p5",
        title: "Technopedia",
        description:
          "Developed a website for a hackathon in PCCOE College. This website gives a introduction of the technical world, courses and roadmaps for different technologies.",
        tech: ["Tailwind-CSS", "ReactJS"],
        img: "https://pcprd.azureedge.net/content/c541aa03f724.jpg",
        github: "/",
        hostURL: "https://technopedia-piyush-bora.netlify.app/",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
  WorkEx: {
    title: "Work Experience",
    subtitle: "PLACES I WORKED AT",
    experiences: [
      {
        company: "Amber Student",
        date: "May 2023 - Jan 2024",
        role: "FrontEnd Developer Intern",
        achievements: [
          "Developed API to retrieve user location data, boosting lead generation by 5% and facilitating traffic analysis.",
          "Revamped websites in Webflow for a cleaner UI, positively impacting user experience.",
          "Enhanced tracking capabilities by adding GTM events for better analytics.",
          "Integrated MoEngage SDK for web push notifications, increasing user engagement and conversion.",
          "Improved website SEO by 22% using anchor-based titles and paginations.",
          "Collaborated effectively in an agile environment, delivering high-quality solutions and fostering a positive team atmosphere.",
        ],
        skills: ["UI/UX", "Photoshop", "Illustrator", "Figma", "Canva"],
        link: "https://amberstudent.com/",
      },
      {
        company: "Sanspots",
        date: "Jan 2023 - Apr 2023",
        role: "UI/UX Designer Intern",
        achievements: [
          "Designed user-centric interfaces for web and mobile applications.",
          "Conducted user research and usability testing to inform design decisions.",
          "Collaborated with cross-functional teams to ensure alignment throughout the design and development process.",
        ],
        skills: ["UI/UX", "Photoshop", "Illustrator", "Figma", "Canva"],
        link: "https://www.wevibrancy.com/",
      },
      // Add more work experiences here following the same structure
      {
        company: "AutomatonAI",
        date: "Oct 2022 - Dec 2022",
        role: "Frontend Web Developer Intern",
        achievements: [
          "Worked on new website for the AdaptAI product using MERN stack.",
          "Learnt the basics of Angular and implemented knowledge in existing websites.",
          "Gained experience working in a team, improving communication and collaboration skills.",
        ],
        skills: ["HTML", "CSS", "ReactJS", "Rest API"],
        link: "https://www.wevibrancy.com/",
      },
      // { ... (Optional: Add your graphic design internship details here) }
    ],
  },
};
