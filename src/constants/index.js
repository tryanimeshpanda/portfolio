import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  keeper,
  realtor,
  legourmet,
  threejs,
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
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: backend,
  },
  {
    title: "Public Speaker",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Lorem ipsum dolor",
    company_name: "Lorem ipsum dolor",
    icon: creator,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    ],
  },
  {
    title: "Lorem ipsum dolor",
    company_name: "Lorem ipsum dolor",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    ],
  },
  {
    title: "Lorem ipsum dolor",
    company_name: "Lorem ipsum dolor",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I have to say, this web developer is truly impressive. If you're looking to create a web presence that stands out from the crowd, this web developer is the one you want on your team.",
    name: "Elon Musk",
    designation: "CEO",
    company: "Tesla",
    image: "https://wallpapercave.com/wp/wp2048442.jpg",
  },
  {
    testimonial:
      "This web developer is a game-changer, and I highly recommend them to anyone looking to take their web presence to the next level.",
    name: "Kanye West",
    designation: "Founder",
    company: "Yeezy",
    image: "https://mobimg.b-cdn.net/v3/fetch/8f/8fd9530f931ed07f1793fa91f25734e0.jpeg",
  },
  {
    testimonial:
      "Whether you're looking to build a simple website or a complex web application, I highly recommend this web developer for their exceptional skills, professionalism, and unwavering commitment to quality.",
    name: "Tony Stark",
    designation: "CEO",
    company: "Stark Industries",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccjztO7kjiFpahEmy65ENbwx4MlaeMo8HeZRls6XQA8HqL8TnoyEyl5AwS9-JUx9Wp2w&usqp=CAU",
  },
];

const projects = [
  {
    name: "Keeper",
    description:
      "A Web Application that serves multiple purposes such as an E-Diary, A To-do List and also as a Daily Planner for everyday activities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: keeper,
    source_code_link: "https://4vky71.csb.app/",
  },
  {
    name: "Realtor",
    description:
      "This is Web application that enables users to purchase or rent properties online. Users can browse through available properties and access details such as pricing, amenities, and images of the property.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: realtor,
    source_code_link: "https://realtor.vercel.app/",
  },
  {
    name: "Le Gourmet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: legourmet,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };