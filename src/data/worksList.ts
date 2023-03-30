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
    year: 2022,
    title: "Notes in Django",
    made_at: "-",
    built_with: ["React", "Django"],
    links: {
      source: "https://github.com/avi-2-avi",
      presentation: "https://google.com",
    },
  },
  {
    year: 2022,
    title: "Notes in Django",
    made_at: "-",
    built_with: ["React", "Django"],
    links: {
      source: "https://github.com/avi-2-avi",
      presentation: "https://google.com",
    },
  },
  {
    year: 2020,
    title: "Notes in Django 2",
    made_at: "-",
    built_with: ["React", "Django"],
    links: {
      source: "https://github.com/avi-2-avi",
    },
  },
  {
    year: 2022,
    title: "Notes in Django",
    made_at: "-",
    built_with: ["React", "Django"],
    links: {
      presentation: "https://google.com",
    },
  },
  {
    year: 2022,
    title: "Notes in Django",
    made_at: "-",
    built_with: ["React", "Django"],
    links: {
      source: "https://github.com/avi-2-avi",
      presentation: "https://google.com",
    },
  },
];

export default worksList;
