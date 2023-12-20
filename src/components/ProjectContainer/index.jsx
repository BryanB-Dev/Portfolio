import Project from "../Project";
import Text from "../Text";
import Title from "../Title";
import "./style.scss";

export default function ProjectContainer({ datas }) {

    const projects = datas.projects.map((project, index) => {
        return (<Project key={index} project={project}/>)
    });

    return (
        <div className="projectContainer">
            <Title text={datas.title} size={2.4} />
            <Text text={datas.text} size={1.25} />
            <div className="projectContainer__projects">
                {projects}
            </div>
        </div>
    );
}
