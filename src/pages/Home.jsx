// Router
import { Link } from "react-router-dom";

// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <IntroContainer>
      <motion.div className="title">
        <div className="reveal">
          <div className="hide">
            <h1>
              My name is <span>John Lombardi</span>
            </h1>
          </div>
        </div>
      </motion.div>

      <motion.div className="title">
        <div className="reveal">
          <div className="hide">
            <p>I’m a design minded software engineer and lifelong learner</p>
          </div>
        </div>
      </motion.div>

      <BtnContainer>
        <Link to={"/portfolio/projects"}>See My Work</Link>
        <a href="mailto:johnlombardi389@gmail.com">Contact Me</a>
      </BtnContainer>
    </IntroContainer>
  );
};

const IntroContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  height: 300px;
  color: white;

  .title {
    margin-bottom: 2rem;

    .reveal {
      overflow: hidden;
    }

    .hide {
      overflow: hidden;
    }

    h2 {
      font-size: 2.5rem;

      span {
        color: pimk;
      }
    }

    p {
      font-size: 1.4rem;
      color: white;
    }
  }
`;

const BtnContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 2rem;
    border: 3px solid blue;
    background-color: darkblue;
    color: white;
    transition: all 0.5s ease;
    cursor: pointer;
    text-decoration: none;
    margin-right: 2rem;

    &:hover {
      background-color: blue;
      color: yellow;
    }
  }
`;

export default Home;
