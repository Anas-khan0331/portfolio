import {
  backend,
  carrent,
  creator,
  css,
  figma,
  foreverCommerce,
  git,
  gold1,
  gold2,
  html,
  hustlerCommerce,
  javascript,
  jobit,
  mobile,
  mongodb,
  nikeStore,
  nodejs,
  qrMenu,
  reactjs,
  redux,
  tailwind,
  tripguide,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Web Applications",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "InternShip",
    company_name: "EasyStay",
    icon: html,
    iconBg: "#383E56",
    date: "Feb 2021 - August 2021",
    points: [
      "Learn Languages important for Web-Development",
      "Learn Html,Css,Bootstrap",
      "Learn to develop PSD's and static Web Pages",
      "Built many Websites for Practice",
    ],
  },
  {
    title: "Training Period",
    company_name: "Seebiz limited",
    icon: css,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - march 2022",
    points: [
      "Developing and maintaining web applications using JavaScript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "junior Web Developer",
    company_name: "IT Solz",
    icon: javascript,
    iconBg: "#383E56",
    date: "June 2022 - may 2023",
    points: [
      "Developing and maintaining web applications using Bootstrap, jQuery and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "TransCure",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using MERN and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Anas proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Anas does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Anas optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nike Store",
    description:
      "A sleek and high-performance platform designed for the Nike brand, built using React and Tailwind CSS. This website delivers an immersive and responsive user experience, highlighting Nike's products with a modern and visually captivating interface.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: nikeStore,
    source_code_link: "https://github.com/khansaab0331/",
  },
  {
    name: "QR Menu Maker",
    description:
      "A sleek and high-performance platform built using MUI and Vite, offering multilingual support and a user-friendly experience. This website features an i18n language translation system that allows users to seamlessly select their preferred language.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: qrMenu,
    source_code_link: "https://github.com/khansaab0331/",
  },
  {
    name: "Forever Ecommerce",
    description:
      "A cutting-edge e-commerce platform built using Redux Toolkit Query, Tailwind CSS, Vite, and PNPM. This platform is designed for scalability and performance, offering a seamless shopping experience with modern tools and practices.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: foreverCommerce,
    source_code_link: "https://github.com/khansaab0331/",
  },
  {
    name: "ZAHN Gold 1",
    description:
      "An elegant and high-performance platform designed specifically for the gold industry, built using React, Bootstrap, and Vite. This website offers a seamless and secure browsing experience while showcasing gold products in a visually appealing and user-friendly interface.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "next.js",
        color: "white-text-gradient",
      },
      {
        name: "vite",
        color: "white-text-gradient",
      },
      {
        name: "api",
        color: "white-text-gradient",
      },
    ],
    image: gold1,
    source_code_link: "https://github.com/khansaab0331/",
  },
  {
    name: "ZAHN Gold 2",
    description:
      "An elegant and high-performance platform designed specifically for the gold industry, built using React, Bootstrap, and Vite. This website offers a seamless and secure browsing experience while showcasing gold products in a visually appealing and user-friendly interface..",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "next.js",
        color: "white-text-gradient",
      },
      {
        name: "vite",
        color: "white-text-gradient",
      },
      {
        name: "api",
        color: "white-text-gradient",
      },
    ],
    image: gold2,
    source_code_link: "https://github.com/khansaab0331/",
  },
  {
    name: "Hustlers Commerce",
    description:
      "An advanced e-commerce platform built using Redux Toolkit Query, Next.js, and Material-UI (MUI) to deliver a seamless shopping experience. This platform is designed with modern development practices and features robust state management.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "white-text-gradient",
      },
      {
        name: "vite",
        color: "white-text-gradient",
      },
      {
        name: "api",
        color: "white-text-gradient",
      },
    ],
    image: hustlerCommerce,
    source_code_link: "https://github.com/khansaab0331/",
  },
  {
    name: "React Dashboard",
    description:
      "Create a React dashboard with useful overviews, customizable with drag and toggle widgets, configurable tiles.Dashboards are great way to quickly provide users with an overview of relevant information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/khansaab0331/",
  },
  {
    name: "London Job.Co",
    description:
      "The primary focus being retailing of the above-mentioned brands through flagship boutiques/ mono-brand outlets in  the major cities as well as establishing a distribution network through a dealership network",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://nike-store-gt60qbaaf-khansaab-0331.vercel.app/?vercelToolbarCode=9BKmq4C9_eRdY7C",
  },
  {
    name: "Atomize",
    description:
      "Atomize React is a UI framework that helps developers collaborate with designers and build consistent user interfaces.Atomize React helps you in building fully responsive websites and products that match your style.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/khansaab0331/",
  },
];

export { experiences, projects, services, technologies, testimonials };
