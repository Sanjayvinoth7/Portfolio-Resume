import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Links from "./components/Links";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Links />
    </div>
  );
}

export default App;