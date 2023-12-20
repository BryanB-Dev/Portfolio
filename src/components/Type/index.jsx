import React from "react";
import Typewriter from "typewriter-effect";
import "./style.scss";

export default function Type( {text} ) {
    return (
        <div className="type">
            <Typewriter
                options={{
                    strings: text,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </div>
    );
}