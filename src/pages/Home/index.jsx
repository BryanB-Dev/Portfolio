import ReactParallaxTilt from "react-parallax-tilt";
import HomeSvg from "../../components/HomeSvg";
import Introduction from "../../components/Introduction";
import Type from "../../components/Type";
import "./style.scss";
import Avatar from "../../components/Avatar";
import Text from "../../components/Text";
import Title from "../../components/Title";

export default function Home() {

    return (
        <>
            <div className="homeSection">
                <div className="homeSection__text">
                    <div className="homeSection__title">
                        <Text text={["Hi There!"]} size={2.4} />
                        <Title text="I'M %BRYAN%" size={2.5} />
                    </div>
                    <Type text={[
                        "Software Developer",
                        "Freelancer",
                        "MERN Stack Developer",
                        "Open Source Contributor",
                    ]} />
                </div>
                <HomeSvg />

            </div>
            <div className="introductionSection">
                <Introduction />
                <ReactParallaxTilt>
                    <Avatar />
                </ReactParallaxTilt>
            </div>
        </>
    );
}
