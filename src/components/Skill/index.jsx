import { useRef, useState } from "react";
import "./style.scss";

export default function Skill({ children }) {

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
        className="skill shiny"
        onMouseMove={handleMouseMove}
        style={{
          '--x': x,
          '--y': y
        }}
      >
        {children}
      </div>
    );
  }
