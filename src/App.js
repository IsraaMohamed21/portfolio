import About from "./Components/About";
import Caption from "./Components/Caption";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
function App() {
  return (
    <div className="App">
     <Navbar />

      <section id="home">
        <Caption />
      </section>

      <section id="about" style={{ scrollMarginTop: '80px' }}>
        <About />
      </section>

<section id="projects" style={{ scrollMarginTop: '80px' }}>
        <Projects />
      </section>
      {/* <section id="skills" style={{ scrollMarginTop: '80px' }}>
        <Skills />
      </section> */}
      <section id="contact" style={{ scrollMarginTop: '80px' }}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
