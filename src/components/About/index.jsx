import ProfilePng from "../../assets/profile.png";
import Title from "../Title";
import Text from "../Text";
import "./style.scss";

export default function About({ datas }) {

    return (
        <>
            <div className="aboutSection">
                <div className="aboutSection__text">
                    <Title text={datas.title} size={2.1} />
                    <div className="aboutSection__description">
                        <Text text={datas.text} size={1.25} />
                    </div>
                </div>
                <img className="aboutSection__img" src={ProfilePng} alt="" />
            </div>
        </>
    );
}
