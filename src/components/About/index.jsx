import ProfilePng from "../../assets/profile.png";
import Title from "../Title";
import Text from "../Text";
import "./style.scss";

export default function About() {

    return (
        <>
            <div className="aboutSection">
                <div className="aboutSection__text">
                    <Title text="Know Who %I'M%" size={2.1} />
                    <div className="aboutSection__description">
                    <Text text={["Hi Everyone, I am %Soumyajit Behera% from %Bhubaneswar, India.%/nI am currently employed as a software developer at Juspay. I have completed Integrated MSc (IMSc) in Maths and Computing at BIT Mesra./n/nApart from coding, some other activities that I love to do!", "Playing Games/nWriting Tech Blogs/nTravelling"]} size={1.25} />
                    </div>
                </div>
                <img className="aboutSection__img" src={ProfilePng} alt="" />
            </div>
        </>
    );
}
