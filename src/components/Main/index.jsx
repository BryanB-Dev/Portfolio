import Text from "../Text";
import Title from "../Title";
import Type from "../Type";
import homeMain from "../../assets/home-main.svg";
import "./style.scss";

export default function Main({ datas }) {
    return (
        <div className="homeSection">
            <div className="homeSection__text">
                <div className="homeSection__title">
                    <Text text={datas.main.text} size={2.4} extra={<span className="wave" role="img" aria-labelledby="wave">👋🏻</span>} />
                    <Title text={datas.main.title} size={2.5} />
                </div>
                <Type text={datas.main.type} />
            </div>
            <img className="homeSvg" src={homeMain} alt="" />
        </div>
    )
}