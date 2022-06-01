import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
