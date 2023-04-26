// Router
import { Routes, Route, useLocation } from "react-router-dom";

// Style
import GlobalStyles from "./style/GlobalStyles";
import { AnimatePresence } from "framer-motion";

// Components
import Nav from "./components/Nav";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyles />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
