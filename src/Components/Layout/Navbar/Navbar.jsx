import "./nav-bar.css";
const Navbar = () => {

    return (
        <nav id="nav-bar" class ="nav-bar">
            <ul className="nav-bar__items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact Me</a></li>
            </ul>            
        </nav>
    )
}

export default Navbar;