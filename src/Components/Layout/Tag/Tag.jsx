import "./tag.css"
const Tag = (props) => {
    return(
        <div className="tag">
            {props.children}
        </div>
    )
}

export default Tag;