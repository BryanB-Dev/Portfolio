import ReactParallaxTilt from "react-parallax-tilt";
import avatar from "../../assets/avatar.svg";
import Text from "../Text";
import Title from "../Title";
import "./style.scss";

export default function Introduction( {datas}) {
    return (
        <div className="introductionSection">
            <div className="introductionSection__text">
                <Title text={datas.introduction.title} size={2.5} />
                <Text text={datas.introduction.text} size={1.2} />
            </div>
            <ReactParallaxTilt>
                <img className="avatar" src={avatar} alt="" />
            </ReactParallaxTilt>
        </div>
    )
}