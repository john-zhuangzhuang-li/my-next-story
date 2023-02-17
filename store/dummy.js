export const loopTextData = {
  top: `html{box-sizing:border-box;scroll-behavior:smooth;font-size:62.5%}body{font-family:var(--font-primary);}`,
  bottom: `html{box-sizing:border-box;scroll-behavior:smooth;font-size:62.5%}body{font-family:var(--font-primary);}`,
};

export const certData = [
  {
    id: "certImg01",
    title: "JavaScript",
    gradient: `linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)`,
  },
  {
    id: "certImg02",
    title: "React",
    gradient: `radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )`,
  },
  {
    id: "certImg03",
    title: "CSS and Sass",
    // gradient: `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`,
    gradient: `linear-gradient( 180.2deg,  rgba(128,174,248,1) 14.1%, rgba(50,118,227,1) 77% )`,
  },
  {
    id: "certImg04",
    title: "Web Development",
    gradient: `radial-gradient( circle farthest-corner at 10% 20%,  rgba(62,133,238,1) 1.1%, rgba(227,137,240,1) 43.7%, rgba(243,193,124,1) 89.7% )`,
  },
];

export const skillIconData = [
  {
    id: "icon-html-5",
    order: 1,
    src: "/skill-icons/html-5.svg",
    title: "HTML",
  },
  {
    id: "icon-css-3",
    order: 2,
    src: "/skill-icons/css-3.svg",
    title: "CSS",
  },
  {
    id: "icon-javascript",
    order: 3,
    src: "/skill-icons/javascript.svg",
    title: "JavaScript",
  },
  {
    id: "icon-typescript",
    order: 4,
    src: "/skill-icons/typescript.svg",
    title: "TypeScript",
  },
  {
    id: "icon-react",
    order: 5,
    src: "/skill-icons/react.svg",
    title: "React",
  },
  {
    id: "icon-next-js",
    order: 6,
    src: "/skill-icons/next-js.svg",
    title: "Next.js",
  },
  {
    id: "icon-react-router",
    order: 7,
    src: "/skill-icons/react-router.svg",
    title: "React Router",
  },
  {
    id: "icon-redux",
    order: 8,
    src: "/skill-icons/redux.svg",
    title: "Redux",
  },
  {
    id: "icon-sass",
    order: 9,
    src: "/skill-icons/sass.svg",
    title: "Sass",
  },
  {
    id: "icon-tailwind-css",
    order: 10,
    src: "/skill-icons/tailwind-css.svg",
    title: "Tailwind CSS",
  },
  {
    id: "icon-material-ui",
    order: 11,
    src: "/skill-icons/material-ui.svg",
    title: "MUI",
  },
  {
    id: "icon-chakra-ui",
    order: 12,
    src: "/skill-icons/chakra-ui.svg",
    title: "Chakra UI",
  },
];

export const dummyUser = {
  badgeCounts: {
    bronze: 27,
    silver: 3,
    gold: 2,
  },
  reputation: 6371,
};

export const dummyTags = [
  { id: "so-tag-1", title: "reactjs", score: 149, posts: 205, badge: "bronze" },
  { id: "so-tag-2", title: "css", score: 112, posts: 142, badge: "bronze" },
  { id: "so-tag-3", title: "javascript", score: 87, posts: 108 },
];

// Public api see https://api.stackexchange.com/docs/ for docs
export const soApiBase = "https://api.stackexchange.com";
export const soApiUser =
  "/2.3/users/20436957?order=desc&sort=reputation&site=stackoverflow";
export const soApiTags =
  "/2.3/users/20436957/top-tags?page=1&pagesize=3&site=stackoverflow";
