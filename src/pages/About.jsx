// Style
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, btnSlide } from "../style/animation";

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
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiPython,
  SiDjango,
  SiMicrosoftexcel,
  SiBlender,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
} from "react-icons/si";

const About = () => {
  return (
    <StyledAbout
      className="about-container"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <img src={aboutBanner} alt="Portfolio About Graphic" />

      <AboutInfo variants={btnSlide}>
        <AboutText>
          <h2>About Me</h2>
          <p>
            I'm John, a software engineer who was raised by video games and long
            flights around the world.
          </p>

          <p>
            I'm a recent career changer that previously worked as a product
            designer. I designed everything from graphics to user experiences,
            but it was when I decided to build my own portfolio website that
            everything changed. I taught myself everything from scratch starting
            with HTML and now I build full-stack applications with React and
            Django.
          </p>

          <p>
            Just like an RPG, I've adopted leveling up as a lifestyle and that
            mindset has carried over into my career as a Developer where I am
            passionate about building applications that make your day better.
            When I'm not coding you'll usually find me experimenting in a
            kitchen, spending too much time at a museum, or planning my next
            trip.
          </p>

          <p>
            Contact me at{" "}
            <a href="mailto:johnlombardi389@gmail.com">
              johnlombardi389@gmail.com
            </a>{" "}
          </p>
        </AboutText>

        {/* <AboutTools>
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
              <SiHtml5 />
              <span>HTML</span>
            </li>
            <li>
              <SiCss3 />
              <span>CSS</span>
            </li>
            <li>
              <SiSass />
              <span>Sass</span>
            </li>
            <li>
              <SiTailwindcss />
              <span>Tailwind</span>
            </li>
            <li>
              <SiBootstrap />
              <span>Bootstrap</span>
            </li>
            <li>
              <SiPython />
              <span>Python</span>
            </li>
            <li>
              <SiDjango />
              <span>Django</span>
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
              <SiMysql />
              <span>MySQL</span>
            </li>

            <li>
              <SiPostgresql />
              <span>PostgreSQL</span>
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
            <li>
              <SiBlender />
              <span>Blender</span>
            </li>
            <li>
              <SiMicrosoftexcel />
              <span>Excel</span>
            </li>
          </ul>
        </AboutTools> */}

        <NewAboutTools>
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
              <SiHtml5 />
              <span>HTML</span>
            </li>
            <li>
              <SiCss3 />
              <span>CSS</span>
            </li>
            <li>
              <SiSass />
              <span>Sass</span>
            </li>
            <li>
              <SiTailwindcss />
              <span>Tailwind</span>
            </li>
            <li>
              <SiBootstrap />
              <span>Bootstrap</span>
            </li>
            <li>
              <SiPython />
              <span>Python</span>
            </li>
            <li>
              <SiDjango />
              <span>Django</span>
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
              <SiMysql />
              <span>MySQL</span>
            </li>

            <li>
              <SiPostgresql />
              <span>PostgreSQL</span>
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
            <li>
              <SiBlender />
              <span>Blender</span>
            </li>
            <li>
              <SiMicrosoftexcel />
              <span>Excel</span>
            </li>
          </ul>
        </NewAboutTools>
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
    color: #fb4c8b;
    font-size: 1.5rem;
    margin: 1rem 0;
    font-family: "Sora", sans-serif;
    font-weight: 500;
  }
`;

const AboutInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
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
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 400;

    a {
      color: #f9c04d;
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
        font-family: "Be Vietnam Pro", sans-serif;
        font-weight: 400;
      }

      &:hover {
        top: -8px;

        svg {
          color: #19a8c5;
        }

        span {
          opacity: 1;
          margin-top: 5rem;
          color: #fb4c8b;
        }
      }
    }
  }
`;

const NewAboutTools = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 2rem;

  h4 {
    padding-bottom: 3rem;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 5rem;

    @media only screen and (max-width: 550px) {
      padding: 0 1rem;
    }

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
        color: #355387;
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
        font-size: 0.9rem;
        z-index: -1;
        transition: all 0.5s ease;
        font-family: "Be Vietnam Pro", sans-serif;
        font-weight: 400;
      }

      &:hover {
        top: -8px;

        svg {
          color: #19a8c5;
        }

        span {
          opacity: 1;
          margin-top: 5rem;
          color: #fb4c8b;
        }
      }
    }
  }
`;

export default About;
