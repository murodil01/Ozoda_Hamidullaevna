import About from "./components/about";
import Achievements from "./components/achievements";
import Career from "./components/career";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Contact from "./components/contact/"
import Gallery from "./components/gallery";
import Team from "./components/team";
import News from "./components/news";

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Achievements />
      <News/>
      <Team/>
      <Career />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
