// Videos
import gamePacVid from "./assets/videos/gamePacVid.mp4";
import layoutGenVid from "./assets/videos/layoutGenVid.mp4";
import musicPlayerVid from "./assets/videos/musicPlayerVid.mp4";
import pixelSketchVid from "./assets/videos/pixelSketchVid.mp4";
import portVid from "./assets/videos/portVid.mp4";
import rpsVid from "./assets/videos/rpsVid.mp4";
// Images
import recipeReady from "./assets/images/recipeReady.png";
import musicPlay from "./assets/images/musicPlay.png";
import pixelSketch from "./assets/images/pixelSketch.png";
import layoutGen from "./assets/images/layoutGen.png";
import portfolioImg from "./assets/images/portfolioImg.png";
import empireAuto from "./assets/images/empireAuto.png";

const projectData = () => [
  {
    id: 1,
    title: "Recipe Ready",
    tools: ["React", "Django", "Python", "REST API"],
    demo: "https://johnlombardi389.github.io/recipe-ready/",
    github: "https://github.com/johnlombardi389/recipe-ready",
    image: recipeReady,
  },
  {
    id: 2,
    title: "Auto Repair Website",
    tools: ["React", "Tailwind"],
    demo: "https://johnlombardi389.github.io/auto-website/",
    github: "https://github.com/johnlombardi389/auto-website",
    image: empireAuto,
  },
  {
    id: 3,
    title: "Music Player",
    tools: ["React", "JavaScript", "Sass", "Git"],
    demo: "https://johnlombardi389.github.io/music-player/",
    github: "https://github.com/johnlombardi389/music-player",
    image: musicPlay,
  },
  {
    id: 4,
    title: "Pixel Sketch",
    tools: ["JavaScript", "CSS", "HTML", "Figma"],
    demo: "https://johnlombardi389.github.io/pixel-sketch/",
    github: "https://github.com/johnlombardi389/pixel-sketch",
    image: pixelSketch,
  },
  {
    id: 5,
    title: "Layout Generator",
    tools: ["JavaScript", "CSS", "HTML", "Git"],
    demo: "https://johnlombardi389.github.io/layout-generator/",
    github: "https://github.com/johnlombardi389/layout-generator",
    image: layoutGen,
  },
  {
    id: 6,
    title: "Portfolio Website",
    tools: ["React", "JavaScript", "Sass", "Vite"],
    demo: "https://johnlombardi389.github.io/portfolio/",
    github: "https://github.com/johnlombardi389/portfolio",
    image: portfolioImg,
  },
];

export default projectData;
