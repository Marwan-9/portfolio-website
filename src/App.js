import './App.css';
import Navbar from './Components/Layout/Navbar/Navbar';
import MainSection from './Components/Sections/MainSection/MainSection'
import ProjectsSec from './Components/Sections/Projects/ProjectsSec'
import SkillsSec from './Components/Sections/Skills/SkillsSec';
import AboutMe from './Components/Sections/AboutMe/AboutMe';
import Contact from './Components/Sections/Contact/Contact';
import Footer from './Components/Layout/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <MainSection/>
    <ProjectsSec/>
    <SkillsSec/>
    <AboutMe/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
