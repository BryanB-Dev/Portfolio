import { NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import "./style.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__item footer__item--left">
                    Inspiré par
                    <NavLink to="https://github.com/soumyajit4419/Portfolio/">
                        Soumyajit Behera
                    </NavLink>
                </div>
                <div className="footer__item">
                    Copyright © 2024
                    <NavLink to="https://github.com/BryanB-Dev">
                        BryanB-Dev
                    </NavLink>
                </div>
                <div className="footer__item footer__item--right">
                    <a href="https://github.com/BryanB-Dev" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                        <AiFillGithub />
                    </a>
                </div>
            </div>
        </footer>
    )
}