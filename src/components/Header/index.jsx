import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import "./style.scss";
import { useState } from "react";

export default function Header() {

    const [background, updateBackground] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateBackground(true);
        } else {
            updateBackground(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);
    return (
        <header className={"header " + (background ? "header--blur" : "")}>
            <div className="header__content">
                <NavLink className="header__content__logo" to="/">{
                    <svg height={"35px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8L3 12L7 16" stroke="#be6adf" strokeWidth="2.4" strokeLinejoin="round"></path> <path d="M17 8L21 12L17 16" stroke="#be6adf" strokeWidth="2.4" ></path> <path d="M14 4L9.8589 19.4548" stroke="#be6adf" strokeWidth="2.4" strokeLinejoin="round"></path> </g></svg>
                }</NavLink>
                <Navbar />
            </div>
        </header>
    )
}