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
  {
    year: 2024,
    title: "LearnBee App",
    made_at: "LearnBee",
    built_with: ["React.js", "Typescript", "Firebase", "Docker", "AWS"],
    links: {
      source: "https://github.com/avi-2-avi/learnbee-app",
    },
  },
  {
    year: 2024,
    title: "Sacat - Frontend Application",
    made_at: "Sacat",
    built_with: ["Nuxt.js", "Typescript", "TailwindCSS"],
    links: {
      source: "https://github.com/SaCat-Fintech/app-frontend",
    },
  },
  {
    year: 2024,
    title: "Anbumanga - Data Analytics & Machine Learning Insights",
    made_at: "Anbumanga",
    built_with: [
      "Python",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
    ],
    links: {
      source: "https://github.com/avi-2-avi/manga-store-data-analysis",
    },
  },
  {
    year: 2024,
    title: "Detection of Cardiovascular Anomalies Research",
    made_at: "-",
    built_with: [
      "Pytorch",
      "Deep Learning",
      "ESP32",
      "IoT",
      "Healthcare applications of Machine Learning",
    ],
    links: {},
  },
  {
    year: 2025,
    title: "Stockable Site",
    made_at: "-",
    built_with: [
      "Vue.js",
      "Typescript",
      "CockroachDB",
      "Golang",
      "Docker",
      "AWS",
    ],
    links: {
      source: "https://github.com/avi-2-avi/stockable",
    },
  },
  {
    year: 2025,
    title: "AI Connect - Landing Page",
    made_at: "AI Connect",
    built_with: ["Astro", "Javascript", "HTML", "CSS"],
    links: {
      source: "https://github.com/avi-2-avi/ai-connect-landing-v2",
      presentation: "https://www.aiconnectlatam.com/",
    },
  },
  {
    year: 2025,
    title: "Frost Forecast & Prediction Research",
    made_at: "-",
    built_with: [
      "Python",
      "Pytorch",
      "Matplotlib",
      "Deep Learning",
      "Time Series",
    ],
    links: {},
  },
  {
    year: 2025,
    title: "Electric Meter OCR Detection Research",
    made_at: "-",
    built_with: ["Python", "Numpy", "YOLOv8", "Computer Vision"],
    links: {},
  },
];

export default worksList;
