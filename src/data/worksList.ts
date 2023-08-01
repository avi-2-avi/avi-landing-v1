interface Link {
  source?: string;
  presentation?: string;
}

interface Work {
  year: number;
  title: string;
  made_at: string;
  built_with: Array<string>;
  links: Link;
}

const worksList: Work[] = [
  {
    year: 2021,
    title: "Chess++",
    made_at: "-",
    built_with: ["C++"],
    links: {
      source: "https://github.com/avi-2-avi/Chess-plus-plus",
    },
  },
  {
    year: 2021,
    title: "Karnaugh Map Solver",
    made_at: "-",
    built_with: ["Python", "Pandas", "Numpy", "Tkinter"],
    links: {
      source: "https://github.com/avi-2-avi/karnaugh-gui",
    },
  },
  {
    year: 2021,
    title: "SiFind",
    made_at: "-",
    built_with: ["Python", "Pandas", "Numpy", "Tkinter"],
    links: {
      source: "https://github.com/avi-2-avi/sifind",
    },
  },
  {
    year: 2022,
    title: "Landing Page - Version 0",
    made_at: "-",
    built_with: ["Svelte", "Typescript", "HTML", "CSS"],
    links: {
      source: "https://github.com/avi-2-avi/avi-landing-v0",
      presentation: "https://avi-2-avi.github.io/avi-landing-v0",
    },
  },
  {
    year: 2022,
    title: "Fab Academy Project Blog",
    made_at: "-",
    built_with: ["Bootstrap", "HTML", "CSS"],
    links: {
      source: "https://github.com/avi-2-avi/fab-academy-blog",
      presentation: "https://avi-2-avi.github.io/fab-academy-blog/",
    },
  },
  {
    year: 2022,
    title: "Inventory Module",
    made_at: "-",
    built_with: [".NET", "C#", "React.js", "Javascript"],
    links: {
      source: "https://github.com/avi-2-avi/inventory-module",
    },
  },
  {
    year: 2023,
    title: "Django React Notes",
    made_at: "-",
    built_with: ["Django", "Python", "React.js", "Typescript"],
    links: {
      source: "https://github.com/avi-2-avi/django-react-notes",
    },
  },
  {
    year: 2023,
    title: "Landing Page - Version 1",
    made_at: "-",
    built_with: ["Next.js", "Typescript"],
    links: {
      source: "https://github.com/avi-2-avi/avi-landing-v1",
    },
  },
  {
    year: 2023,
    title: "Affinity Roofing LLC - Landing Page",
    made_at: "Affinity Roofing LLC",
    built_with: ["Astro", "Javascript", "AWS"],
    links: {
      presentation: "https://www.affinityroofingllc.com/",
    },
  },
  {
    year: 2022,
    title: "Focus - Landing Page",
    made_at: "iFocusNow",
    built_with: ["Bootstrap", "Javascript", "HTML", "CSS"],
    links: {
      presentation: "https://ifocusnow.github.io/focus-landing-page/",
      source: "https://github.com/iFocusNow/focus-landing-page",
    },
  },
  {
    year: 2023,
    title: "KudasAI",
    made_at: "NTT Data Hackathon",
    built_with: ["Express", "Next.js", "Node.js", "MongoDB"],
    links: {
      source: "https://github.com/avi-2-avi/kudasai",
    },
  },
  {
    year: 2023,
    title: "Focus - Frontend Application",
    made_at: "iFocusNow",
    built_with: ["Angular", "Typescript", "Docker"],
    links: {
      source: "https://github.com/iFocusNow/focus-front",
    },
  },
  {
    year: 2023,
    title: "Focus - Backend Application",
    made_at: "iFocusNow",
    built_with: ["Springboot", "Java", "Docker", "PostgreSQL"],
    links: {
      source: "https://github.com/iFocusNow/focus-back",
    },
  },
];

export default worksList;
