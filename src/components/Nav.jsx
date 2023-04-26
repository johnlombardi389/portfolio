// Router
import { NavLink } from "react-router-dom";

// Icons
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// Image
import portLogo from "../assets/images/portLogo.svg";

const Nav = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default Nav;
