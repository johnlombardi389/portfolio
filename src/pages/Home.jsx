// Router
import { Link } from "react-router-dom";

// Style
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, btnSlide } from "../style/animation";

const Home = () => {
  return (
    <ParentContainer>
      <IntroContainer
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div className="title" variants={titleAnimation}>
          <div className="reveal">
            <div className="hide">
              <h2>
                My name is <span>John Lombardi</span>
              </h2>
            </div>
          </div>
        </motion.div>

        <motion.div className="title" variants={titleAnimation}>
          <div className="reveal">
            <div className="hide">
              <p>I’m a design minded software engineer and lifelong learner</p>
            </div>
          </div>
        </motion.div>

        <BtnContainer variants={btnSlide}>
          <Link to={"/portfolio/projects"}>See My Work</Link>
          <a href="mailto:johnlombardi389@gmail.com">Contact Me</a>
        </BtnContainer>
      </IntroContainer>
    </ParentContainer>
  );
};

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const IntroContainer = styled(motion.div)`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media (max-width: 900px) {
    width: 350px;
  }

  @media (max-width: 375px) {
    width: 300px;
  }

  .title {
    margin-bottom: 2rem;

    .reveal {
      overflow: hidden;
    }

    .hide {
      overflow: hidden;
    }

    h2 {
      font-size: 2.4rem;
      font-family: "Be Vietnam Pro", sans-serif;
      font-weight: 400;

      span {
        color: #fb4c8b;
        font-size: 2.5rem;
        font-family: "Sora", sans-serif;
        font-weight: 700;
      }
    }

    p {
      font-size: 1.5rem;
      color: white;
      font-family: "Be Vietnam Pro", sans-serif;
      font-weight: 100;
    }
  }
`;

const BtnContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  a {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 2rem;
    border: 3px solid #19a8c5;
    background-color: #0e1624;
    color: white;
    transition: all 0.5s ease;
    cursor: pointer;
    text-decoration: none;
    margin-right: 2rem;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 700;

    &:hover {
      background-color: #19a8c5;
      color: #f9c04d;
    }
    @media (max-width: 950px) {
      margin-bottom: 2rem;
    }
  }
`;

export default Home;
