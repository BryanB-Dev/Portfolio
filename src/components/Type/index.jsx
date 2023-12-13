import React from "react";
import Typewriter from "typewriter-effect";
import "./style.scss";

export default function Type() {
  return (
    <div className="type">
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "Freelancer",
              "MERN Stack Developer",
              "Open Source Contributor",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
    </div>
  );
}