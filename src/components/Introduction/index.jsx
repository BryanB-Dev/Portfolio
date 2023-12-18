import ReactParallaxTilt from "react-parallax-tilt";
import avatar from "../../assets/avatar.svg";
import Text from "../Text";
import Title from "../Title";
import "./style.scss";

export default function Introduction() {
    return (
        <div className="introductionSection">
            <div className="introductionSection__text">
                <Title text="LET ME %INTRODUCE% MYSELF" size={2.5} />
                <Text text={["I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️/n/nI am fluent in classics like %C++, Javascript and Go.%/n/nMy field of Interest's are building new  Web Technologies and Products and also in areas related to Blockchain./n/nWhenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js"]} size={1.2} />
            </div>
            <ReactParallaxTilt>
                <img className="avatar" src={avatar} alt="" />
            </ReactParallaxTilt>
        </div>
    )
}