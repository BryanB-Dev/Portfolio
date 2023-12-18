import ProfilePng from "../../assets/profile.png";
import "./style.scss";
import Title from "../../components/Title";
import Text from "../../components/Text";

export default function Profile() {

    return (
        <>
            <div className="profileSection">
                <div className="profleSection__text">
                    <Title text="Know Who %I'M%" size={2.1} />
                    <Text text={["Hi Everyone, I am %Soumyajit Behera% from %Bhubaneswar, India.%/nI am currently employed as a software developer at Juspay. I have completed Integrated MSc (IMSc) in Maths and Computing at BIT Mesra./n/nApart from coding, some other activities that I love to do!", " Playing Games/nWriting Tech Blogs/nTravelling"]} size={1.25} />
                </div>
                <img className="profileSection__img" src={ProfilePng} alt="" />
            </div>
        </>
    );
}
