import Skill from "../Skill";
import Title from "../Title";
import "./style.scss";

export default function SkillContainer({ datas }) {

    const skills = datas.skills.map((skill, index) => {
        return (<Skill key={index}>
            {skill}
        </Skill>)
    })

    return (
        <div className="skillContainer">
            <Title text={datas.title} size={2.3} />
            <div className="skillContainer__skills">
                {skills}
            </div>
        </div>
    );
}
