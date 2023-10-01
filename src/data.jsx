// Videos
import gamePacVid from "./assets/videos/gamePacVid.mp4";
import layoutGenVid from "./assets/videos/layoutGenVid.mp4";
import musicPlayerVid from "./assets/videos/musicPlayerVid.mp4";
import pixelSketchVid from "./assets/videos/pixelSketchVid.mp4";
import portVid from "./assets/videos/portVid.mp4";
import rpsVid from "./assets/videos/rpsVid.mp4";

const projectData = () => [
  {
    id: 1,
    title: "Game Pac",
    tools: ["React", "Redux", "JavaScript", "Sass"],
    demo: "https://johnlombardi389.github.io/game-tracker/",
    github: "https://github.com/johnlombardi389/game-tracker",
    video: gamePacVid,
  },
  {
    id: 2,
    title: "Music Player",
    tools: ["React", "JavaScript", "Sass", "Git"],
    demo: "https://johnlombardi389.github.io/music-player/",
    github: "https://github.com/johnlombardi389/music-player",
    video: musicPlayerVid,
  },
  {
    id: 3,
    title: "Pixel Sketch",
    tools: ["JavaScript", "CSS", "HTML", "Figma"],
    demo: "https://johnlombardi389.github.io/pixel-sketch/",
    github: "https://github.com/johnlombardi389/pixel-sketch",
    video: pixelSketchVid,
  },
  {
    id: 4,
    title: "Layout Generator",
    tools: ["JavaScript", "CSS", "HTML", "Git"],
    demo: "https://johnlombardi389.github.io/layout-generator/",
    github: "https://github.com/johnlombardi389/layout-generator",
    video: layoutGenVid,
  },
  // {
  //   id: 5,
  //   title: "Portfolio Website",
  //   tools: ["React", "JavaScript", "Sass", "Vite"],
  //   demo: "https://johnlombardi389.github.io/portfolio/",
  //   github: "https://github.com/johnlombardi389/portfolio",
  //   video: portVid,
  // },
  // {
  //   id: 6,
  //   title: "RPS Game",
  //   tools: ["JavaScript", "CSS", "HTML", "Git"],
  //   demo: "https://johnlombardi389.github.io/rock-paper-scissors/",
  //   github: "https://github.com/johnlombardi389/rock-paper-scissors",
  //   video: rpsVid,
  // },
];

export default projectData;
