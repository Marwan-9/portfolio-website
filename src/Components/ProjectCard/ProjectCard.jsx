import "./project-card.css";
import Tag from "../Layout/Tag/Tag";
import { GitHub, Web } from "../../Data/SVGs";
const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-card__title"> {props.title}</div>
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
      <div className="project-card__links"> 
        {
          (props.links.length === 1) ? (
            <div className="project-card__links__repo" onClick={()=>{ window.open(props.links[0],"_blank")}}> {GitHub()} Visit Repository </div>
          ):
          (
            <div>
            <div className="project-card__links__repo" onClick={()=>{ window.open(props.links[0],"_blank")}}> {GitHub()} Visit Repository </div>
            <div className="project-card__links__site" onClick={()=>{ window.open(props.links[1],"_blank")}}> {Web()} Visit Website </div>
            </div>

          )
        }
      </div>

    </div>
  );
};
export default ProjectCard;
