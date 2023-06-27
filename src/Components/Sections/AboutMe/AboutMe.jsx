import "./about-me.css";
import Section from "../../Layout/Section/Section";
const AboutMe = () => {
  return (
    <Section title="About Me" id="about">
      <p className="about-me__body">
        Senior engineering student who currently pursing bachelor’s degree from
        Cairo University with major of computer engineering, and minor of
        communication engineering. Mainly interested in web and software
        development fields, always working on enhancing my skills and experience
        in those wide fields by getting small jobs, internships, and workshops.
        <br/> <br/> 
        Throughout my academic career, I have worked on web development projects
        using ReactJS, HTML, CSS, and JavaScript to create dynamic and
        responsive user interfaces for complex web applications, also beside the
        academic aspect I have worked as web developer through several
        internships which improved my skills in using front-end frameworks such
        as React, in addition to gain experience with version control tools such
        as Git and learned how to collaborate with team members using Github.
        Lastly, I improved my problem-solving skills by working on real-world
        projects and debugging errors.
      </p>
    </Section>
  );
};

export default AboutMe;
