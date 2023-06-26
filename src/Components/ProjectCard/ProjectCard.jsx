import "./project-card.css";
import Tag from "../Layout/Tag/Tag";
const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-card__title"> {props.title}</div>
      <img src={props.image} alt="project" className="project-card__image" />
      <ul className="project-card__desc">
        {props.desc.map((item) => 
          <li> {item} </li>
        )}
      </ul>
      <div className="project-card__labels">{props.lables}
         {props.labels.map((item) => 
          <Tag> {item} </Tag>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
