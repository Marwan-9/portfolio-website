import "./skills-sec.css";
import Section from "../../Layout/Section/Section";
const SkillsSec = () => {
  return (
    <Section title="Skills" id="skills">
      <div className="skills-sec__sub-section">
        <h1 className="skills-sec__sub-section__title">Frontend Skills</h1>
        <div className="skills-sec__skills">
          <img
            src="./Icons/HTML.PNG"
            alt="html"
            className="skills-sec__skills__images"
          />
          <img
            src="./Icons/CSS.PNG"
            alt="css"
            className="skills-sec__skills__images"
          />
          <img
            src="./Icons/JS.PNG"
            alt="js"
            className="skills-sec__skills__images"
          />
          <img
            src="./Icons/React.PNG"
            alt="react"
            className="skills-sec__skills__images"
          />
        </div>
      </div>
      <div className="skills-sec__sub-section">
        <h1 className="skills-sec__sub-section__title">Backend Skills</h1>
        <div className="skills-sec__skills">
          <img
            src="./Icons/Spring.PNG"
            alt="html"
            className="skills-sec__skills__images"
          />
          <img
            src="./Icons/Node.PNG"
            alt="css"
            className="skills-sec__skills__images"
          />
        </div>
      </div>
      <div className="skills-sec__sub-section">
        <h1 className="skills-sec__sub-section__title">Programming Skills</h1>
        <div className="skills-sec__skills">
          <img
            src="./Icons/Cpp.PNG"
            alt="html"
            className="skills-sec__skills__images"
          />
          <img
            src="./Icons/C.PNG"
            alt="css"
            className="skills-sec__skills__images"
          />
          <img
            src="./Icons/Java.PNG"
            alt="js"
            className="skills-sec__skills__images"
          />
          <img
            src="./Icons/Py.PNG"
            alt="react"
            className="skills-sec__skills__images"
          />
        </div>
      </div>
      <p> TEC: Technical Knowlage | EXP: Experience | COD: Coding Skills | DEB: Debugging Skill | DOC: Documentaion Skills | TST: Testing Skills</p>
    </Section>
  );
};

export default SkillsSec;
