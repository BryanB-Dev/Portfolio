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

export default function Navbar() {
    return (
        <nav className="nav">
            <NavLink className="nav__item" to="/">{
                <div className="nav__link">
                    <AiOutlineHome />
                    Accueil
                </div>}
            </NavLink>
            <NavLink className="nav__item" to="/profile">{
                <div className="nav__link">
                    <AiOutlineUser />
                    Profil
                </div>}
            </NavLink>
            <NavLink className="nav__item" to="/skills">{
                <div className="nav__link">
                    <CgFileDocument />
                    Compétences
                </div>}
            </NavLink>
            <NavLink className="nav__item" to="/projects">{
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
    )
}