import Text from "../Text";
import Title from "../Title";
import Type from "../Type";
import homeMain from "../../assets/home-main.svg";
import "./style.scss";

export default function Main() {
    return (
        <div className="homeSection">
            <div className="homeSection__text">
                <div className="homeSection__title">
                    <Text text={["Hi There! "]} size={2.4} extra={<span className="wave" role="img" aria-labelledby="wave">👋🏻</span>} />
                    <Title text="I'M %BRYAN%" size={2.5} />
                </div>
                <Type text={[
                    "Software Developer",
                    "Freelancer",
                    "MERN Stack Developer",
                    "Open Source Contributor",
                ]} />
            </div>
            <img className="homeSvg" src={homeMain} alt="" />
        </div>
    )
}