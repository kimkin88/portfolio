import {
  mobile,
  appleton_estate,
  baker_street,
  balmain,
  eaton,
  glide,
  jagermeister,
  life_twig,
  lyft,
  seda,
  velo,
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
  senamasoft,
  midnightstudio,
  styled_components,
  nextjs,
} from "../assets";

export const aboutText =
  "I'm front-end developer with over 1,5 years of experience in commercial development, creation and support of responsive websites related to various business areas. Have knowledge of HTML, CSS, JavaScript and React and other related technologies. Passionate about learning and development to implement skills in problem solving and to find ways to maximize user efficiency. I am interested in achieving goals in both front-end and back-end development.";

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
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native (Expo) Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
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
    name: "Styled Components",
    icon: styled_components,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "SenamaSoft",
    icon: senamasoft,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js, Node.js (express), React Native.",
      "Collaborating with designer, product manager and other developers.",
      "Implementing responsive design, creating mobile application for IOS and Android platforms, acquaintance with webRTC, react-map-gl, socket.io and other technologies",
    ],
  },
  {
    title: "React.js (Next.js) Developer",
    company_name: "Midnightstudio",
    icon: midnightstudio,
    iconBg: "#383E56",
    date: "May 2022 - Aug 2023",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, testers, techlead and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Life Twig",
    description:
      "A thematic social network for finding relatives with the ability to build a tree of generations, communicate by sending text messages, photos, videos, video calls, etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs(express)",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "reactnative(expo)",
        color: "orange-text-gradient",
      },
    ],
    image: life_twig,
    source_code_link: "https://www.lifetwig.com/",
  },
  {
    name: "Appleton Estate",
    description:
      "Mobile web application with presentation Jamaican rum, with possibility to scan the bottles of rome to get their's secrets.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "formik",
        color: "orange-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: appleton_estate,
    source_code_link: "https://appletonestate.io.tt/montego-bay",
  },
  {
    name: "Baker Street Interactive",
    description:
      "Presentation of a business platform for finding comfortable offices in the center of London. It is based on an interactive slider with the ability to connect remotely.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "contentful",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
      {
        name: "keen-slider",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: baker_street,
    source_code_link:
      "https://166435-llco-baker-street-interactive.vercel.app/",
  },
  {
    name: "Balmain x Pokémon",
    description:
      "A wonderful animated web-application for a famous haute couture house (supporting 9 languages): you can win fashionable clothes with the help of NFC (special patches); the user enters the app with a unique ID, signs up and takes part in the lottery.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: balmain,
    source_code_link: "https://balmain.io.tt/pokemon",
  },
  {
    name: "EATON",
    description: "Website for a novice japanese company-investor.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "rebass",
        color: "pink-text-gradient",
      },
    ],
    image: eaton,
    source_code_link: "https://167535-eaton.vercel.app/",
  },
  {
    name: "Glide (homepage)",
    description:
      "Creation of the main page for a large well-known business platform.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: glide,
    source_code_link: "https://www.glideapps.com/",
  },
  {
    name: "Jagermeister",
    description:
      "Contact Form for Subscribing to an Exclusive Newsletter on Nightlife and Life Events inside Jagermeister.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react-hook-form",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: jagermeister,
    source_code_link: "https://166963-jagermeister-form.vercel.app/",
  },
  {
    name: "SEDA",
    description:
      "Beautiful animated presentation site of the company and its employees working with Web3.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "react-player",
        color: "orange-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: seda,
    source_code_link: "https://www.seda.xyz/",
  },
  {
    name: "LYFT lab Collections",
    description:
      "Mobile web application for British American Tobacco which is a questionnaire in connection with the emergence of new LYFT snus flavors with scoring and feedback.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: lyft,
    source_code_link: "https://lyft.io.tt/lab",
  },
  {
    name: "Velo x Tomorrowland",
    description:
      "Mobile web application for British American Tobacco with a possibility to win exclusive print of a famous artist - Ed Burkes.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: velo,
    source_code_link: "https://velo.io.tt/tomorrowland",
  },
];

export { services, technologies, experiences, projects };
