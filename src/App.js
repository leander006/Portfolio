import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Portfolio />
      <SocialLinks />
    </>
  );
}

export default App;
