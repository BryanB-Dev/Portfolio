import ReactParallaxTilt from "react-parallax-tilt";
import Introduction from "../../components/Introduction";
import "./style.scss";
import Avatar from "../../components/Avatar";
import Main from "../../components/Main";

export default function Home() {

    return (
        <>
            <Main />
            <div className="introductionSection">
                <Introduction />
                <ReactParallaxTilt>
                    <Avatar />
                </ReactParallaxTilt>
            </div>
        </>
    );
}
