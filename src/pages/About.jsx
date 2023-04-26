// Style
import styled from "styled-components";
import { motion } from "framer-motion";

// Images
import aboutBanner from "../assets/images/aboutBanner.png";

// Icons
import {
  SiReact,
  SiSass,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiGit,
  SiVite,
  SiVisualstudiocode,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGithub,
} from "react-icons/si";

const About = () => {
  return (
    <StyledAbout>
      <img src={aboutBanner} alt="Portfolio About Graphic" />

      <AboutInfo>
        <AboutText>
          <h2>About Me</h2>
          <p>
            I grew up immersing myself in video game worlds where your character
            was always growing and learning new skills. Just like an RPG, I've
            adopted leveling up as a lifestyle and this mindset has carried over
            into my career as a Software Engineer, where I am constantly seeking
            out new challenges and opportunities to grow.
          </p>

          <p>
            Combining my background in design and education with a passion for
            technology and a love of learning, I am driven to create impactful
            solutions for real-world problems. Skilled in React, I am actively
            expanding my knowledge of JavaScript and honing my full-stack
            development abilities through focused learning of the MERN stack{" "}
            {"("}MongoDB, Express, React, Node{")"}.
          </p>

          <p>
            Contact me at{" "}
            <a href="mailto:johnlombardi389@gmail.com">
              johnlombardi389@gmail.com
            </a>{" "}
          </p>
        </AboutText>

        <AboutTools>
          <h2>Toolkit</h2>
          <ul>
            <li>
              <SiReact />
              <span>React</span>
            </li>
            <li>
              <SiJavascript />
              <span>JavaScript</span>
            </li>
            <li>
              <SiSass />
              <span>Sass</span>
            </li>
            <li>
              <SiCss3 />
              <span>CSS</span>
            </li>
            <li>
              <SiHtml5 />
              <span>HTML</span>
            </li>
            <li>
              <SiGit />
              <span>Git</span>
            </li>
            <li>
              <SiVite />
              <span>Vite</span>
            </li>
            <li>
              <SiVisualstudiocode />
              <span>VS Code</span>
            </li>

            <li>
              <SiGithub />
              <span>GitHub</span>
            </li>
            <li>
              <SiFigma />
              <span>Figma</span>
            </li>
            <li>
              <SiAdobephotoshop />
              <span>Photoshop</span>
            </li>
            <li>
              <SiAdobeillustrator />
              <span>Illustrator</span>
            </li>
          </ul>
        </AboutTools>
      </AboutInfo>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 3rem 0;

    @media only screen and (max-width: 1850px) {
      margin: 2rem 0;
    }
  }

  h2 {
    color: $pink;
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`;

const AboutInfo = styled(motion.div)`
  display: flex;
  align-items: start;
  width: 100%;

  @media only screen and (max-width: 1850px) {
    margin-left: 2rem;
  }

  @media only screen and (max-width: 1050px) {
    margin: 1rem 0 1rem 2rem;
  }

  @media only screen and (max-width: 975px) {
    flex-direction: column;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  p {
    margin: 1rem 5rem 1rem 0;
    color: white;
    font-size: 1rem;

    a {
      color: yellow;
    }
  }
`;

const AboutTools = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;

  h4 {
    padding-bottom: 3rem;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    li {
      position: relative;
      display: inline-block;
      top: 0;
      transition: all 0.5s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem 1rem 0rem;

      svg {
        color: #0f3962;
        width: 3rem;
        height: 3rem;
        transition: all 0.5s ease;
        z-index: 5;
      }

      span {
        position: absolute;
        transition: all 0.5s ease;
        opacity: 0;
        color: transparent;
        font-size: 1rem;
        z-index: -1;
        transition: all 0.5s ease;
      }

      &:hover {
        top: -8px;

        svg {
          color: blue;
        }

        span {
          opacity: 1;
          margin-top: 5rem;
          color: pink;
        }
      }
    }
  }
`;

export default About;
