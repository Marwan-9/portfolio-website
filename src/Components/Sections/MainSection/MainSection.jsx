import "./main-section.css"
import BasicInfo from "../../BasicInfo/BasicInfo"; 
const MainSection = () => {
    return(
        <div className="main-section">
            <BasicInfo/>
            <img src="./pp.png" alt="profile picture" className="main-section__picture"/>
        </div>
    ) 
}

export default MainSection;