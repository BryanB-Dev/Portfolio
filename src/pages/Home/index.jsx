import ReactParallaxTilt from "react-parallax-tilt";
import HomeSvg from "../../components/HomeSvg";
import Introduction from "../../components/Introduction";
import Name from "../../components/Name";
import Type from "../../components/Type";
import "./style.scss";
import Avatar from "../../components/Avatar";

export default function Home() {

    return (
        <>
            <div className="homeSection">
                <div className="homeSection__text">
                    <Name />
                    <Type />
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
