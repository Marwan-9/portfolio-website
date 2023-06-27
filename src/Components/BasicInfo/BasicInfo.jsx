import "./basic-info.css"
import Button from "../Layout/Button/Button"
const BasicInfo = () => {
    return (
        <div className="basic-info">
            <div className="basic-info__body">
            <p className="basic-info__name">Marwan Mostafa</p>
            <p className="basic-info__job">Engineering Student / Web Developer</p>
            </div>  
            <a href="#contact"><Button style={{marginLeft: "12px"}}>Contact</Button></a>
            <a href="./MarwanMostafa_Resume.pdf" target="_blank"> <Button style={{marginLeft: "12px"}}>Resume</Button></a>


        </div>
    )   
}

export default BasicInfo;