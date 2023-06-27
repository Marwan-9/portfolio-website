import "./projects-sec.css";
import Section from "../../Layout/Section/Section";
import ProjectCard from "../../ProjectCard/ProjectCard";
import projects from "../../../Data/ProjectsData";
const ProjectsSec = () => {
  return (
    <Section title="Recent Projects" id="projects">
      {projects.map(project => 
        <ProjectCard
          title={project.Title}
          image={project.Image}
          desc={project.Description}
          labels={project.Labels}
          links={project.Links}
        />
      )}
    </Section>
  );
};

export default ProjectsSec;
