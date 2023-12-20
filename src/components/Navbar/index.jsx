import { NavLink } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import "./style.scss";
import { useState } from "react";

export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className={isMobileMenuOpen ? 'navToggle opened' : 'navToggle'} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={isMobileMenuOpen ? 'nav nav__mobile' : 'nav'}>
                <NavLink className="nav__item" to="/" onClick={closeMobileMenu}>{
                    <div className="nav__link">
                        <AiOutlineHome />
                        Accueil
                    </div>}
                </NavLink>
                <NavLink className="nav__item" to="/profile" onClick={closeMobileMenu}>{
                    <div className="nav__link">
                        <AiOutlineUser />
                        Profil
                    </div>}
                </NavLink>
                <NavLink className="nav__item" to="/skills" onClick={closeMobileMenu}>{
                    <div className="nav__link">
                        <CgFileDocument />
                        Compétences
                    </div>}
                </NavLink>
                <NavLink className="nav__item" to="/projects" onClick={closeMobileMenu}>{
                    <div className="nav__link">
                        <AiOutlineFundProjectionScreen />
                        Projets
                    </div>}
                </NavLink>
                <NavLink className="nav__item nav__item--fork" to="https://github.com/BryanB-Dev/Portfolio">{
                    <div className="nav__link">
                        <CgGitFork />
                        <AiFillStar />
                    </div>}
                </NavLink>
            </nav>
        </>
    )
}