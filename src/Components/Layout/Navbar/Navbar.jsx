import "./nav-bar.css";
const Navbar = () => {

    return (
        <nav id="nav-bar" class ="nav-bar">
            <ul className="nav-bar__items">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#about">About</a></li>

            </ul>            
        </nav>
    )
}

export default Navbar;