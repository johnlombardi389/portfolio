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
        color: $pink;
        font-weight: 700;
      }
    }

    p {
      font-size: 1.4rem;
      color: white;
    }
  }
`;

export default Home;
