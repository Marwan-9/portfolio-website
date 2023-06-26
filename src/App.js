import './App.css';
import Navbar from './Components/Layout/Navbar/Navbar';
import MainSection from './Components/Sections/MainSection/MainSection'
import Section from './Components/Layout/Section/Section';
import ProjectsSec from './Components/Sections/Projects/ProjectsSec'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <MainSection/>
    <ProjectsSec/>
    </div>
  );
}

export default App;
