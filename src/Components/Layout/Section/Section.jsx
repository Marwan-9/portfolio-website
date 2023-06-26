import "./section.css";

const Sectionn = (props) => {
  return (
    <div className="section">
      <p className="section__title">{props.title}</p>
      <div className="section__body">{props.children}</div>
    </div>
  );
};
export default Sectionn;
