import "./section.css";

const Section = (props) => {
  return (
    <div className="section" id={props.id}>
      <p className="section__title">{props.title}</p>
      <div className="section__body">{props.children}</div>
    </div>
  );
};
export default Section;
