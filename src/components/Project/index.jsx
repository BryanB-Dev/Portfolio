import { useRef, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import Text from "../Text";
import Title from "../Title";
import "./style.scss";

export default function Project({ project }) {

    const ref = useRef();
  
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
  
    const handleMouseMove = e => {
      if(ref.current) {
        setX(e.clientX - ref.current.getBoundingClientRect().x);
        setY(e.clientY - ref.current.getBoundingClientRect().y);
      }
    }
  
    return (
      <div 
        ref={ref} 
        className="project shiny"
        onMouseMove={handleMouseMove}
        style={{
          '--x': x,
          '--y': y
        }}
      >
        <div className="project__infos">
                <img className="project__img" src={project.src} alt="" />
                <Title text={project.title} size={1.25} />
                <Text text={project.text} size={1} />
            </div>
            <div className="project__button">
                {project.github && <a className="project__button--link" href={project.github}>
                    <AiFillGithub />
                    GitHub
                </a>}
                {project.demo && <a className="project__button--link" href={project.demo}>
                    <CgWebsite />
                    Demo
                </a>}
            </div>
      </div>
    );
  }
