import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";
function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }
    const closeMenu = () => {
        setNavActive(false);
    }
    useEffect(
        () => {
            const handleResize = () => {
                if (window.innerWidth <= 500) {
                    closeMenu();
                }
            }
            window.addEventListener("resize",
                handleResize);

            return () => {
                window.removeEventListener("resize",
                    handleResize);
            };
        }, []);
    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);
    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="logo--img">
                <img src="./img/logo.png" alt="SV."/>
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav} >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="HeroSection"
                            className="navbar--content"
                        >Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            className="navbar--content"
                        >About Me</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MyPortfolio"
                            className="navbar--content"
                        >Portfolio</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="Credetials"
                            className="navbar--content"
                        >Credetials</Link>
                        </li>
                        <li>
                        <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
                className="navbar--content">
                Contact Me</Link>
                        </li>
                </ul>
            </div>
            <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="dark"
                className="btn">
                <DarkModeToggle /></Link>
                {/* <div className="dark">
                <DarkModeToggle />
                </div> */}
               
        </nav>
    )
}
export default Navbar;