interface Tool {
  title: string;
  description: string;
  image: string;
  color: string;
}

const toolsList: Array<Tool> = [
  {
    title: "CX True Wireless",
    description: "Listen anywhere for long hours.",
    image: "/tools/senheiser.png",
    color: "red",
  },
  {
    title: "Mac Air (2023)",
    description: "Blazingly fast everyday tool.",
    image: "/tools/mac-air-2023.png",
    color: "none",
  },
  {
    title: "Omen 16",
    description: "Dual booting Linux and Windows.",
    image: "/tools/omen-16.png",
    color: "none",
  },
  {
    title: "Thinkvision P27q-10",
    description: "Wide second monitor.",
    image: "/tools/thinkvision.png",
    color: "blue",
  },
  {
    title: "Galaxy Tab S6 Lite",
    description: "Draw, read, and study.",
    image: "/tools/tab-s6-lite.png",
    color: "yellow",
  },
  {
    title: "NuPhy Halo65",
    description: "Typing fast and comfortably.",
    image: "/tools/nuphy.png",
    color: "none",
  },
  {
    title: "Mac Air (Early 2014)",
    description: "Old but light computer.",
    image: "/tools/mac-air.png",
    color: "none",
  },
  {
    title: "Robin - SV021",
    description: "Listen to tunes.",
    image: "/tools/sivga-robin.png",
    color: "red",
  },
];

export default toolsList;
