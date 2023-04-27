// Router
import { NavLink } from "react-router-dom";

// Icons
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// Image
import portLogo from "../assets/images/portLogo.svg";

// Style
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <NavLink id="logo" to={"/portfolio"}>
          <img src={portLogo} alt="John Lombardi Logo" />
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to={"/portfolio/projects"}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={"/portfolio/about"}>About</NavLink>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/johnlombardi389/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/johnlombardi389" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="mailto:johnlombardi389@gmail.com">
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background: #080e1d;

  h1 {
    img {
      width: 3rem;
      height: 3rem;
    }
  }

  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      color: #f9c04d;
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      padding-left: 3.5rem;
      position: relative;
      font-size: 1.1rem;

      svg {
        width: 1.75rem;
        height: 1.75rem;
      }
    }

    @media (max-width: 770px) {
      flex-direction: column;
      ul {
        li {
          padding: 0 0.75rem;
        }
      }
    }
  }

  .active {
    color: #f9c04d;
  }
`;

export default Nav;
