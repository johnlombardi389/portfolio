// Style
import styled from "styled-components";
import { motion } from "framer-motion";

// Project Data
import projectData from "../data";

const Projects = () => {
  const data = projectData();

  const handleVideoMouseOver = (event) => {
    if (event.target.nodeName === "VIDEO") {
      event.target.play();
    }
  };

  const handleVideoMouseOut = (event) => {
    if (event.target.nodeName === "VIDEO") {
      event.target.pause();
      event.target.currentTime = 0;
    }
  };

  return (
    <ProjectsGrid>
      {data.map((project) => (
        <GridItem
          key={project.id}
          onMouseOver={handleVideoMouseOver}
          onMouseOut={handleVideoMouseOut}
        >
          <video src={project.video} preload="metadata" muted loop />
          <CardInfo>
            <h3>{project.title}</h3>
            <ul>
              {project.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </CardInfo>
          <Buttons>
            <a href={project.demo} target="_blank">
              Project
            </a>
            <a href={project.github} target="_blank">
              Code
            </a>
          </Buttons>
        </GridItem>
      ))}
    </ProjectsGrid>
  );
};

const ProjectsGrid = styled(motion.main)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 3rem;
  margin: 3rem auto;
  max-width: 1800px;
  height: auto;

  @media only screen and (max-width: 1850px) {
    margin: 2rem 2rem;
    grid-gap: 2rem;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 2rem 0;
    grid-gap: 1rem;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  overflow: hidden;
  background-color: $darkBlue;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 30px rgba(249, 192, 77, 0.75);
  }

  video {
    padding: 1rem;
    width: 100%;
    height: auto;
    object-fit: cover;

    @media only screen and (max-width: 550px) {
      padding: 0.5rem 0;
    }
  }
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin-bottom: 1rem;

  h3 {
    margin-right: 2rem;
    color: purple;
    font-size: 1.25rem;

    @media only screen and (max-width: 550px) {
      margin-right: 0.5rem;
      font-size: 1rem;
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-left: 1rem;

    @media only screen and (max-width: 550px) {
      margin-left: 0.5rem;
    }

    li {
      padding: 0.5rem;
      font-size: 0.85rem;
      color: yellow;

      @media only screen and (max-width: 550px) {
        padding: 0.25rem;
        font-size: 0.75rem;
      }
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30rem;
  margin: 0 auto;

  @media only screen and (max-width: 550px) {
    width: 20rem;
  }

  a {
    display: inline-block;
    margin: 0 1rem 1rem 1rem;
    padding: 0.75rem 1.75rem;
    width: 9rem;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 2rem;
    border: 3px solid green;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    background-color: darkblue;
    color: white;
    transition: all 0.5s ease;

    &:hover {
      background-color: green;
      color: $yellow;
    }
  }
`;

export default Projects;
