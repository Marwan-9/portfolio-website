import "./contact.css";
import Section from "../../Layout/Section/Section";
import { FaceBook, Instagram, linkedIn } from "../../../Data/SVGs";
const Contact = () => {

  return (
    <Section title="Contact" id="contact">
      <div className="conatct__body">
     
        <div className="contact__body_section">
          <p className="conatct__email">Email Me</p>
          <a className="contact__value" href="mailto:marwan62x@gmai.com"> marwan62x@gmail.com &#8594;  </a>
        </div>
        
        <div className="contact__body_section">
          <p className="contact__phone">Call Me</p>
          <a className="contact__value"> (+20) 01272404140  </a>
        </div>
      </div>
      <div className="contact__social">
        {FaceBook()}
        {Instagram()}
        {linkedIn()}
        </div>
    </Section>
  );
};

export default Contact;
